"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from "lucide-react"

const professionalExecom = [
  {
    name: "Mr. Libin T.T",
    role: "Chair",
    organization: "Associate Director and Scientist 'F' at C-DAC",
    email: "libin@cdac.in",
    image: null,
  },
  {
    name: "Dr. Jagdeesh Kumar P",
    role: "Vice Chair",
    organization: "Assistant Professor at Model Engineering College, Thrikkakara",
    email: "jagadeeshkumarp@mec.ac.in",
    image: null,
  },
  {
    name: "Dr. Elizabeth George",
    role: "Secretary",
    organization: "Chief RF Solution Architect, XARK Technologies Pvt Ltd",
    email: "elizabeth.george@ieee.org",
    image: null,
  },
]

const studentLeadership = [
  {
    name: "Mohammed Shan",
    role: "Student Representative",
    organization: "Final Year B.Tech ECE, Cochin University of Science and Technology",
    phone: "+91 7736273307",
    image: null,
  },
  {
    name: "Lakshmi Dineshkumar",
    role: "EC Coordinator",
    organization: "B.Tech ECE, Mar Athanasius College of Engineering",
    phone: "+91 8590444031",
    image: null,
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(n => n.length > 0)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

function TeamCard({ member, isStudent = false }: { member: typeof professionalExecom[0] | typeof studentLeadership[0], isStudent?: boolean }) {
  const studentMember = member as typeof studentLeadership[0]
  const profMember = member as typeof professionalExecom[0]
  
  return (
    <Card className="group overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:border-[var(--cass-green-primary)]/30 hover:shadow-xl hover:-translate-y-3">
      <CardContent className="p-8 text-center">
        {/* Avatar */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cass-green-primary)] to-[var(--cass-green-secondary)] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <span className="text-3xl font-bold">
            {getInitials(member.name)}
          </span>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-[var(--cass-black)]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-[var(--cass-green-primary)]">
          {member.role}
        </p>
        <p className="mt-3 text-sm text-[var(--cass-grey)] leading-relaxed">
          {member.organization}
        </p>

        {/* Contact Links */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {!isStudent && profMember.email && (
            <a
              href={`mailto:${profMember.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[var(--cass-grey)] transition-all duration-200 hover:bg-[var(--cass-green-primary)] hover:text-white hover:scale-110"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {isStudent && studentMember.phone && (
            <a
              href={`tel:${studentMember.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[var(--cass-grey)] transition-all duration-200 hover:bg-[var(--cass-green-primary)] hover:text-white hover:scale-110"
              aria-label={`Call ${member.name}`}
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[var(--cass-grey)] transition-all duration-200 hover:bg-[var(--cass-green-primary)] hover:text-white hover:scale-110"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[var(--cass-green-primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--cass-green-primary)]">
            Our Team
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--cass-black)] sm:text-5xl lg:text-6xl text-balance">
            Meet Our Leaders
          </h2>
          <p className="mt-6 text-lg text-[var(--cass-grey)] text-pretty leading-relaxed">
            Meet the passionate professionals and students leading IEEE CASS
            Kerala Section towards excellence and innovation.
          </p>
        </div>

        {/* Professional Execom */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-[var(--cass-black)] mb-10">
            Professional Execom
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {professionalExecom.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Student Leadership */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-[var(--cass-black)] mb-10">
            Student Leadership Team
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
            {studentLeadership.map((member) => (
              <TeamCard key={member.name} member={member} isStudent />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
