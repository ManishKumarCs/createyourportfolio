"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye, Code, Palette, Camera, Briefcase, Rocket, User } from "lucide-react"

const templates = [
  {
    title: "Developer Portfolio",
    category: "Full-Stack Dev",
    description:
      "Dark-themed portfolio with interactive terminal animation and live project demos.",
    image: "/templates/developer-portfolio.svg",
    icon: Code,
    tags: ["React", "Terminal UI", "Dark Theme"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Designer Showcase",
    category: "UI/UX Designer",
    description:
      "Minimalist gallery-style portfolio with smooth image transitions and case studies.",
    image: "/templates/designer-showcase.svg",
    icon: Palette,
    tags: ["Gallery", "Case Studies", "Minimal"],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Photographer Site",
    category: "Photography",
    description:
      "Full-bleed image gallery with lightbox, lazy loading, and client proofing.",
    image: "/templates/photographer-site.svg",
    icon: Camera,
    tags: ["Lightbox", "Lazy Load", "Full-Bleed"],
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Freelancer Hub",
    category: "Freelancer",
    description:
      "All-in-one portfolio with testimonials, blog, service booking, and analytics.",
    image: "/templates/freelancer-hub.svg",
    icon: Briefcase,
    tags: ["Booking", "Blog", "Analytics"],
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Agency Landing",
    category: "Creative Agency",
    description:
      "Bold animated agency site with scroll-triggered reveals and client showcase.",
    image: "/templates/agency-landing.svg",
    icon: Rocket,
    tags: ["Animations", "Bold", "Scroll FX"],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Startup Founder",
    category: "Entrepreneur",
    description:
      "Personal brand page with about, ventures, media mentions, and newsletter.",
    image: "/templates/startup-founder.svg",
    icon: User,
    tags: ["Personal Brand", "Newsletter", "Ventures"],
    accent: "from-teal-500 to-emerald-500",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function PortfolioShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary"
          >
            Portfolio Templates
          </motion.p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Stunning Templates We{" "}
            <span className="text-gradient">Have Built</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Each template is hand-crafted with unique animations, pixel-perfect
            design, and fully optimized for search engines. Pick one and
            we will customize it for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {templates.map((template, index) => {
            const IconComponent = template.icon
            return (
              <motion.div
                key={template.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20"
              >
                {/* Image preview */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={`${template.title} - ${template.description}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Hover overlay with CTA */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm"
                      >
                        <motion.a
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          href="#contact"
                          className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90"
                        >
                          <Eye size={16} />
                          Request This Template
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Category badge on image */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 backdrop-blur-md">
                      <IconComponent size={12} className="text-primary" />
                      <span className="text-xs font-medium text-foreground">
                        {template.category}
                      </span>
                    </div>
                  </div>

                  {/* Accent gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${template.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                      {template.title}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            {"Don't see what you need? We build fully custom portfolios too."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Discuss Your Custom Design
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
