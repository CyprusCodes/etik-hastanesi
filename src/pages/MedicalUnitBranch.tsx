import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { medicalUnitCategories, contactInfo } from "@/data/hospital"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

const categoryTranslationMap: Record<string, string> = {
  cerrahi: "hospital:medicalUnitCategories.surgical.title",
  dahili: "hospital:medicalUnitCategories.internal.title",
  diger: "hospital:medicalUnitCategories.other.title",
  paramedikal: "hospital:medicalUnitCategories.paramedical.title",
}

export default function MedicalUnitBranch() {
  const { category, branch } = useParams()
  const { t } = useTranslation(["hospital", "common"])

  const currentCategory = medicalUnitCategories.find((c) => c.id === category)
  const currentBranch = currentCategory?.items.find((b) => b.id === branch)

  if (!currentCategory || !currentBranch) {
    return (
      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h1 className="heading-2">
              {t("hospital:medicalUnitBranchPage.notFound.title")}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {t("hospital:medicalUnitBranchPage.notFound.description")}
            </p>

            <div className="mt-6">
              <Button asChild>
                <Link to="/tibbi-birimler">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("hospital:medicalUnitBranchPage.notFound.button")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  const image = currentBranch.image
  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`

  const translatedCategoryTitle = categoryTranslationMap[currentCategory.id]
    ? t(categoryTranslationMap[currentCategory.id])
    : t(currentCategory.titleKey)

  const branchTitle = t(currentBranch.titleKey)
  const shortDescription = t(currentBranch.descriptionKey)

  const paragraphs =
    currentBranch.longDescriptionKeys?.length
      ? currentBranch.longDescriptionKeys
      : [currentBranch.descriptionKey]

  const bulletKeys = currentBranch.bulletsKeys ?? []

  return (
    <>
      <Helmet>
        <title>
          {t("hospital:medicalUnitBranchPage.seo.title", {
            branch: branchTitle,
          })}
        </title>
        <meta
          name="description"
          content={t("hospital:medicalUnitBranchPage.seo.description", {
            branch: branchTitle,
          })}
        />
      </Helmet>

      <Layout>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-14 lg:py-20">
          {image ? (
            <>
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-background/80" />
            </>
          ) : null}

          <div className="container-narrow relative">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="max-w-2xl">
                <Link
                  to={`/tibbi-birimler/${currentCategory.id}`}
                  className="inline-flex items-center font-medium text-primary hover:opacity-80"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {translatedCategoryTitle} •{" "}
                  {t("hospital:medicalUnitBranchPage.hero.branches")}
                </Link>

                <h1 className="heading-1 mt-4">{branchTitle}</h1>

                <p className="body-large mt-4">{shortDescription}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link to="/iletisim">
                      <Calendar className="mr-2 h-5 w-5" />
                      {t("common:bookAppointment")}
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild>
                    <a href={phoneHref}>
                      <Phone className="mr-2 h-5 w-5" />
                      {t("hospital:medicalUnitBranchPage.hero.callNow")}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <div className="aspect-[4/3] bg-secondary">
                    {image ? (
                      <img
                        src={image}
                        alt={branchTitle}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  <div className="p-4">
                    <div className="text-sm text-muted-foreground">
                      {t("hospital:medicalUnitBranchPage.hero.branchLabel")}
                    </div>
                    <div className="font-semibold">{branchTitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="max-w-3xl lg:col-span-2">
                <h2 className="heading-2 mb-6">
                  {t("hospital:medicalUnitBranchPage.aboutTitle")}
                </h2>

                <div className="space-y-6">
                  {paragraphs.map((paragraphKey, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-muted-foreground text-justify"
                    >
                      {t(paragraphKey)}
                    </p>
                  ))}
                </div>

                {bulletKeys.length ? (
                  <div className="mt-10 rounded-2xl bg-secondary/40 p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      {t("hospital:medicalUnitBranchPage.highlightsTitle")}
                    </h3>

                    <div className="space-y-3">
                      {bulletKeys.map((bulletKey, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                          <p className="text-muted-foreground">
                            {t(bulletKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <aside className="lg:col-span-1">
                <div className="rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-28">
                  <div className="text-sm text-muted-foreground">
                    {t("hospital:medicalUnitBranchPage.sidebar.categoryLabel")}
                  </div>
                  <div className="text-lg font-semibold">
                    {translatedCategoryTitle}
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <div className="mb-3 text-sm text-muted-foreground">
                      {t("hospital:medicalUnitBranchPage.sidebar.quickActions")}
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/iletisim">
                          {t("hospital:medicalUnitBranchPage.sidebar.appointmentForm")}
                        </Link>
                      </Button>

                      <Button variant="outline" className="w-full" asChild>
                        <a href={phoneHref}>
                          {t("hospital:medicalUnitBranchPage.sidebar.callByPhone")}
                        </a>
                      </Button>

                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to={`/tibbi-birimler/${currentCategory.id}`}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          {t("hospital:medicalUnitBranchPage.sidebar.backToBranches")}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
