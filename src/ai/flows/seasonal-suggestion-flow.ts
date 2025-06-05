
'use server';
/**
 * @fileOverview Un agente de IA para sugerir elementos del menú basados en frutas de temporada.
 *
 * - getSeasonalSuggestions - Una función que devuelve recomendaciones de menú estacionales.
 * - SeasonalSuggestionsInput - El tipo de entrada para la función.
 * - SeasonalSuggestionsOutput - El tipo de retorno para la función.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimplifiedMenuItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
});

export const SeasonalSuggestionsInputSchema = z.object({
  menuItems: z.array(SimplifiedMenuItemSchema).describe("Lista de elementos del menú con su ID, nombre y descripción."),
  seasonalFruits: z.array(z.string()).describe("Una lista de frutas actualmente en temporada.")
});
export type SeasonalSuggestionsInput = z.infer<typeof SeasonalSuggestionsInputSchema>;

export const SeasonalSuggestionSchema = z.object({
  menuItemId: z.string().describe("El ID del elemento del menú recomendado."),
  reason: z.string().describe("Una breve y atractiva razón por la cual este artículo es una buena elección de temporada (por ejemplo, '¡Destaca las fresas frescas de temporada!').")
});

export const SeasonalSuggestionsOutputSchema = z.object({
  recommendations: z.array(SeasonalSuggestionSchema).describe("Una lista de hasta 3-4 recomendaciones de menú de temporada.")
});
export type SeasonalSuggestionsOutput = z.infer<typeof SeasonalSuggestionsOutputSchema>;


export async function suggestSeasonalItems(input: SeasonalSuggestionsInput): Promise<SeasonalSuggestionsOutput> {
  return seasonalSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seasonalMenuSuggestionPrompt',
  input: {schema: SeasonalSuggestionsInputSchema},
  output: {schema: SeasonalSuggestionsOutputSchema},
  prompt: `Eres un asesor creativo de menús de cafetería. Dada la siguiente lista de elementos del menú y una lista de frutas de temporada, identifica hasta 3-4 elementos del menú que destaquen prominentemente estas frutas o que serían una excelente especial de temporada debido a ellas.

Para cada recomendación, proporciona el 'menuItemId' y una 'reason' (razón). La razón debe ser breve, atractiva e invitar a los clientes a probar el plato. Asegúrate de que el 'menuItemId' corresponda a un ID de la lista de menú proporcionada.

Elementos del Menú:
{{#each menuItems}}
- ID: {{{id}}}, Nombre: {{{name}}}, Descripción: {{{description}}}
{{/each}}

Frutas de Temporada Actuales:
{{#each seasonalFruits}}
- {{{this}}}
{{/each}}

Genera tus recomendaciones:`,
});

const seasonalSuggestionFlow = ai.defineFlow(
  {
    name: 'seasonalSuggestionFlow',
    inputSchema: SeasonalSuggestionsInputSchema,
    outputSchema: SeasonalSuggestionsOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    // Asegurarnos de que el output no sea null y tenga la estructura esperada.
    // Si output es null o no tiene recommendations, devolvemos un array vacío.
    return output || { recommendations: [] };
  }
);
