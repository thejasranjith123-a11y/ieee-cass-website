"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--cass-green-primary)] via-[#006847] to-[var(--cass-green-secondary)]"
    >
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="white" />
              <circle cx="50" cy="50" r="2" fill="white" />
              <circle cx="90" cy="30" r="2" fill="white" />
              <circle cx="30" cy="70" r="2" fill="white" />
              <circle cx="70" cy="90" r="2" fill="white" />
              <path
                d="M10 10 L50 10 L50 50"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M50 50 L90 50 L90 30"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M50 50 L50 70 L30 70"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M70 90 L70 70 L90 70"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 h-24 w-24 animate-pulse rounded-full bg-[var(--cass-green-secondary)] opacity-20 blur-2xl" />
      <div className="absolute bottom-1/3 right-10 h-40 w-40 animate-pulse rounded-full bg-white opacity-10 blur-2xl" />
      <div className="absolute top-1/2 left-1/3 h-20 w-20 animate-pulse rounded-full bg-[var(--cass-green-secondary)] opacity-15 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-40 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--cass-green-secondary)]" />
            <span className="text-sm font-medium text-white">
              Advancing Circuits & Systems in Kerala
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-balance">
            IEEE Circuits and Systems Society
          </h1>
          <p className="mb-4 text-2xl font-semibold text-white/90 sm:text-3xl">
            Kerala Chapter
          </p>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed text-pretty">
            Empowering the next generation of engineers through innovation,
            collaboration, and excellence in research and education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="group bg-white text-[var(--cass-green-primary)] hover:bg-white/90 font-semibold px-8 py-6 text-base transition-all duration-200 hover:shadow-xl hover:scale-105"
              onClick={() => handleNavClick("#about")}
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold px-8 py-6 text-base transition-all duration-200 hover:border-white/50"
              onClick={() => handleNavClick("#events")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "500+", label: "Active Members" },
            { value: "15+", label: "Events This Year" },
            { value: "10+", label: "Institutions" },
            { value: "50+", label: "Industry Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-4xl font-bold text-white sm:text-5xl transition-transform group-hover:scale-110">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
