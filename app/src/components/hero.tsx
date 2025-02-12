import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Create Stunning Websites
          <br className="hidden sm:inline" />
          with the Power of AI
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Build your dream website in minutes. No coding required.
        </p>
        <div className="mt-6 space-x-4">
          <Link to="#">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="#">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}