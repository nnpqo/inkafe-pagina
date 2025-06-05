
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
  reason: z.string().describe("Breve explicación de por qué es relevante para la temporada, mencionando la fruta. (ej: 'Contiene fresas de temporada').")
});

const SeasonalSuggestionsOutputSchema = z.object({
  recommendations: z.array(SeasonalSuggestionSchema).describe("Una lista de hasta 4 recomendaciones de menú de temporada basadas en coincidencias directas con las frutas. Si no hay ninguna, la lista estará vacía.")
});
export type SeasonalSuggestionsOutput = z.infer<typeof SeasonalSuggestionsOutputSchema>;


export async function suggestSeasonalItems(input: SeasonalSuggestionsInput): Promise<SeasonalSuggestionsOutput> {
  return seasonalSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seasonalMenuSuggestionPrompt',
  input: {schema: SeasonalSuggestionsInputSchema},
  output: {schema: SeasonalSuggestionsOutputSchema},
  prompt: `Eres un asistente de análisis de menú. Tu tarea es:
1.  Examinar la 'Lista de Elementos del Menú' proporcionada.
2.  Examinar la 'Lista de Frutas de Temporada Actuales' proporcionada.
3.  Identificar elementos de la 'Lista de Elementos del Menú' cuyo NOMBRE o DESCRIPCIÓN contenga explícitamente una o más de las 'Lista de Frutas de Temporada Actuales'.
4.  Para cada elemento del menú identificado, DEBES usar su 'ID' exacto como 'menuItemId'.
5.  Para cada uno, proporciona una 'reason' que indique brevemente qué fruta(s) de temporada contiene. Ejemplo: "Contiene fresas de temporada." o "Elaborado con palta (aguacate) de temporada."

Formato de Salida ESTRICTO (JSON Object):
La respuesta DEBE ser un objeto JSON.
Este objeto JSON DEBE tener una única clave de nivel superior llamada "recommendations".
El valor de "recommendations" DEBE ser un array de objetos.

Si encuentras recomendaciones:
Cada objeto en el array "recommendations" DEBE tener EXACTAMENTE dos claves:
    1.  "menuItemId": (string) El ID exacto del elemento del menú de la lista proporcionada.
    2.  "reason": (string) Una breve explicación mencionando la fruta de temporada relevante. Ejemplo: "Contiene fresas de temporada."

Si NO encuentras NINGUNA recomendación que coincida:
La respuesta COMPLETA Y EXACTA debe ser:
\`{"recommendations": []}\`
NO añadas ningún texto, explicación o formato adicional si no hay recomendaciones.

Ejemplo de salida CON recomendaciones:
\`{"recommendations": [{"menuItemId": "3", "reason": "Contiene palta fresca de temporada."}, {"menuItemId": "5", "reason": "Destaca el maracuyá de temporada."}]}\`

Ejemplo de salida SIN recomendaciones (respuesta exacta esperada):
\`{"recommendations": []}\`

NO DEVUELVAS NUNCA un array vacío \`[]\` como respuesta de nivel superior.
NO DEVUELVAS NUNCA \`null\` como respuesta de nivel superior.
La respuesta DEBE ser SIEMPRE un objeto JSON que comience con \`{"recommendations": ...}\`.

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
    const {output} = await prompt(input);
    // Asegurarnos de que el output no sea null y tenga la estructura esperada.
    // Si output es null o no tiene recommendations, devolvemos un array vacío.
    return output || { recommendations: [] };
  }
);

