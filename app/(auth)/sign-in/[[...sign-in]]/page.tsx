"use client"

import { SignIn, useUser } from "@clerk/nextjs"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect")
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push(redirect || "/")
    }
  }, [isLoaded, isSignedIn, router, redirect])

  if (!isLoaded || isSignedIn) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
          },
        }}
        redirectUrl={redirect || "/"}
      />
    </div>
  )
}

