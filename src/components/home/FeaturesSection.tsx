import { useTranslation } from "react-i18next"
import { features } from "@/data/hospital"

export function FeaturesSection() {
  const { t } = useTranslation(["hospital"])

  return (
    <section className="section-padding bg-secondary from-white to-secondary/30">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("hospital:featuresSection.badge")}
          </span>

          <h2 className="heading-2 mt-2 mb-4">
            {t("hospital:featuresSection.title")}
          </h2>

          <p className="body-large">
            {t("hospital:featuresSection.description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.titleKey}
                className="group rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-300 group-hover:from-primary group-hover:to-accent">
                  <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-sm text-gray-700">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
