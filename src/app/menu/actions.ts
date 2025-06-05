
"use server";

import type { MenuItem } from "@/lib/data";
import { 
  suggestSeasonalItems, 
  type SeasonalSuggestionsInput, 
  type SeasonalSuggestionsOutput 
} from "@/ai/flows/seasonal-suggestion-flow";

export async function getMenuSuggestions(
  menuItems: { id: string; name: string; description: string; }[],
  seasonalFruits: string[]
): Promise<SeasonalSuggestionsOutput | { error: string }> {
  try {
    const input: SeasonalSuggestionsInput = { menuItems, seasonalFruits };
    const result = await suggestSeasonalItems(input);
    return result;
  } catch (error) {
    console.error("Error getting seasonal suggestions:", error);
    return { error: "Failed to get seasonal suggestions. Please try again." };
  }
}
