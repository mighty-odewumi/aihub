"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function Search() {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const { isSignedIn, isLoaded } = useUser()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      const searchUrl = `/search?q=${encodeURIComponent(query.trim())}`
      if (isLoaded && isSignedIn) {
        router.push(searchUrl)
      } else {
        router.push(`/sign-in?redirect=${encodeURIComponent(searchUrl)}`)
      }
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <Input
        type="text"
        placeholder="Search AI tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 h-12 rounded-lg border-gray-300"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </form>
  )
}

