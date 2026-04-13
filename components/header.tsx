"use client"

import { useState, usePathname } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowLeft } from "lucide-react"

const homeLinks = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#programs", label: "Ngành học" },
  { href: "#scholarships", label: "Học bổng" },
  { href: "#schools", label: "Trường" },
  { href: "#process", label: "Quy trình" },
  { href: "/faq", label: "FAQ" },
  { href: "#contact", label: "Liên hệ" },
]

const faqLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/#about", label: "Giới thiệu" },
  { href: "/#programs", label: "Ngành học" },
  { href: "/#scholarships", label: "Học bổng" },
  { href: "/#schools", label: "Trường" },
  { href: "/#process", label: "Quy trình" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Liên hệ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"
  const isFaqPage = pathname === "/faq"
  const navLinks = isFaqPage ? faqLinks : homeLinks

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IfUkm2PL51PbgsdokjnuYni67tDBfR.png"
              alt="IFN GROUP"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("/") ? "_self" : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

<button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Mở menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("/") ? "_self" : undefined}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  )
}
