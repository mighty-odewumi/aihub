"use client"

import { useState } from "react"
import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Search from "@/components/shared/search"
import { CircuitBoard, Menu, X } from "lucide-react"

export default function Navbar() {
  const { isSignedIn, user } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    // { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/submit-tool", label: "Submit Tool" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CircuitBoard className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">AIHub</span>
            </Link>
            <div className="hidden nav:flex nav:ml-10 space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`hidden nav:block w-[8rem] ${isSignedIn && "w-6"}`}>
              <Search />
            </div>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <div className="hidden nav:flex items-center space-x-2">
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
              </div>
            )}
            <div className="nav:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="nav:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <Search />
              {isSignedIn ? (
                <div className="mt-3 px-3">
                  {/* <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <UserButton />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user?.fullName}</div>
                      <div className="text-sm font-medium text-gray-500">{user?.primaryEmailAddress?.emailAddress}</div>
                    </div>
                  </div> */}
                </div>
              ) : (
                <div className="mt-3 space-y-1">
                  <Link href="/sign-in">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      className="w-full justify-start bg-blue-600 hover:bg-blue-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
