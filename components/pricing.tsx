"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  Star,
  Zap,
  Crown,
  FileText,
  FolderGit2,
  Package,
} from "lucide-react"

type Tab = "portfolios" | "resume" | "projects" | "bundles"

const tabs: { key: Tab; label: string }[] = [
  { key: "portfolios", label: "Portfolios" },
  { key: "resume", label: "Resume" },
  { key: "projects", label: "Projects" },
  { key: "bundles", label: "Bundles" },
]

const portfolioPlans = [
  {
    name: "Starter",
    price: "199",
    hook: "Just ₹6/day",
    icon: Zap,
    description: "Clean online presence for students and beginners.",
    features: [
      "Basic portfolio template",
      "Your data customization",
      "Live deployment link",
      "Free subdomain (username.vercel.app)",
      "Responsive design",
      "1 revision round",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro Student",
    price: "499",
    hook: "Cheaper than a pizza",
    icon: Star,
    description: "Premium design to impress recruiters and clients.",
    features: [
      "Premium portfolio template",
      "ATS-friendly resume page",
      "Custom sections (Projects, Skills, Contact)",
      "Hosting + deployment included",
      "Domain setup help",
      "3 revision rounds",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium Brand",
    price: "999",
    hook: "One-time investment",
    icon: Crown,
    description: "Complete personal brand for serious job seekers.",
    features: [
      "Fully custom design",
      "Blog section included",
      "Backend contact form",
      "Complete SEO setup",
      "Custom domain connection",
      "GitHub + LinkedIn integration",
      "Unlimited revisions",
      "Dedicated support",
    ],
    highlighted: false,
    badge: "Best Value",
  },
]

const resumePlans = [
  {
    name: "Resume Update",
    price: "99",
    hook: "Per update",
    icon: FileText,
    description: "One-time professional resume update and optimization.",
    features: [
      "ATS-friendly formatting",
      "Professional language rewrite",
      "Keyword optimization",
      "Role-based tailoring",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Unlimited Updates",
    price: "299",
    hook: "6 months validity",
    icon: Star,
    description: "Unlimited resume updates for 6 months.",
    features: [
      "Everything in Resume Update",
      "Unlimited revisions for 6 months",
      "Multiple role variants",
      "Cover letter template",
      "Priority turnaround",
    ],
    highlighted: true,
    badge: "Best Deal",
  },
]

const projectPlans = [
  {
    name: "Basic Starter",
    price: "199-299",
    hook: "Get started fast",
    icon: FolderGit2,
    description: "1 real-world project with starter code and docs.",
    features: [
      "1 project idea + starter code",
      "GitHub repository setup",
      "README template",
      "Basic documentation",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro Student",
    price: "499-999",
    hook: "Placement ready",
    icon: Star,
    description: "2-3 real projects with deployment guides.",
    features: [
      "2-3 real-world projects",
      "Full code templates",
      "Deployment guide",
      "Resume-ready descriptions",
      "GitHub portfolio setup",
    ],
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Premium Placement",
    price: "1,499-3,999",
    hook: "Interview ready",
    icon: Crown,
    description: "Full-stack project, live deployed, interview prep included.",
    features: [
      "Full-stack project (Frontend + Backend + DB)",
      "Live deployed application",
      "Resume bullet points written",
      "Interview explanation notes",
      "Code walkthrough session",
      "Project presentation deck",
    ],
    highlighted: false,
    badge: "Elite",
  },
]

const bundlePlans = [
  {
    name: "Placement Starter",
    price: "299",
    hook: "Save 40%",
    icon: Package,
    description: "Everything a student needs to start.",
    features: [
      "Basic portfolio website",
      "1 resume update",
      "1 project template",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Placement Booster",
    price: "799",
    hook: "Most popular bundle",
    icon: Star,
    description: "Complete placement preparation package.",
    features: [
      "Premium portfolio website",
      "ATS-optimized resume",
      "2 placement-ready projects",
      "LinkedIn profile optimization",
    ],
    highlighted: true,
    badge: "Best Seller",
  },
  {
    name: "Elite Job Seeker",
    price: "1,999",
    hook: "Everything included",
    icon: Crown,
    description: "The ultimate career launch package.",
    features: [
      "Custom portfolio with blog + backend",
      "ATS resume + cover letter",
      "3 full-stack projects (deployed)",
      "LinkedIn profile optimization",
      "Interview preparation notes",
      "Dedicated support for 3 months",
    ],
    highlighted: false,
    badge: "Ultimate",
  },
]

function getPlansByTab(tab: Tab) {
  switch (tab) {
    case "portfolios":
      return portfolioPlans
    case "resume":
      return resumePlans
    case "projects":
      return projectPlans
    case "bundles":
      return bundlePlans
  }
}

export function Pricing() {
  const [tab, setTab] = useState<Tab>("portfolios")
  const plans = getPlansByTab(tab)

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
            Pricing
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Transparent &{" "}
            <span className="text-gradient">Affordable Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            No hidden fees. Choose the service that fits your needs and budget.
            All prices in INR.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-14 flex w-fit flex-wrap justify-center gap-1 rounded-xl border border-border bg-card p-1"
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === t.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Plan cards */}
        <div
          className={`grid gap-8 ${
            plans.length === 2
              ? "mx-auto max-w-3xl lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {plans.map((plan, i) => {
            const IconComp = plan.icon
            return (
              <motion.div
                key={`${tab}-${plan.name}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:shadow-[0_0_40px_-12px] hover:shadow-primary/15 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-[0_0_30px_-8px] shadow-primary/10"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground"
                        : "border border-primary/50 bg-primary/10 text-primary"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconComp size={24} />
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">
                      {"₹"}
                    </span>
                    <span className="text-5xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-primary">
                    {plan.hook}
                  </p>
                </div>

                <div className="my-8 h-px bg-border" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Free demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary">
            Try Before You Buy
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground">
            Start with a Free Demo Portfolio
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Get a free demo template with our watermark. Love it? Upgrade to
            remove the watermark and unlock full customization. No risk, no
            commitment.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Claim Your Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
