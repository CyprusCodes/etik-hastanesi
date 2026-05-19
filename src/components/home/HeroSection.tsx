import { Link } from "react-router-dom"
import { Phone, Calendar, Shield, Clock, Award } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import {contactInfo, stats } from "@/data/hospital"

export function HeroSection() {
  const { t } = useTranslation(["common", "hospital"])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="grid min-h-[calc(100vh-10rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>{t("hospital:hero.badge")}</span>
            </div>

            <div className="space-y-4">
              <h1 className="heading-1 text-foreground">
                {t("hospital:hero.titleStart")}{" "}
                <span className="gradient-text">
                  {t("hospital:hero.titleHighlight")}
                </span>{" "}
                {t("hospital:hero.titleEnd")}
              </h1>

              <p className="body-large max-w-lg">
                {t("hospital:description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/iletisim">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t("common:bookAppointment")}
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t("common:call")}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>{t("hospital:hero.emergency")}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>{t("hospital:hero.expertTeam")}</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="rounded-3xl bg-white p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                 {stats.map((stat, index) => (
  <div
    key={stat.labelKey}
    className={`rounded-2xl p-4 text-center ${
      index % 2 === 0 ? "bg-primary/10" : "bg-accent/5"
    }`}
  >
    <div className="mb-1 text-3xl font-bold text-foreground lg:text-4xl">
      {stat.value}
    </div>
    <div className="text-sm text-muted-foreground">
      {t(stat.labelKey)}
    </div>
  </div>
))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-accent p-4 text-center text-white">
                  <h2 className="text-xl font-bold">{t("hospital:name")}</h2>
                  <p className="text-sm opacity-90">{t("hospital:tagline")}</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 flex h-20 w-20 animate-float items-center justify-center rounded-2xl bg-emergency shadow-lg">
              <div className="text-center text-white">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs">{t("hospital:hero.urgentShort")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
