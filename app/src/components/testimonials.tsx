import { testimonialsData } from "@/lib/data/testimonials"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Testimonials
        </h2>
        <p className="text-muted-foreground max-w-[85%] text-lg sm:text-xl mx-auto">
          See what our users are saying about their experience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col justify-between">
            <CardHeader className="flex-row items-center gap-4 pb-0">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardDescription className="text-base font-medium">
                  {testimonial.name}
                </CardDescription>
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription>{testimonial.text}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}