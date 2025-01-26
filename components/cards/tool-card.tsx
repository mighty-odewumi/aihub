"use client"

import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Tool } from "@/lib/types"

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const router = useRouter()
  const { isSignedIn } = useUser()

  const handleRating = () => {
    if (isSignedIn) {
      // TODO: Implement rating modal
      console.log("Open rating modal for:", tool.name)
    } else {
      router.push("/sign-in")
    }
  }

  return (
    <Card className="hover:shadow-md transition duration-300 ease-in-out">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-semibold">{tool.name.charAt(0)}</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{tool.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">{tool.category}</span>
              <button
                onClick={handleRating}
                className="text-sm text-purple-600 hover:text-purple-800 transition duration-300 ease-in-out"
              >
                Rate this tool
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

