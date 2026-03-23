import { Layout } from "@/components/layout/Layout"
import { CategoryCards } from "@/components/medical/CategoryCards"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

export default function MedicalUnits() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:medicalUnitsPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:medicalUnitsPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:medicalUnitsPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-4 mb-6">
                {t("hospital:medicalUnitsPage.hero.title")}
              </h1>

              <p className="body-large">
                {t("hospital:medicalUnitsPage.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <CategoryCards />
          </div>
        </section>
      </Layout>
    </>
  )
}
