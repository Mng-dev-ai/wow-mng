import {
  Code2,
  LayoutDashboard,
  LucideIcon,
  Palette,
  SmilePlus,
  Zap,
} from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export const featuresData: Feature[] = [
  {
    title: "AI-Powered Design",
    description:
      "Generate unique and beautiful website designs with the help of our advanced AI algorithms.",
    icon: Palette,
  },
  {
    title: "No-Code Builder",
    description:
      "Create and customize your website without writing a single line of code.",
    icon: Code2,
  },
  {
    title: "Responsive Layouts",
    description:
      "Ensure your website looks perfect on any device with our responsive layout options.",
    icon: LayoutDashboard,
  },
  {
    title: "Fast Performance",
    description:
      "Enjoy lightning-fast loading speeds and optimal performance for your website.",
    icon: Zap,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our intuitive interface makes website creation a breeze, even for beginners.",
    icon: SmilePlus,
  },
  {
    title: "Customizable Templates",
    description:
      "Start with a professionally designed template and customize it to fit your brand.",
    icon: LayoutDashboard,
  },
]