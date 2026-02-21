"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Palette,
  FileText,
  FolderGit2,
  Linkedin,
  Search,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Custom Portfolio Websites",
    description:
      "Unique, hand-coded portfolios built with Next.js. Blazing fast, SEO-optimized, and designed to impress any recruiter or client.",
  },
  {
    icon: FileText,
    title: "Resume Update & ATS Optimization",
    description:
      "Professional ATS-friendly formatting, keyword optimization, and role-based resume writing that gets past screening filters.",
  },
  {
    icon: FolderGit2,
    title: "Placement-Ready Projects",
    description:
      "Real-world projects with full code, GitHub repos, deployment, and resume-ready descriptions. Interview explanation notes included.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Complete web applications with frontend, backend, database, and deployment. From landing pages to SaaS dashboards.",
  },
  {
    icon: Search,
    title: "SEO & Online Presence",
    description:
      "End-to-end SEO setup, Google indexing, meta tags, structured data, and performance optimization for maximum visibility.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Profile Optimization",
    description:
      "Professional headline, summary, and experience section that attracts recruiters and boosts your profile visibility.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
            Our Paid Services
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Everything You Need to Get{" "}
            <span className="text-gradient">Placed</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            From portfolio websites to resume optimization and placement-ready
            projects -- we handle the hard stuff so you can focus on learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-secondary/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
