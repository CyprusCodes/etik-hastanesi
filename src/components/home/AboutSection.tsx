import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { hospitalInfo } from "@/data/hospital"

const highlightKeys = [
  "hospital:aboutSection.highlights.0",
  "hospital:aboutSection.highlights.1",
  "hospital:aboutSection.highlights.2",
  "hospital:aboutSection.highlights.3",
  "hospital:aboutSection.highlights.4",
  "hospital:aboutSection.highlights.5",
]

export function AboutSection() {
  const { t } = useTranslation(["common", "hospital"])

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-secondary">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-secondary">
                  <img
                    src={`${import.meta.env.BASE_URL}/images/about/hospital.jpg`}
                    alt={t("hospital:name")}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 rounded-2xl border border-border bg-white p-4 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {new Date().getFullYear() - hospitalInfo.foundedYear}+
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("hospital:aboutSection.experienceLabel")}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:aboutSection.badge")}
              </span>

              <h2 className="heading-2 mt-2 mb-4">
                {t("hospital:aboutSection.title")}
              </h2>

              <p className="body-large">
                {t("hospital:aboutSection.description", {
                  foundedYear: hospitalInfo.foundedYear,
                  hospitalName: t("hospital:name"),
                })}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlightKeys.map((itemKey) => (
                <div
                  key={itemKey}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span>{t(itemKey)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" asChild>
                <Link to="/hakkimizda">
                  {t("hospital:aboutSection.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
