"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/images/cass-logo.png"
              alt="IEEE CASS Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-base font-semibold text-foreground leading-tight">
                IEEE CASS
              </p>
              <p className="text-sm text-muted-foreground">Kerala Chapter</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-[var(--cass-grey)] transition-all duration-200 hover:text-[var(--cass-green-primary)] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[var(--cass-green-primary)] after:transition-all after:duration-200 hover:after:left-4 hover:after:w-[calc(100%-2rem)]"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="ml-4 bg-[var(--cass-green-primary)] hover:bg-[var(--cass-green-primary)]/90 text-white transition-all duration-200 hover:shadow-lg"
              onClick={() => handleNavClick("#contact")}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border bg-background pb-4 md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--cass-grey)] transition-colors hover:bg-[var(--cass-green-primary)]/10 hover:text-[var(--cass-green-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-[var(--cass-green-primary)] hover:bg-[var(--cass-green-primary)]/90 text-white"
                  onClick={() => handleNavClick("#contact")}
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
