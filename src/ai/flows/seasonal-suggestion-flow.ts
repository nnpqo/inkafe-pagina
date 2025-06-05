
'use server';
/**
 * @fileOverview Un agente de IA para sugerir elementos del menú basados en frutas de temporada.
 *
 * - suggestSeasonalItems - Una función que devuelve recomendaciones de menú estacionales.
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

const SeasonalSuggestionsInputSchema = z.object({
  menuItems: z.array(SimplifiedMenuItemSchema).describe("Lista de elementos del menú con su ID, nombre y descripción."),
  seasonalFruits: z.array(z.string()).describe("Una lista de frutas actualmente en temporada.")
});
export type SeasonalSuggestionsInput = z.infer<typeof SeasonalSuggestionsInputSchema>;

const SeasonalSuggestionSchema = z.object({
  menuItemId: z.string().describe("El ID EXACTO de un elemento del menú proporcionado."),
  reason: z.string().describe("Breve explicación de por qué es relevante para la temporada (ej: 'Con fresas de temporada').")
});

const SeasonalSuggestionsOutputSchema = z.object({
  recommendations: z.array(SeasonalSuggestionSchema).describe("Una lista de 1 a 4 recomendaciones de menú de temporada. Si no hay ninguna, la lista estará vacía.")
});
export type SeasonalSuggestionsOutput = z.infer<typeof SeasonalSuggestionsOutputSchema>;


export async function suggestSeasonalItems(input: SeasonalSuggestionsInput): Promise<SeasonalSuggestionsOutput> {
  return seasonalSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seasonalMenuSuggestionPrompt',
  input: {schema: SeasonalSuggestionsInputSchema},
  output: {schema: SeasonalSuggestionsOutputSchema},
  prompt: `Eres un asesor creativo de menús de cafetería. Tu tarea es analizar nuestra 'Lista de Elementos del Menú' y la 'Lista de Frutas de Temporada Actuales'.
Debes identificar entre 1 y 4 elementos de NUESTRA lista de menú que sean especialmente adecuados para la temporada actual debido a estas frutas.

IMPORTANTE:
1.  Para cada recomendación, el 'menuItemId' DEBE SER el ID exacto de un artículo de la 'Lista de Elementos del Menú' que te proporciono. No inventes IDs ni sugieras artículos que no estén en la lista.
2.  Para cada recomendación, proporciona una 'reason' (razón) muy breve y directa que explique por qué el artículo es una buena elección de temporada, mencionando la fruta de temporada si es posible. Ejemplo de razón: "Destaca las fresas frescas de temporada." o "Elaborado con mangos de estación."

Analiza cuidadosamente la descripción de cada elemento del menú para encontrar coincidencias con las frutas de temporada.

Lista de Elementos del Menú:
{{#each menuItems}}
- ID: {{{id}}}, Nombre: {{{name}}}, Descripción: {{{description}}}
{{/each}}

Lista de Frutas de Temporada Actuales:
{{#each seasonalFruits}}
- {{{this}}}
{{/each}}

Proporciona tus recomendaciones en el formato JSON especificado por el esquema de salida.
Si después de un análisis exhaustivo no encuentras ningún elemento del menú que encaje claramente con las frutas de temporada, devuelve una lista de 'recommendations' vacía.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
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
