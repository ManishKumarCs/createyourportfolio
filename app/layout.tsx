import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://createyourportfolio.manishdev.tech'),
  title: {
    default: 'Create Your Portfolio - Professional Portfolio Builder',
    template: '%s | Create Your Portfolio'
  },
  description: 'Create stunning professional portfolios in minutes with our AI-powered portfolio builder. Perfect for students, developers, and job seekers. Free templates, customizable designs, instant deployment. Build your dream portfolio today.',
  keywords: [
    'create your portfolio',
    'portfolio builder',
    'professional portfolio',
    'student portfolio',
    'developer portfolio',
    'portfolio maker',
    'resume builder',
    'job portfolio',
    'portfolio template',
    'portfolio website',
    'portfolio creator',
    'portfolio designer',
    'portfolio maker online',
    'portfolio builder tool',
    'portfolio generator free',
    'portfolio maker tool',
    'portfolio designer tool',
    'portfolio creator app',
    'portfolio generator app',
    'portfolio builder app',
    'portfolio designer app',
    'portfolio maker software',
    'portfolio builder software',
    'portfolio designer software',
    'portfolio creator software',
    'portfolio generator software',
    'portfolio maker online',
    'portfolio builder online',
    'portfolio designer online',
    'portfolio creator online',
    'portfolio generator online',
    'portfolio maker free',
    'portfolio builder free',
    'portfolio designer free',
    'portfolio creator free',
    'portfolio generator free',
    'portfolio maker app',
    'portfolio builder app',
    'portfolio designer app',
    'portfolio creator app',
    'portfolio generator app',
    'portfolio maker software',
    'portfolio builder software',
    'portfolio designer software',
    'portfolio creator software',
    'portfolio generator software',
    'portfolio maker online',
    'portfolio builder online',
    'portfolio designer online',
    'portfolio creator online',
    'portfolio generator online',
    'makeyourportfolio',
    'createyourportfolio',
    'portfolio creator free',
    'online portfolio maker',
    'best portfolio builder',
    'portfolio website builder',
    'professional portfolio creator',
    'portfolio generator for students',
    'portfolio generator for developers',
    'portfolio builder for job seekers',
    'free portfolio website',
    'portfolio maker online free',
    'portfolio creator online free',
    'portfolio builder tool free',
    'portfolio generator app free',
    'portfolio maker software free',
    'portfolio designer tool free',
    'portfolio creator app free',
    'portfolio generator software free',
    'portfolio maker online free',
    'portfolio builder online free',
    'portfolio designer online free',
    'portfolio creator online free',
    'portfolio generator online free',
    'portfolio maker app free',
    'portfolio builder app free',
    'portfolio designer app free',
    'portfolio creator app free',
    'portfolio generator app free',
    'portfolio maker software free',
    'portfolio builder software free',
    'portfolio designer software free',
    'portfolio creator software free',
    'portfolio generator software free',
    'portfolio maker online free',
    'portfolio builder online free',
    'portfolio designer online free',
    'portfolio creator online free',
    'portfolio generator online free'
  ],
  authors: [{ name: 'Create Your Portfolio Team' }],
  creator: 'Create Your Portfolio',
  publisher: 'Create Your Portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://createyourportfolio.manishdev.tech',
    title: 'Create Your Portfolio - Professional Portfolio Builder',
    description: 'Create stunning professional portfolios in minutes with our AI-powered portfolio builder. Perfect for students, developers, and job seekers.',
    siteName: 'Create Your Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Create Your Portfolio - Professional Portfolio Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Portfolio - Professional Portfolio Builder',
    description: 'Create stunning professional portfolios in minutes with our AI-powered portfolio builder.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://createyourportfolio.manishdev.tech',
  },
  other: {
    'theme-color': '#3b82f6',
    'msapplication-TileColor': '#3b82f6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Create Your Portfolio',
  },
  generator: 'Create Your Portfolio',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
