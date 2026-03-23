import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { contactInfo, navLinks } from "@/data/hospital"
import { useTranslation } from "react-i18next"

export function Header() {
  const { t, i18n } = useTranslation(["common", "hospital"])
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

  const isTR = i18n.language.startsWith("tr")
  const isEN = i18n.language.startsWith("en")

  return (
    <>
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-narrow flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span>{contactInfo.phone}</span>
            </a>

            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{t("hospital:workingHours.emergency")}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold">
              {t("common:emergencyHelp")}: {contactInfo.emergency}
            </span>
          </div>
        </div>
      </div>

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
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/images/logo.jpg"
                alt={t("hospital:name")}
                className="h-14 w-auto lg:h-16 object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary hover:text-primary"
                  )}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-xl border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t("common:call")}
                </a>
              </Button>

              <Button
                size="sm"
                asChild
                className="rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Link to="/iletisim">{t("common:bookAppointment")}</Link>
              </Button>

              <div className="flex items-center rounded-full border border-primary/20 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage("tr")}
                  className={cn(
                    "min-w-[44px] rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200",
                    isTR
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  TR
                </button>

                <button
                  type="button"
                  onClick={() => i18n.changeLanguage("en")}
                  className={cn(
                    "min-w-[44px] rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200",
                    isEN
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t("common:toggleMenu")}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t",
            isMobileMenuOpen ? "max-h-[36rem]" : "max-h-0"
          )}
        >
          <nav className="container-narrow py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            <div className="pt-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={isTR ? "default" : "outline"}
                  className="rounded-xl"
                  onClick={() => i18n.changeLanguage("tr")}
                >
                  TR
                </Button>

                <Button
                  type="button"
                  variant={isEN ? "default" : "outline"}
                  className="rounded-xl"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  EN
                </Button>
              </div>

              <Button className="w-full rounded-xl" asChild>
                <Link to="/iletisim">{t("common:bookAppointment")}</Link>
              </Button>

              <Button variant="outline" className="w-full rounded-xl" asChild>
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
