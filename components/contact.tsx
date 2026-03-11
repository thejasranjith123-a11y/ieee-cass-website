"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Linkedin, Instagram, ExternalLink } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[var(--cass-green-primary)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--cass-green-primary)]">
            Contact Us
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--cass-black)] sm:text-5xl lg:text-6xl text-balance">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-[var(--cass-grey)] text-pretty leading-relaxed">
            Have questions about IEEE CASS Kerala Chapter? We&apos;d love to
            hear from you. Send us a message and we&apos;ll respond as soon as
            possible.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border border-border shadow-lg">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-semibold text-[var(--cass-black)]"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-border focus:border-[var(--cass-green-primary)] focus:ring-[var(--cass-green-primary)] py-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-semibold text-[var(--cass-black)]"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-border focus:border-[var(--cass-green-primary)] focus:ring-[var(--cass-green-primary)] py-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-semibold text-[var(--cass-black)]"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    className="border-border focus:border-[var(--cass-green-primary)] focus:ring-[var(--cass-green-primary)] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--cass-green-primary)] hover:bg-[var(--cass-green-primary)]/90 text-white font-semibold py-6 transition-all duration-200 hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {/* Email Card */}
            <Card className="border border-border shadow-lg">
              <CardContent className="p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--cass-green-primary)]/10">
                    <Mail className="h-7 w-7 text-[var(--cass-green-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--cass-black)]">
                      Email Us
                    </h3>
                    <p className="mt-2 text-[var(--cass-grey)]">
                      For general inquiries and membership questions
                    </p>
                    <a
                      href="mailto:cass.kerala@ieee.org"
                      className="mt-3 inline-block text-[var(--cass-green-primary)] font-semibold hover:underline transition-colors"
                    >
                      cass.kerala@ieee.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="border border-border shadow-lg flex-1">
              <CardContent className="p-10">
                <h3 className="text-xl font-bold text-[var(--cass-black)] mb-4">
                  Connect With Us
                </h3>
                <p className="text-[var(--cass-grey)] mb-8">
                  Follow us on social media for the latest updates, event
                  announcements, and community news.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-[var(--cass-black)] transition-all duration-200 hover:border-[var(--cass-green-primary)] hover:text-[var(--cass-green-primary)] hover:shadow-md"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-[var(--cass-black)] transition-all duration-200 hover:border-[var(--cass-green-primary)] hover:text-[var(--cass-green-primary)] hover:shadow-md"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                  <a
                    href="https://ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-[var(--cass-black)] transition-all duration-200 hover:border-[var(--cass-green-primary)] hover:text-[var(--cass-green-primary)] hover:shadow-md"
                  >
                    <ExternalLink className="h-5 w-5" />
                    IEEE.org
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
