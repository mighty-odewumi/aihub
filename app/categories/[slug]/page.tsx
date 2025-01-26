import { notFound } from "next/navigation"
import ToolCard from "@/components/cards/tool-card"
import { mockCategories } from "@/lib/data/mockCategories"
import { mockTools } from "@/lib/data/mockTools"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = mockCategories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const categoryTools = mockTools.filter((tool) => tool.category === category.name)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

