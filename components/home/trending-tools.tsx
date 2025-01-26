import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const trendingTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot",
    description: "Advanced language model for natural conversations and content generation",
    rating: 4.9,
    ratingCount: "2.3k",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aiHub%20page%202-NmCUvTAAQJRKf98AT5tIXr3c8KVv3n.png",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Image",
    description: "AI-powered image generation tool for creating stunning artworks",
    rating: 4.8,
    ratingCount: "1.8k",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aiHub%20page%202-NmCUvTAAQJRKf98AT5tIXr3c8KVv3n.png",
  },
  {
    id: "bard",
    name: "Bard",
    category: "Chatbot",
    description: "Experimental conversational AI service powered by Google",
    rating: 4.7,
    ratingCount: "1.5k",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aiHub%20page%202-NmCUvTAAQJRKf98AT5tIXr3c8KVv3n.png",
  },
]

export default function TrendingTools() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Tools</h2>
          <Link href="/trending" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingTools.map((tool) => (
            <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">{tool.name[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <Link href={`/tools/${tool.id}`} className="hover:underline">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{tool.name}</h3>
                      </Link>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{tool.rating}</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{tool.category}</span>
                      <span className="text-xs text-blue-600">↑ {tool.ratingCount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

