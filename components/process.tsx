"use client"

import { motion } from "framer-motion"
import { FileSearch, Lightbulb, CreditCard, Rocket } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Free Resume Check",
    description:
      "Upload your resume and get a free review. We analyze ATS compatibility, formatting, and suggest improvements.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Discover Your Gaps",
    description:
      "We identify what is missing -- weak projects, poor descriptions, no portfolio -- and recommend exactly what you need.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Choose Your Plan",
    description:
      "Pick from portfolio builds, resume updates, project packages, or all-in-one bundles at student-friendly prices.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Get Placed",
    description:
      "We deliver everything within 24-48 hours. You walk into interviews with a killer portfolio and placement-ready projects.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
            How It Works
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            From Free Review to{" "}
            <span className="text-gradient">Dream Job</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Our consultative approach helps you discover what you need, then
            delivers it at prices any student can afford.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <span className="text-gradient text-5xl font-bold opacity-20">
                {step.number}
              </span>
              <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
