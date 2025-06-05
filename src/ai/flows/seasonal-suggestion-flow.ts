
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
  menuItemId: z.string().describe("ID del elemento del menú."), // Muy simple
  reason: z.string().describe("Breve explicación de por qué es de temporada.") // Muy simple
});

const SeasonalSuggestionsOutputSchema = z.object({
  recommendations: z.array(SeasonalSuggestionSchema).describe("Lista de recomendaciones. Puede estar vacía.")
});
export type SeasonalSuggestionsOutput = z.infer<typeof SeasonalSuggestionsOutputSchema>;


export async function suggestSeasonalItems(input: SeasonalSuggestionsInput): Promise<SeasonalSuggestionsOutput> {
  return seasonalSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seasonalMenuSuggestionPrompt',
  input: {schema: SeasonalSuggestionsInputSchema},
  output: {schema: SeasonalSuggestionsOutputSchema},
  prompt: `Tu tarea es analizar una lista de elementos de menú y una lista de frutas de temporada.
Debes identificar qué elementos del menú contienen alguna de las frutas de temporada en su nombre o descripción.

Entrada:
1.  Lista de Elementos del Menú:
    {{#each menuItems}}
    - ID: {{{id}}}, Nombre: {{{name}}}, Descripción: {{{description}}}
    {{/each}}
2.  Lista de Frutas de Temporada Actuales:
    {{#each seasonalFruits}}
    - {{{this}}}
    {{/each}}

Instrucciones de Salida:
Debes devolver un objeto JSON.
Este objeto JSON DEBE tener una única clave llamada "recommendations".
El valor de "recommendations" DEBE ser un array de objetos.
Cada objeto en el array "recommendations" debe tener DOS claves:
1.  "menuItemId": El ID exacto del elemento del menú sugerido (de la lista de entrada).
2.  "reason": Una frase MUY CORTA explicando por qué el plato es de temporada (ej: "Contiene mango de temporada.", "Hecho con fresas frescas.").

Ejemplo de salida CON recomendaciones:
{
  "recommendations": [
    {"menuItemId": "some-id-1", "reason": "Contiene fresas de temporada."},
    {"menuItemId": "another-id-2", "reason": "Perfecto para la temporada de mangos."}
  ]
}

IMPORTANTE: Si NO encuentras NINGÚN elemento del menú que coincida con las frutas de temporada:
Tu respuesta COMPLETA Y EXACTA DEBE SER:
{
  "recommendations": []
}
NO incluyas ningún texto adicional, explicaciones, ni ningún otro formato si no hay recomendaciones.
NO devuelvas un array vacío \`[]\` como respuesta de nivel superior.
NO devuelvas \`null\` o un objeto vacío \`{}\`.
La respuesta DEBE ser SIEMPRE un objeto JSON que comience con \`{"recommendations": ...}\`.`,
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

    if (!output || !output.recommendations) {
      console.warn(
        "Genkit flow 'seasonalSuggestionFlow' received an output from the prompt that was null or missing 'recommendations' after parsing. Returning an empty array."
      );
      return { recommendations: [] };
    }
    return output;
  }
);
