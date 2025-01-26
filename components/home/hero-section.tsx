import Search from "@/components/shared/search"

export default function HeroSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">Discover the Best AI Tools</h1>
        <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
          Explore 1000+ AI tools across 50+ categories to enhance your workflow and boost productivity
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <Search />
        </div>
      </div>
    </div>
  )
}

