"use client"

import { motion } from "framer-motion"
import {
  FileSearch,
  MessageCircle,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const freeServices = [
  {
    icon: FileSearch,
    title: "Resume Review & Feedback",
    description:
      "Upload your resume and get a detailed review with ATS score, grammar tips, formatting suggestions, and improvement areas -- completely free.",
    features: [
      "ATS compatibility score",
      "Grammar & formatting review",
      "Missing section detection",
      "Keyword suggestions for your role",
    ],
  },
  {
    icon: MessageCircle,
    title: "Resume Improvement Tips",
    description:
      "We identify weak project descriptions, skills gaps, and missing keywords that could be costing you interviews.",
    features: [
      "Weak description identification",
      "Skills gap analysis",
      "Placement keyword optimization",
      "Role-specific advice",
    ],
  },
  {
    icon: Users,
    title: "Community & Career Guidance",
    description:
      "Join our student community for coding roadmaps, portfolio feedback, career guidance, and placement prep support.",
    features: [
      "Telegram/Discord community",
      "Coding roadmap guidance",
      "Portfolio feedback sessions",
      "Career path suggestions",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FreeServices() {
  return (
    <section id="free-services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">
              100% FREE -- No Strings Attached
            </span>
          </div>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Free Services for <span className="text-gradient">All Students</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            We believe every student deserves career support. Get a free resume
            review, improvement suggestions, and join our community -- no payment
            required.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {freeServices.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl border border-dashed border-primary/30 bg-primary/[0.03] p-8 transition-all hover:border-primary/50 hover:bg-primary/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-primary">
                FREE
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get Your Free Resume Review
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            No payment needed. Upload your resume and we will send feedback
            within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
