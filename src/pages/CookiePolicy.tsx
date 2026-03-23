import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

export default function CookiePolicy() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:cookiePolicyPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:cookiePolicyPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="bg-gradient-to-r from-primary to-accent py-14 text-white lg:py-16">
          <div className="container-narrow text-center">
            <h1 className="heading-2 text-white">
              {t("hospital:cookiePolicyPage.hero.title")}
            </h1>
            <p className="mt-3 text-sm text-white/90">
              {t("hospital:cookiePolicyPage.hero.description")}
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="border-b border-border bg-primary/5 px-6 py-8 md:px-10">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("hospital:cookiePolicyPage.content.title")}
                </h2>
              </div>

              <div className="space-y-8 px-6 py-8 leading-8 text-muted-foreground md:px-10">
                <p>{t("hospital:cookiePolicyPage.content.intro")}</p>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:cookiePolicyPage.sections.whatIsCookie.title")}
                  </h3>
                  <p>
                    {t("hospital:cookiePolicyPage.sections.whatIsCookie.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {t("hospital:cookiePolicyPage.sections.types.title")}
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                      <p className="mb-2 font-medium text-foreground">
                        {t("hospital:cookiePolicyPage.sections.types.items.session.title")}
                      </p>
                      <p>
                        {t("hospital:cookiePolicyPage.sections.types.items.session.description")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                      <p className="mb-2 font-medium text-foreground">
                        {t("hospital:cookiePolicyPage.sections.types.items.persistent.title")}
                      </p>
                      <p>
                        {t("hospital:cookiePolicyPage.sections.types.items.persistent.description")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                      <p className="mb-2 font-medium text-foreground">
                        {t("hospital:cookiePolicyPage.sections.types.items.analytics.title")}
                      </p>
                      <p>
                        {t("hospital:cookiePolicyPage.sections.types.items.analytics.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:cookiePolicyPage.sections.management.title")}
                  </h3>
                  <p>
                    {t("hospital:cookiePolicyPage.sections.management.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:cookiePolicyPage.sections.updates.title")}
                  </h3>
                  <p>
                    {t("hospital:cookiePolicyPage.sections.updates.description")}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-primary/5 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:cookiePolicyPage.sections.contact.title")}
                  </h3>
                  <p>
                    {t("hospital:cookiePolicyPage.sections.contact.description")}
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
