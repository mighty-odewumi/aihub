import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Tool } from "@/lib/types"

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="hover:shadow-md transition duration-300 ease-in-out">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">{tool.name.charAt(0)}</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <Link href={`/tools/${tool.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 hover:underline">{tool.name}</h3>
              </Link>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{tool.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">{tool.category}</span>
              {tool.isNew && (
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">New</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

