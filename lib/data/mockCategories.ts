/** 
import { Image, MessageSquare, PenTool, Zap, type LucideIcon } from "lucide-react"

interface Category {
  name: string
  slug: string
  toolCount: number
  icon: LucideIcon
}

export const mockCategories: Category[] = [
  { name: "Image Generation", slug: "image-generation", toolCount: 156, icon: Image },
  { name: "Chatbots", slug: "chatbots", toolCount: 89, icon: MessageSquare },
  { name: "Writing", slug: "writing", toolCount: 72, icon: PenTool },
  { name: "Productivity", slug: "productivity", toolCount: 103, icon: Zap },
]
**/

import { 
  Image, 
  MessageSquare, 
  PenTool, 
  Zap, 
  Video, 
  Code, 
  Headphones, 
  Shield, 
  Rocket,
  type LucideIcon 
} from "lucide-react"

interface Category {
  name: string
  slug: string
  toolCount: number
  icon: LucideIcon
}

export const mockCategories: Category[] = [
  { 
    name: "Conversational AI & Chatbots", 
    slug: "conversational-ai", 
    toolCount: 124, 
    icon: MessageSquare 
  },
  { 
    name: "Image & Design Generation", 
    slug: "image-generation", 
    toolCount: 156, 
    icon: Image 
  },
  { 
    name: "Video & Animation Tools", 
    slug: "video-tools", 
    toolCount: 98, 
    icon: Video 
  },
  { 
    name: "Content Creation & Writing", 
    slug: "content-creation", 
    toolCount: 145, 
    icon: PenTool 
  },
  { 
    name: "Coding & Development", 
    slug: "coding-tools", 
    toolCount: 167, 
    icon: Code 
  },
  { 
    name: "Audio & Voice Synthesis", 
    slug: "audio-tools", 
    toolCount: 76, 
    icon: Headphones 
  },
  { 
    name: "Security & Compliance", 
    slug: "security-tools", 
    toolCount: 89, 
    icon: Shield 
  },
  { 
    name: "Productivity & Automation", 
    slug: "productivity", 
    toolCount: 203, 
    icon: Zap 
  },
  { 
    name: "Emerging & Specialized Tech", 
    slug: "emerging-tech", 
    toolCount: 65, 
    icon: Rocket 
  }
]

