export interface Tool {
  id: string
  name: string
  description: string
  category: string
  rating: number
  ratingsCount: number
  isNew: boolean
}

export interface Category {
  name: string
  slug: string
  toolCount: number
  icon: React.ReactNode
}

