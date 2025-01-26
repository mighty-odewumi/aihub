"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email)
  }

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with AI Innovations</h2>
        <p className="text-lg text-blue-100 mb-8">Get weekly updates about new AI tools and industry insights</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow h-12 bg-white"
              required
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </div>
    </div>
  )
}

