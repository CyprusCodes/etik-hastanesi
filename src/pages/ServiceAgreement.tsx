import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

export default function ServiceAgreement() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:serviceAgreementPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:serviceAgreementPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="bg-gradient-to-r from-primary to-accent py-14 text-white lg:py-16">
          <div className="container-narrow text-center">
            <h1 className="heading-2 text-white">
              {t("hospital:serviceAgreementPage.hero.title")}
            </h1>
            <p className="mt-3 text-sm text-white/90">
              {t("hospital:serviceAgreementPage.hero.description")}
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="border-b border-border bg-primary/10 px-6 py-8 md:px-10">
                <h2 className="text-2xl font-bold text-foreground">
                  {t("hospital:serviceAgreementPage.content.title")}
                </h2>
              </div>

              <div className="space-y-8 px-6 py-8 leading-8 text-gray-700 md:px-10">
                <p>{t("hospital:serviceAgreementPage.content.intro")}</p>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.parties.title")}
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                      <p className="mb-2 font-medium text-foreground">
                        {t("hospital:serviceAgreementPage.sections.parties.provider.title")}
                      </p>
                      <p>
                        {t("hospital:serviceAgreementPage.sections.parties.provider.name")}
                      </p>
                      <p>
                        {t("hospital:serviceAgreementPage.sections.parties.provider.address")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                      <p className="mb-2 font-medium text-foreground">
                        {t("hospital:serviceAgreementPage.sections.parties.patient.title")}
                      </p>
                      <p>
                        {t("hospital:serviceAgreementPage.sections.parties.patient.name")}
                      </p>
                      <p>
                        {t("hospital:serviceAgreementPage.sections.parties.patient.address")}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.services.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.services.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.terms.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.terms.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.payment.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.payment.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.confidentiality.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.confidentiality.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.liability.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.liability.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.disputes.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.disputes.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.duration.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.duration.description")}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.sections.otherTerms.title")}
                  </h3>
                  <p>
                    {t("hospital:serviceAgreementPage.sections.otherTerms.description")}
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">
                    {t("hospital:serviceAgreementPage.signatures.title")}
                  </h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-border p-5">
                      <p className="font-medium text-foreground">
                        {t("hospital:serviceAgreementPage.signatures.hospital")}
                      </p>
                      <p className="mt-6">___________________</p>
                      <p className="mt-2">
                        {t("hospital:serviceAgreementPage.signatures.date")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <p className="font-medium text-foreground">
                        {t("hospital:serviceAgreementPage.signatures.patient")}
                      </p>
                      <p className="mt-6">___________________</p>
                      <p className="mt-2">
                        {t("hospital:serviceAgreementPage.signatures.date")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
