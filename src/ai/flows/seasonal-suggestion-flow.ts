
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
  menuItemId: z.string().describe("El ID EXACTO de un elemento del menú proporcionado en la entrada."),
  reason: z.string().describe("Breve explicación de por qué es relevante para la temporada, mencionando la fruta o el tema estacional. (ej: 'Contiene fresas de temporada', 'Perfecto para el verano con mango fresco').")
});

const SeasonalSuggestionsOutputSchema = z.object({
  recommendations: z.array(SeasonalSuggestionSchema).describe("Una lista de hasta 4 recomendaciones de menú de temporada. Si no hay ninguna, la lista estará vacía.")
});
export type SeasonalSuggestionsOutput = z.infer<typeof SeasonalSuggestionsOutputSchema>;


export async function suggestSeasonalItems(input: SeasonalSuggestionsInput): Promise<SeasonalSuggestionsOutput> {
  return seasonalSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seasonalMenuSuggestionPrompt',
  input: {schema: SeasonalSuggestionsInputSchema},
  output: {schema: SeasonalSuggestionsOutputSchema},
  prompt: `Eres un asistente experto en menús de cafetería. Tu tarea es:
1.  Examinar la 'Lista de Elementos del Menú' y la 'Lista de Frutas de Temporada Actuales' proporcionadas.
2.  Identificar HASTA 4 elementos de la 'Lista de Elementos del Menú' que sean especialmente relevantes para la temporada actual.
    *   PRIORIZA elementos cuyo NOMBRE o DESCRIPCIÓN contengan explícitamente una o más de las 'Lista de Frutas de Temporada Actuales'.
    *   Si no encuentras coincidencias directas, puedes considerar elementos que temáticamente encajen bien con la temporada o las frutas mencionadas.
3.  Para CADA elemento del menú identificado:
    *   DEBES usar su 'ID' exacto (proporcionado en la entrada) como 'menuItemId'.
    *   Proporciona una 'reason' concisa que explique por qué es una buena sugerencia de temporada (ej: "Contiene fresas de temporada.", "Ideal para disfrutar del mango fresco de esta estación.", "Un postre refrescante con maracuyá.").

Formato de Salida ESTRICTO (Objeto JSON):
La respuesta DEBE ser un objeto JSON.
Este objeto JSON DEBE tener una única clave de nivel superior llamada "recommendations".
El valor de "recommendations" DEBE ser un array de objetos.

Ejemplo de salida CON recomendaciones:
\`{"recommendations": [{"menuItemId": "3", "reason": "Elaborado con palta fresca de temporada."}, {"menuItemId": "5", "reason": "Destaca el maracuyá de temporada."}]}\`

Si NO encuentras NINGUNA recomendación adecuada después de tu análisis:
La respuesta COMPLETA Y EXACTA debe ser:
\`{"recommendations": []}\`
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
    const {output} = await prompt(input);
    // Asegurarnos de que el output no sea null y tenga la estructura esperada.
    // Si output es null o no tiene recommendations, devolvemos un array vacío.
    return output || { recommendations: [] };
  }
);
