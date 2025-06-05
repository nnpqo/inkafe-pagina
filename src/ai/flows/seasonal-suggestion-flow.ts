
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
  menuItemId: z.string().describe("ID del elemento del menú."), // Simplified
  reason: z.string().describe("Razón de la sugerencia.") // Simplified
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
  prompt: `Eres un asistente de menú de cafetería. Tu tarea es:
1.  Examinar la 'Lista de Elementos del Menú' y la 'Lista de Frutas de Temporada Actuales' proporcionadas.
2.  Identificar HASTA 4 elementos de la 'Lista de Elementos del Menú' que sean especialmente relevantes para la temporada actual.
    *   PRIORIZA elementos cuyo NOMBRE o DESCRIPCIÓN contengan explícitamente una o más de las 'Lista de Frutas de Temporada Actuales'.
    *   Si no encuentras coincidencias directas, puedes considerar elementos que temáticamente encajen bien con la temporada o las frutas mencionadas.
3.  Para CADA elemento del menú identificado:
    *   DEBES usar su 'ID' exacto (proporcionado en la entrada) como 'menuItemId'.
    *   Proporciona una 'reason' concisa que explique por qué es una buena sugerencia de temporada (ej: "Contiene fresas de temporada.", "Ideal para disfrutar del mango fresco de esta estación.").

Formato de Salida ESTRICTO (Objeto JSON):
La respuesta DEBE ser un objeto JSON.
Este objeto JSON DEBE tener una única clave de nivel superior llamada "recommendations".
El valor de "recommendations" DEBE ser un array de objetos.

Ejemplo de salida CON recomendaciones:
{
  "recommendations": [
    {"menuItemId": "3", "reason": "Elaborado con palta fresca de temporada."},
    {"menuItemId": "5", "reason": "Destaca el maracuyá de temporada."}
  ]
}

Si NO encuentras NINGUNA recomendación adecuada después de tu análisis:
La respuesta COMPLETA Y EXACTA debe ser:
{
  "recommendations": []
}
NO añadas ningún texto, explicación o formato adicional si no hay recomendaciones.
NO DEVUELVAS NUNCA un array vacío \`[]\` como respuesta de nivel superior, ni \`null\`. La respuesta SIEMPRE debe ser un objeto JSON que comience con \`{"recommendations": ...}\`.

Lista de Elementos del Menú:
{{#each menuItems}}
- ID: {{{id}}}, Nombre: {{{name}}}, Descripción: {{{description}}}
{{/each}}

Lista de Frutas de Temporada Actuales:
{{#each seasonalFruits}}
- {{{this}}}
{{/each}}`,
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
    // The `prompt` call here will attempt to parse the LLM's response
    // into `SeasonalSuggestionsOutputSchema`. If it fails, it will throw an error,
    // which will be caught by the `try...catch` in the calling server action.
    const {output} = await prompt(input);

    // This is a fallback. If 'output' is null or 'output.recommendations' is missing
    // after a supposedly successful parse (less likely with strict Zod), return empty.
    if (!output || !output.recommendations) {
      console.warn(
        "Genkit flow 'seasonalSuggestionFlow' received an output from the prompt that was null or missing 'recommendations'. Returning an empty array."
      );
      return { recommendations: [] };
    }
    return output;
  }
);
