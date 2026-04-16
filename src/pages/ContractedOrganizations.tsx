import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { Building2, BriefcaseMedical, Hotel, Info, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { contractedOrganizations } from "@/data/hospital"

const groupIcons: Record<string, typeof BriefcaseMedical> = {
  unions: Building2,
  hotels: Hotel,
}

export default function ContractedOrganizations() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:contractedOrganizations.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:contractedOrganizations.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("hospital:contractedOrganizations.hero.badge")}
              </span>

              <h1 className="heading-1 mt-3 mb-6">
                {t("hospital:contractedOrganizations.hero.title")}
              </h1>

              <p className="body-large text-muted-foreground">
                {t("hospital:contractedOrganizations.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow space-y-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-2 mb-4">
                {t("hospital:contractedOrganizations.intro.title")}
              </h2>
              <p className="body-large text-muted-foreground">
                {t("hospital:contractedOrganizations.intro.description")}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {contractedOrganizations.map((group) => {
                const Icon = groupIcons[group.id] || BriefcaseMedical
                const hasItems = group.items.length > 0

                return (
                  <div
                    key={group.id}
                    className="rounded-3xl border border-border bg-card p-8 shadow-sm"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {t(group.titleKey)}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t(group.descriptionKey)}
                        </p>
                      </div>
                    </div>

                    {hasItems ? (
                      <div className="grid gap-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-4"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                              <BriefcaseMedical className="h-5 w-5" />
                            </div>

                            <p className="font-medium text-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center">
                        <p className="text-lg font-semibold text-foreground">
                          {t("hospital:contractedOrganizations.emptyState.title")}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t("hospital:contractedOrganizations.emptyState.description")}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                    <Info className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("hospital:contractedOrganizations.notes.title")}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {t("hospital:contractedOrganizations.notes.description")}
                    </p>
                  </div>
                </div>

                <Link
                  to="/iletisim"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  {t("hospital:contractedOrganizations.contactButton")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
