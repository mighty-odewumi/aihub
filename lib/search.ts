import { mockTools } from "./data/mockTools"
import type { Tool } from "./types"

export async function searchTools(query: string): Promise<Tool[]> {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  const lowercaseQuery = query.toLowerCase()
  return mockTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.category.toLowerCase().includes(lowercaseQuery),
  )
}
