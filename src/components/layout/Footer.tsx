import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { useTranslation } from "react-i18next"
import {contactInfo, navLinks } from "@/data/hospital"

export function Footer() {
  const { t } = useTranslation(["common", "hospital"])
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="container-narrow py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 inline-flex flex-col items-start">
              <div className="rounded-xl bg-white px-2 py-1 shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo2.png`}
                  alt={t("hospital:name")}
                  className="h-20 w-auto object-contain lg:h-24"
                />
              </div>
            </Link>

            <p className="mb-6 text-sm text-gray-400">
              {t("hospital:description")}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/etikhastanesi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/etikhastanesi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t("hospital:footer.quickLinks")}
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t("hospital:footer.medicalUnits")}
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/tibbi-birimler/cerrahi"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.units.surgical")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tibbi-birimler/dahili"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.units.internal")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tibbi-birimler/diger"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.units.other")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tibbi-birimler/paramedikal"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.units.paramedical")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t("hospital:footer.legal")}
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/hizmet-sozlesmesi"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.legalLinks.serviceAgreement")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cerez-politikasi"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.legalLinks.cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gizlilik-politikasi"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("hospital:footer.legalLinks.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              {t("hospital:footer.contact")}
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>

              {contactInfo.email && (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
              )}

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactInfo.address}</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p>
                    {t("hospital:footer.weekdays")}: {contactInfo.workingHours.weekdays}
                  </p>
                  <p>
                    {t("hospital:footer.weekend")}: {contactInfo.workingHours.weekend}
                  </p>
                  <p className="font-medium text-primary">
                    {t("hospital:workingHours.emergency")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-emergency py-3">
        <div className="container-narrow flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <span className="font-semibold">
            {t("hospital:footer.emergencyBanner")}
          </span>
          <a
            href={`tel:${contactInfo.emergency}`}
            className="text-xl font-bold transition-opacity hover:opacity-80"
          >
            {contactInfo.emergency}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-narrow text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} {t("hospital:name")}.{" "}
            {t("hospital:footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
