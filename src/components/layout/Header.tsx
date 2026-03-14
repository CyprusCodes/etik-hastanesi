import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { contactInfo, navLinks } from "@/data/hospital"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-narrow flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {contactInfo.workingHours.emergency}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">
              Acil Yardım: {contactInfo.emergency}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        )}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
             <img
  src="/images/logo.jpg"
  alt="Etik Hastanesi"
  className="h-14 w-auto lg:h-16 object-contain"
/>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Ara
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link to="/iletisim">Randevu Al</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <nav className="container-narrow py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full" asChild>
                <Link to="/iletisim">Randevu Al</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {contactInfo.phone}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
