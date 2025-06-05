
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
  menuItemId: z.string().describe("El ID del elemento del menú recomendado."),
  reason: z.string().describe("Una breve y atractiva razón por la cual este artículo es una buena elección de temporada (por ejemplo, '¡Destaca las fresas frescas de temporada!').")
});

const SeasonalSuggestionsOutputSchema = z.object({
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
  prompt: `Eres un asesor creativo de menús de cafetería experto en destacar ingredientes de temporada.
Analiza la siguiente lista de nuestros 'Elementos del Menú' y compárala con la lista de 'Frutas de Temporada Actuales'.
Tu objetivo es identificar entre 1 y 4 elementos del menú que sean especialmente relevantes debido a estas frutas de temporada.

Para cada elemento que selecciones:
1.  Asegúrate de que el 'menuItemId' sea el ID EXACTO de uno de los 'Elementos del Menú' proporcionados. NO inventes IDs.
2.  Crea una 'reason' (razón) breve y atractiva. Esta razón debe explicar por qué el plato es una buena elección de temporada, idealmente mencionando la fruta de temporada que contiene o con la que se relaciona. Por ejemplo: "¡Perfecto para la temporada, con el toque dulce de nuestras fresas frescas!" o "Elaborado con jugosos mangos de estación."

Si encuentras elementos que claramente utilizan una o más de las frutas de temporada, priorízalos.

Elementos del Menú:
{{#each menuItems}}
- ID: {{{id}}}, Nombre: {{{name}}}, Descripción: {{{description}}}
{{/each}}

Frutas de Temporada Actuales:
{{#each seasonalFruits}}
- {{{this}}}
{{/each}}

Proporciona tus recomendaciones en el formato especificado. Si no encuentras ninguna sugerencia clara, devuelve una lista de recomendaciones vacía.`,
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
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
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

