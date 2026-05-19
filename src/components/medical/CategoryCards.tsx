import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { medicalUnitCategories } from "@/data/hospital"

const categoryTranslationMap: Record<
  string,
  {
    titleKey: string
    descriptionKey: string
  }
> = {
  cerrahi: {
    titleKey: "hospital:medicalUnitCategories.surgical.title",
    descriptionKey: "hospital:medicalUnitCategories.surgical.description",
  },
  dahili: {
    titleKey: "hospital:medicalUnitCategories.internal.title",
    descriptionKey: "hospital:medicalUnitCategories.internal.description",
  },
  diger: {
    titleKey: "hospital:medicalUnitCategories.other.title",
    descriptionKey: "hospital:medicalUnitCategories.other.description",
  },
  paramedikal: {
    titleKey: "hospital:medicalUnitCategories.paramedical.title",
    descriptionKey: "hospital:medicalUnitCategories.paramedical.description",
  },
}

export function CategoryCards() {
  const { t } = useTranslation(["hospital"])

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {medicalUnitCategories.map((cat, index) => {
        const Icon = cat.icon
        const translation = categoryTranslationMap[cat.id]

        return (
          <Link
            key={cat.id}
            to={`/tibbi-birimler/${cat.id}`}
            className="group relative rounded-2xl border border-border bg-card p-6 card-hover"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
              <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
            </div>

            <h3 className="heading-3 mb-2 text-lg transition-colors group-hover:text-primary">
              {translation ? t(translation.titleKey) : cat.titleKey}
            </h3>

            <p className="line-clamp-3 text-sm text-gray-700">
              {translation ? t(translation.descriptionKey) : cat.descriptionKey}
            </p>

            <div className="mt-4 flex items-center text-sm font-medium text-primary">
              <span>{t("hospital:medicalUnitsPage.details")}</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
