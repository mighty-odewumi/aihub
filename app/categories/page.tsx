import { Card, CardContent } from "@/components/ui/card"
import { mockCategories } from "@/lib/data/mockCategories"
import Link from "next/link"

export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore AI Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of AI tools across various categories to enhance your workflow and boost productivity.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="bg-blue-100 rounded-full p-4 mb-4">
                      <Icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                    <div className="flex items-center justify-between w-full mt-4">
                      <span className="text-sm text-gray-500">{category.toolCount} tools</span>
                      <span className="text-blue-600 font-medium">Explore →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

