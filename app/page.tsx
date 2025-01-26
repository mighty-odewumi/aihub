import HeroSection from "@/components/home/hero-section"
import CategoryGrid from "@/components/home/category-grid"
import TrendingTools from "@/components/home/trending-tools"
import NewArrivals from "@/components/home/new-arrivals"
import MostPopular from "@/components/home/most-popular"
import Newsletter from "@/components/home/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <TrendingTools />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <NewArrivals />
        <MostPopular />
      </div>
      <Newsletter />
    </div>
  )
}

