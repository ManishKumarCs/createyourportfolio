"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, FileCheck } from "lucide-react"

const stats = [
  { value: "50+", label: "Portfolios Built" },
  { value: "200+", label: "Students Helped" },
  { value: "100%", label: "Satisfaction" },
  { value: "24h", label: "Fast Delivery" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="animate-float pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="animate-float-delayed pointer-events-none absolute bottom-20 left-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-sm text-primary">
            Portfolios, Resumes & Projects for Students
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Land Your Dream Job with a{" "}
          <span className="text-gradient">Killer Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          We build custom portfolio websites, optimize resumes for ATS, and
          provide placement-ready projects so you stand out to every recruiter.
          Free resume review for all students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#free-services"
            className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <FileCheck size={18} />
            Free Resume Review
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Our Work
            <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 text-sm text-primary"
        >
          Free resume review for all students. Paid only if you want
          professional upgrades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gradient text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
