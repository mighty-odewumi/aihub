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
  TypeIcon as type,
  type LucideIcon,
} from "lucide-react"

interface Category {
  name: string
  slug: string
  toolCount: number
  icon: LucideIcon
  description: string
}

export const mockCategories: Category[] = [
  {
    name: "Conversational AI & Chatbots",
    slug: "conversational-ai",
    toolCount: 124,
    icon: MessageSquare,
    description: "Engage users with intelligent chat interfaces and virtual assistants.",
  },
  {
    name: "Image & Design Generation",
    slug: "image-generation",
    toolCount: 156,
    icon: Image,
    description: "Create stunning visuals and designs with AI-powered tools.",
  },
  {
    name: "Video & Animation Tools",
    slug: "video-tools",
    toolCount: 98,
    icon: Video,
    description: "Produce captivating videos and animations using AI technology.",
  },
  {
    name: "Content Creation & Writing",
    slug: "content-creation",
    toolCount: 145,
    icon: PenTool,
    description: "Generate high-quality content and improve your writing with AI assistance.",
  },
  {
    name: "Coding & Development",
    slug: "coding-tools",
    toolCount: 167,
    icon: Code,
    description: "Enhance your coding workflow with AI-powered development tools.",
  },
  {
    name: "Audio & Voice Synthesis",
    slug: "audio-tools",
    toolCount: 76,
    icon: Headphones,
    description: "Create and manipulate audio content with advanced AI algorithms.",
  },
  {
    name: "Security & Compliance",
    slug: "security-tools",
    toolCount: 89,
    icon: Shield,
    description: "Protect your digital assets and ensure compliance with AI-driven security tools.",
  },
  {
    name: "Productivity & Automation",
    slug: "productivity",
    toolCount: 203,
    icon: Zap,
    description: "Streamline your workflow and automate tasks with AI-powered productivity tools.",
  },
  {
    name: "Emerging & Specialized Tech",
    slug: "emerging-tech",
    toolCount: 65,
    icon: Rocket,
    description: "Explore cutting-edge AI technologies and specialized applications.",
  },
]

