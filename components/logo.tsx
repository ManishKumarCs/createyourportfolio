"use client"

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-8 w-auto",
    default: "h-10 w-auto", 
    large: "h-16 w-auto"
  }

  return (
    <img 
      src="/logo.png" 
      alt="Create Your Portfolio - Free Portfolio Builder for Students"
      className={`${sizeClasses[size]} ${className} object-contain`}
      loading="eager"
    />
  )
}