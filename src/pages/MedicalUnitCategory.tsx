import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { medicalUnitCategories } from "@/data/hospital"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

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

export default function MedicalUnitCategory() {
  const { category } = useParams()
  const { t } = useTranslation(["hospital"])

  const current = medicalUnitCategories.find((c) => c.id === category)

  if (!current) {
    return (
      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h1 className="heading-2 mb-4">
              {t("hospital:medicalUnitCategoryPage.notFound.title")}
            </h1>
            <Link
              to="/tibbi-birimler"
              className="font-medium text-primary underline"
            >
              {t("hospital:medicalUnitCategoryPage.notFound.backLink")}
            </Link>
          </div>
        </section>
      </Layout>
    )
  }

  const Icon = current.icon
  const translation = categoryTranslationMap[current.id]

  const currentTitle = translation
    ? t(translation.titleKey)
    : t(current.titleKey)

  const currentDescription = translation
    ? t(translation.descriptionKey)
    : t(current.descriptionKey)

  return (
    <>
      <Helmet>
        <title>
          {t("hospital:medicalUnitCategoryPage.seo.title", {
            category: currentTitle,
          })}
        </title>
        <meta
          name="description"
          content={t("hospital:medicalUnitCategoryPage.seo.description", {
            category: currentTitle,
          })}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>

              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:medicalUnitCategoryPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-3">{currentTitle}</h1>

              <p className="body-large mt-4">{currentDescription}</p>

              <div className="mt-6">
                <Link
                  to="/tibbi-birimler"
                  className="inline-flex items-center font-medium text-primary hover:opacity-80"
                >
                  {t("hospital:medicalUnitCategoryPage.hero.backToAll")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="heading-2">
                {t("hospital:medicalUnitCategoryPage.branchesTitle")}
              </h2>

              <div className="text-sm text-muted-foreground">
                {t("hospital:medicalUnitCategoryPage.branchCount", {
                  count: current.items.length,
                })}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {current.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/tibbi-birimler/${current.id}/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative h-44 w-full bg-secondary">
                    {item.image ? (
                      <>
                        <img
                          src={item.image}
                          alt={t(item.titleKey)}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      </>
                    ) : null}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                      {t(item.titleKey)}
                    </h3>

                    <p className="mt-2 line-clamp-4 text-sm text-muted-foreground">
                      {t(item.descriptionKey)}
                    </p>

                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      <span>{t("hospital:medicalUnitsPage.details")}</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
