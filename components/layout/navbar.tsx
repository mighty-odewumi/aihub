"use client"

import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Search from "@/components/shared/search"
import { CircuitBoard } from "lucide-react"

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CircuitBoard className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">AIHub</span>
            </Link>
            <div className="hidden md:flex md:ml-10 space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Categories
              </Link>
              <Link href="/submit-tool" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Submit Tool
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-72">
              <Search />
            </div>
            {!isSignedIn ? (
              <div className="flex items-center space-x-2">
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Sign Up
                  </Button>
                </Link>
              </div>)
              : (
                <UserButton />
              )
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

