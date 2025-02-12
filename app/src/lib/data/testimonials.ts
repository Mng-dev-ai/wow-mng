interface Testimonial {
  name: string
  avatar: string
  rating: number
  text: string
}

export const testimonialsData: Testimonial[] = [
  {
    name: "John Doe",
    avatar: "https://picsum.photos/seed/john/40/40",
    rating: 5,
    text: "This platform is amazing! It helped me create a professional website in just a few hours. Highly recommended!",
  },
  {
    name: "Jane Smith",
    avatar: "https://picsum.photos/seed/jane/40/40",
    rating: 4,
    text: "I love the AI-powered design feature. It generated a beautiful design that perfectly matched my brand.",
  },
  {
    name: "David Lee",
    avatar: "https://picsum.photos/seed/david/40/40",
    rating: 5,
    text: "The no-code builder is a game-changer. I was able to customize everything without any coding knowledge.",
  },
  {
    name: "Sarah Brown",
    avatar: "https://picsum.photos/seed/sarah/40/40",
    rating: 4,
    text: "The responsive layouts are fantastic. My website looks great on both desktop and mobile devices.",
  },
  {
    name: "Michael Chen",
    avatar: "https://picsum.photos/seed/michael/40/40",
    rating: 5,
    text: "The performance is outstanding. My website loads incredibly fast, which is crucial for user experience.",
  },
  {
    name: "Emily Wilson",
    avatar: "https://picsum.photos/seed/emily/40/40",
    rating: 5,
    text: "The user-friendly interface made the whole process so easy. I'm not tech-savvy, but I had no trouble creating my website.",
  },
]