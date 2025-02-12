import { featuresData } from "@/lib/data/features"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function Features() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Features
        </h2>
        <p className="text-muted-foreground max-w-[85%] text-lg sm:text-xl mx-auto">
          Discover the amazing features that make our platform stand out.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature) => (
          <Card key={feature.title} className="flex flex-col justify-between">
            <CardContent className="pt-6">
              {feature.icon}
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription className="mt-2">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}