"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, Users } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "CASIF 2025",
    date: "March 31, 2026",
    location: "Maker Village, Kochi",
    description:
      "A premier industry forum bringing together innovators, researchers, and professionals. Theme: AI-driven Innovations and Emerging Trends in the Semiconductor Industry.",
    category: "Conference",
    seats: "Limited seats",
  },
  {
    id: 2,
    title: "Technical Talks on RISC-V & Neuromorphic Hardware",
    date: "April 6, 2026",
    location: "Maker Village, Kochi",
    description:
      "Expert sessions on VEGA: Building an Open-Source RISC-V Processor Ecosystem in India by Ms. Neetha Maria Celine (C-DAC) and Next-Generation Neuromorphic Hardware by Dr. Sherin A. Thomas.",
    category: "Technical Talk",
    seats: "Limited seats",
  },
  {
    id: 3,
    title: "Panel Discussion: AI in Semiconductor Industry",
    date: "April 24, 2026",
    location: "Maker Village, Kochi",
    description:
      "Panel on AI-driven Innovations and Emerging Trends featuring experts from ISRO, Bosch, DUK, and C-DAC. Moderated by Dr. Ramkumar S from Sahrdaya College.",
    category: "Panel Discussion",
    seats: "Limited seats",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Analog IC Design Challenge",
    date: "September 24, 2025",
    location: "NIT Calicut",
    description:
      "An initiative to explore the world of circuits where precision meets creativity. Teams battled design problems for a 3K prize pool.",
    category: "Competition",
    seats: "40 seats",
  },
  {
    id: 5,
    title: "Workshop on SoC Design using VEGA RISC-V Processor",
    date: "July 26-27, 2025",
    location: "MEC, Thrikkakara",
    description:
      "Hands-on experience building a System-on-Chip using the VEGA AT1051 RISC-V processor from C-DAC on the Arty A7-100T FPGA platform.",
    category: "Workshop",
    seats: "50 seats",
  },
  {
    id: 6,
    title: "BITSTREAM: FPGA Based SoC Prototyping",
    date: "July 19, 2025",
    location: "TKM CE, Kollam",
    description:
      "A hands-on session designed to dive deep into the world of Field Programmable Gate Arrays and System on Chip design using Vivado.",
    category: "Workshop",
    seats: "50 seats",
  },
  {
    id: 7,
    title: "VEGA Processor Programming Workshop",
    date: "July 12, 2025",
    location: "C-DAC, Vellayambalam",
    description:
      "Introduction to VEGA Microprocessor fundamentals, interactive hands-on programming sessions, and in-depth exploration of VEGA processor architecture.",
    category: "Workshop",
    seats: "Limited seats",
  },
]

function EventCard({
  event,
  isPast = false,
}: {
  event: (typeof upcomingEvents)[0]
  isPast?: boolean
}) {
  return (
    <Card
      className={`group overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        isPast ? "opacity-85 hover:opacity-100" : ""
      }`}
    >
      <CardContent className="p-0">
        {/* Category Badge */}
        <div className="relative">
          <div
            className={`px-6 py-4 ${
              isPast
                ? "bg-[var(--cass-grey)]"
                : "bg-gradient-to-r from-[var(--cass-green-primary)] to-[var(--cass-green-secondary)]"
            }`}
          >
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wide">
              {event.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="mb-4 text-xl font-bold text-[var(--cass-black)] group-hover:text-[var(--cass-green-primary)] transition-colors duration-200">
            {event.title}
          </h3>

          <div className="mb-5 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[var(--cass-grey)]">
              <Calendar className="h-5 w-5 text-[var(--cass-green-primary)]" />
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--cass-grey)]">
              <MapPin className="h-5 w-5 text-[var(--cass-green-primary)]" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--cass-grey)]">
              <Users className="h-5 w-5 text-[var(--cass-green-primary)]" />
              <span>{event.seats}</span>
            </div>
          </div>

          <p className="mb-8 text-sm text-[var(--cass-grey)] leading-relaxed line-clamp-3">
            {event.description}
          </p>

          <Button
            variant={isPast ? "outline" : "default"}
            className={`transition-all duration-200 ${
              isPast
                ? "border-[var(--cass-grey)] text-[var(--cass-grey)] hover:bg-[var(--cass-grey)] hover:text-white"
                : "bg-[var(--cass-green-primary)] hover:bg-[var(--cass-green-primary)]/90 text-white hover:shadow-lg"
            }`}
          >
            {isPast ? "View Details" : "Learn More"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  return (
    <section id="events" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[var(--cass-green-primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--cass-green-primary)]">
            Events
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--cass-black)] sm:text-5xl lg:text-6xl text-balance">
            Workshops, Seminars & Conferences
          </h2>
          <p className="mt-6 text-lg text-[var(--cass-grey)] text-pretty leading-relaxed">
            Join us for exciting technical events, workshops, and networking
            opportunities that bring together professionals, researchers, and
            students.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-card p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`rounded-lg px-8 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === "upcoming"
                  ? "bg-[var(--cass-green-primary)] text-white shadow-md"
                  : "text-[var(--cass-grey)] hover:text-[var(--cass-black)] hover:bg-muted/50"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`rounded-lg px-8 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === "past"
                  ? "bg-[var(--cass-green-primary)] text-white shadow-md"
                  : "text-[var(--cass-grey)] hover:text-[var(--cass-black)] hover:bg-muted/50"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeTab === "upcoming"
            ? upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            : pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
        </div>
      </div>
    </section>
  )
}
