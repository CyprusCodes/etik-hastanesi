import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { hospitalInfo, contactInfo, navLinks } from "@/data/hospital"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-narrow py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
    <Link to="/" className="inline-flex flex-col items-start mb-5">
  <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
    <img
      src="/images/logo.jpg"
      alt="Etik Hastanesi"
      className="h-14 lg:h-16 w-auto object-contain"
    />
  </div>
</Link>
            <p className="text-gray-400 text-sm mb-6">
              {hospitalInfo.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/etikhastanesi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/etikhastanesi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
       <div>
  <h4 className="font-semibold text-lg mb-4">Tıbbi Birimlerimiz</h4>
  <ul className="space-y-2">
    <li>
      <Link
        to="/tibbi-birimler/cerrahi"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Cerrahi Birimler
      </Link>
    </li>
    <li>
      <Link
        to="/tibbi-birimler/dahili"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Dahili Birimler
      </Link>
    </li>
    <li>
      <Link
        to="/tibbi-birimler/diger"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Diğer Birimler
      </Link>
    </li>
    <li>
      <Link
        to="/tibbi-birimler/paramedikal"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        Paramedikal
      </Link>
    </li>
  </ul>
</div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              {contactInfo.email && (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Hafta içi: {contactInfo.workingHours.weekdays}</p>
                  <p>Hafta sonu: {contactInfo.workingHours.weekend}</p>
                  <p className="text-primary font-medium">
                    {contactInfo.workingHours.emergency}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-emergency py-3">
        <div className="container-narrow flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="font-semibold">Acil Durumlarda:</span>
          <a
            href={`tel:${contactInfo.emergency}`}
            className="font-bold text-xl hover:opacity-80 transition-opacity"
          >
            {contactInfo.emergency}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-narrow text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} {hospitalInfo.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
