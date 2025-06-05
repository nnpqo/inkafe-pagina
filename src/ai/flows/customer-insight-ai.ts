'use server';

/**
 * @fileOverview An AI agent for summarizing customer reviews and providing personalized responses or improvements.
 *
 * - analyzeCustomerFeedback - A function that analyzes customer reviews and provides insights.
 * - AnalyzeCustomerFeedbackInput - The input type for the analyzeCustomerFeedback function.
 * - AnalyzeCustomerFeedbackOutput - The return type for the analyzeCustomerFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeCustomerFeedbackInputSchema = z.object({
  customerReviews: z
    .string()
    .describe('A collection of customer reviews for the cafe.'),
});

export type AnalyzeCustomerFeedbackInput = z.infer<
  typeof AnalyzeCustomerFeedbackInputSchema
>;

const AnalyzeCustomerFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the customer reviews.'),
  suggestions: z
    .string()
    .describe('Personalized responses or improvements based on common suggestions.'),
});

export type AnalyzeCustomerFeedbackOutput = z.infer<
  typeof AnalyzeCustomerFeedbackOutputSchema
>;

export async function analyzeCustomerFeedback(
  input: AnalyzeCustomerFeedbackInput
): Promise<AnalyzeCustomerFeedbackOutput> {
  return analyzeCustomerFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeCustomerFeedbackPrompt',
  input: {schema: AnalyzeCustomerFeedbackInputSchema},
  output: {schema: AnalyzeCustomerFeedbackOutputSchema},
  prompt: `You are a cafe manager assistant. Analyze the following customer reviews and provide a summary of the customer sentiment, and personalized suggestions for improvements.

Customer Reviews:
{{{customerReviews}}}

Summary:

Suggestions:`,
});

const analyzeCustomerFeedbackFlow = ai.defineFlow(
  {
    name: 'analyzeCustomerFeedbackFlow',
    inputSchema: AnalyzeCustomerFeedbackInputSchema,
    outputSchema: AnalyzeCustomerFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
