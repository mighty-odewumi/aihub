import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import ToolCard from "@/components/cards/tool-card"
import { searchTools } from "@/lib/search"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const { userId } = await auth()
  if (!userId) {
    redirect(`/sign-in?redirect=${encodeURIComponent(`/search?q=${searchParams.q || ""}`)}`)
  }

  const query = searchParams.q || ""
  const results = await searchTools(query)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results for "{query}"</h1>
        {results.length === 0 ? (
          <p className="text-gray-600">No results found. Try a different search term.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((tool: any) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

