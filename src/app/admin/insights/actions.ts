
"use server";

import { analyzeCustomerFeedback, AnalyzeCustomerFeedbackInput, AnalyzeCustomerFeedbackOutput } from "@/ai/flows/customer-insight-ai";

export async function getCustomerInsights(
  input: AnalyzeCustomerFeedbackInput
): Promise<AnalyzeCustomerFeedbackOutput | { error: string }> {
  try {
    const result = await analyzeCustomerFeedback(input);
    return result;
  } catch (error) {
    console.error("Error analyzing customer feedback:", error);
    return { error: "Failed to analyze feedback. Please try again." };
  }
}
