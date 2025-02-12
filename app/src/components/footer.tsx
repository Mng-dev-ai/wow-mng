import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="#"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Your Name
            </Link>
            . The source code is available on{" "}
            <Link
              href="#"
              className="font-medium text-foreground underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}