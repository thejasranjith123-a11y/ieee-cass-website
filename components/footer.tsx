import Image from "next/image"
import { Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Events", href: "#events" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "IEEE CASS Global", href: "https://ieee-cas.org", external: true },
      { label: "IEEE Kerala Section", href: "https://ieeekerala.org", external: true },
      { label: "IEEE Membership", href: "https://www.ieee.org/membership/join/index.html", external: true },
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org", external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--cass-green-primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/images/cass-logo.png"
                alt="IEEE CASS Logo"
                width={56}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
              <div>
                <p className="text-xl font-bold">IEEE CASS</p>
                <p className="text-sm text-white/70">Kerala Chapter</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-white/70 leading-relaxed">
              The IEEE Circuits and Systems Society (CASS) Kerala Chapter is
              dedicated to advancing circuits and systems technology through
              education, research, and professional development in Kerala.
            </p>
            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-[var(--cass-green-primary)] hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-[var(--cass-green-primary)] hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:cass.kerala@ieee.org"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-[var(--cass-green-primary)] hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} IEEE CASS Kerala Chapter. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Part of</span>
              <a
                href="https://ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:underline transition-colors"
              >
                IEEE
              </a>
              <span>&</span>
              <a
                href="https://ieeekerala.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:underline transition-colors"
              >
                IEEE Kerala Section
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
