import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const popularTools = [
  {
    id: "dalle",
    name: "DALL·E",
    description: "AI image generation by OpenAI",
    users: "50k+ users",
  },
  {
    id: "vertex-ai",
    name: "Vertex AI",
    description: "Enterprise AI platform",
    users: "35k+ users",
  },
]

export default function MostPopular() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Popular</h2>
      <div className="space-y-4">
        {popularTools.map((tool) => (
          <Card key={tool.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{tool.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{tool.users}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

