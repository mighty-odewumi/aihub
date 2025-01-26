import { notFound } from 'next/navigation'
import { Star } from 'lucide-react'
import { mockTools } from '@/lib/data/mockTools'
import { Button } from '@/components/ui/button'

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = mockTools.find(t => t.id === params.id)

  if (!tool) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{tool.name}</h1>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`
w - 5
h - 5
$
{
  i < Math.floor(tool.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
}
`}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          ({tool.ratingsCount} ratings)
        </span>
      </div>
      <p className="text-lg text-gray-700 mb-6">{tool.description}</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <p><strong>Category:</strong> {tool.category}</p>
        {tool.isNew && (
          <p className="mt-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">New</span>
          </p>
        )}
      </div>
      <Button>Try this tool</Button>
    </div>
  )
}

