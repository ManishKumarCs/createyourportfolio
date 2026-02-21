"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error" | "limit"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [sendCount, setSendCount] = useState(0)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      plan: (form.elements.namedItem("plan") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      if (sendCount >= 2) {
        setStatus("limit")
        setErrorMsg("⚠️ Limit reached. Please wait before sending more messages.")
        return
      }

      console.log('Sending email with data:', formData)

      // Use Nodemailer API route instead of EmailJS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send email')
      }

      const result = await response.json()
      console.log('Email sent via Nodemailer:', result)

      setStatus("success")
      setSendCount(sendCount + 1)
      form.reset()
      console.log('Email sent successfully!')
    } catch (err) {
      console.error('Email sending error:', err)
      setStatus("error")
      setErrorMsg("❌ Failed to send message. Try again later.")
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
              Ready to Build Your{" "}
              <span className="text-gradient">Dream Portfolio?</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Fill out the form and we will get back to you within 24 hours.
              Tell us about your vision and we will make it happen.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Send size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">manishprajapati.cs1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Response Time</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center">
                <CheckCircle2 size={48} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  ✅ Message sent successfully!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. We will get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Send Another
                </button>
              </div>
            ) : status === "limit" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/5 p-12 text-center">
                <AlertCircle size={48} className="mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold text-foreground">
                  ⚠️ Limit Reached
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {errorMsg || "You've reached the message limit. Please wait before sending more."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg bg-orange-500 px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Got it
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="developer@example.com"
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="plan"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Interested Service
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      required
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <optgroup label="Free Services">
                        <option value="free-resume-review">Free Resume Review</option>
                        <option value="free-demo">Free Demo Portfolio (Watermarked)</option>
                      </optgroup>
                      <optgroup label="Portfolio Plans">
                        <option value="portfolio-starter">Portfolio Starter - ₹199</option>
                        <option value="portfolio-pro">Portfolio Pro Student - ₹499</option>
                        <option value="portfolio-premium">Portfolio Premium - ₹999</option>
                      </optgroup>
                      <optgroup label="Resume Services">
                        <option value="resume-update">Resume Update - ₹99</option>
                        <option value="resume-unlimited">Unlimited Updates (6mo) - ₹299</option>
                      </optgroup>
                      <optgroup label="Student Projects">
                        <option value="project-basic">Basic Project - ₹199-299</option>
                        <option value="project-pro">Pro Projects - ₹499-999</option>
                        <option value="project-premium">Premium Placement - ₹1,499-3,999</option>
                      </optgroup>
                      <optgroup label="Bundle Packages">
                        <option value="bundle-starter">Placement Starter - ₹299</option>
                        <option value="bundle-booster">Placement Booster - ₹799</option>
                        <option value="bundle-elite">Elite Job Seeker - ₹1,999</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
