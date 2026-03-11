import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users, BookOpen, Award } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Fostering cutting-edge research and development in circuits and systems engineering.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a vibrant network of professionals, researchers, and students across Kerala.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Providing world-class learning opportunities through workshops, seminars, and conferences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Recognizing and promoting outstanding contributions to the field of circuits and systems.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[var(--cass-green-primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--cass-green-primary)]">
            About Us
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--cass-black)] sm:text-5xl lg:text-6xl text-balance">
            Advancing Circuits and Systems in Kerala
          </h2>
          <p className="mt-6 text-lg text-[var(--cass-grey)] text-pretty leading-relaxed">
            The IEEE Circuits and Systems Society (CASS) Kerala Section is
            dedicated to advancing the theory and application of circuits and
            systems. Our student leadership team works tirelessly to bridge the
            gap between academic learning and industry requirements.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <Card className="group overflow-hidden border-none bg-gradient-to-br from-[var(--cass-green-primary)] to-[#006847] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <CardContent className="p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To be the leading professional society for advancing circuits
                and systems technology in Kerala, inspiring innovation and
                fostering collaboration among academia, industry, and research
                institutions to address global challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border-none bg-gradient-to-br from-[var(--cass-green-secondary)] to-[var(--cass-green-primary)] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <CardContent className="p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To promote the theory, design, and applications of circuits and
                systems through technical activities, publications, conferences,
                and educational programs that benefit the Kerala engineering
                community and beyond.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border border-border bg-card shadow-sm transition-all duration-300 hover:border-[var(--cass-green-primary)]/30 hover:shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--cass-green-primary)]/10 transition-all duration-300 group-hover:bg-[var(--cass-green-primary)] group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-[var(--cass-green-primary)] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[var(--cass-black)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--cass-grey)] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
