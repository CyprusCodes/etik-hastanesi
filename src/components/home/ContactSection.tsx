import { Link } from "react-router-dom"
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/hospital"
const mapsUrl = "https://maps.app.goo.gl/m8ZGpYZLFXpCXNVy8"

export function ContactSection() {
  const { t } = useTranslation(["hospital", "common"])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white section-padding">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {t("hospital:contactSection.badge")}
              </span>

              <h2 className="heading-2 mt-2 mb-4 text-white">
                {t("hospital:contactSection.title")}
              </h2>

              <p className="text-lg text-white/80">
                {t("hospital:contactSection.description")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Telefon */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">
                    {t("hospital:contactSection.phoneLabel")}
                  </div>
                  <div className="font-semibold">{contactInfo.phone}</div>
                </div>
              </a>

              {/* Adres */}
           <a
  href={mapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Etik Hastanesi konumunu Google Maps üzerinde aç"
  className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20"
>
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
    <MapPin className="h-6 w-6" />
  </div>
  <div>
    <div className="text-sm text-white/70">
      {t("hospital:contactSection.addressLabel")}
    </div>
    <div className="text-sm font-semibold">{contactInfo.address}</div>
  </div>
</a>

              {/* Çalışma Saatleri */}
              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">
                    {t("hospital:contactSection.workingHoursLabel")}
                  </div>
                  <div className="font-semibold">
                    {t("hospital:workingHours.emergency")}
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Sağ kart */}
          <div className="rounded-3xl bg-white p-8 text-foreground">
            <h3 className="heading-3 mb-4">
              {t("hospital:contactSection.cardTitle")}
            </h3>

            <p className="mb-6 text-gray-700">
              {t("hospital:contactSection.cardDescription")}
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <Link to="/iletisim">
                  {t("hospital:contactSection.onlineAppointment")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {contactInfo.phone}
                </a>
              </Button>
            </div>

            <div className="mt-6 rounded-xl border border-emergency/20 bg-emergency/10 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emergency">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">
                    {t("hospital:contactSection.emergencyLabel")}
                  </div>
                  <a
                    href={`tel:${contactInfo.emergency}`}
                    className="text-xl font-bold text-emergency"
                  >
                    {contactInfo.emergency}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
