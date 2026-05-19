import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

export default function PrivacyPolicy() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:privacyPolicyPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:privacyPolicyPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="bg-gradient-to-r from-primary to-accent py-14 text-white lg:py-16">
          <div className="container-narrow text-center">
            <h1 className="heading-2 text-white">
              {t("hospital:privacyPolicyPage.hero.title")}
            </h1>
            <p className="mt-3 text-sm text-white/90">
              {t("hospital:privacyPolicyPage.hero.description")}
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="border-b border-border bg-primary/10 px-6 py-8 md:px-10">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("hospital:privacyPolicyPage.content.title")}
                </h2>
              </div>

              <div className="space-y-8 px-6 py-8 leading-8 text-gray-700 md:px-10">
                <p>{t("hospital:privacyPolicyPage.content.intro")}</p>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.collection.title")}
                  </h3>

                  <p>
                    {t("hospital:privacyPolicyPage.sections.collection.paragraph1")}
                  </p>

                  <p className="mt-4">
                    {t("hospital:privacyPolicyPage.sections.collection.paragraph2")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.cookies.title")}
                  </h3>
                  <p>
                    {t("hospital:privacyPolicyPage.sections.cookies.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.sharing.title")}
                  </h3>
                  <p>
                    {t("hospital:privacyPolicyPage.sections.sharing.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.security.title")}
                  </h3>
                  <p>
                    {t("hospital:privacyPolicyPage.sections.security.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.acceptance.title")}
                  </h3>
                  <p>
                    {t("hospital:privacyPolicyPage.sections.acceptance.description")}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-primary/10 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:privacyPolicyPage.sections.updates.title")}
                  </h3>
                  <p>
                    {t("hospital:privacyPolicyPage.sections.updates.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
