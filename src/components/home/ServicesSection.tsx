import { Link } from "react-router-dom"
import { ArrowRight, Stethoscope, HeartPulse, Layers, HandHeart } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "cerrahi",
    titleKey: "hospital:servicesSection.categories.surgical.title",
    descriptionKey: "hospital:servicesSection.categories.surgical.description",
    href: "/tibbi-birimler/cerrahi",
    icon: Stethoscope,
  },
  {
    id: "dahili",
    titleKey: "hospital:servicesSection.categories.internal.title",
    descriptionKey: "hospital:servicesSection.categories.internal.description",
    href: "/tibbi-birimler/dahili",
    icon: HeartPulse,
  },
  {
    id: "diger",
    titleKey: "hospital:servicesSection.categories.other.title",
    descriptionKey: "hospital:servicesSection.categories.other.description",
    href: "/tibbi-birimler/diger",
    icon: Layers,
  },
  {
    id: "paramedikal",
    titleKey: "hospital:servicesSection.categories.paramedical.title",
    descriptionKey: "hospital:servicesSection.categories.paramedical.description",
    href: "/tibbi-birimler/paramedikal",
    icon: HandHeart,
  },
]

export function ServicesSection() {
  const { t } = useTranslation(["hospital"])

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("hospital:servicesSection.badge")}
          </span>

          <h2 className="heading-2 mt-2 mb-4">
            {t("hospital:servicesSection.title")}
          </h2>

          <p className="body-large">
            {t("hospital:servicesSection.description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon

            return (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative rounded-2xl border border-border bg-card p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>

                <h3 className="heading-3 mb-2 text-lg transition-colors group-hover:text-primary">
                  {t(cat.titleKey)}
                </h3>

                <p className="line-clamp-3 text-sm text-gray-700">
                  {t(cat.descriptionKey)}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  <span>{t("hospital:servicesSection.details")}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/tibbi-birimler">
              {t("hospital:servicesSection.allUnits")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
