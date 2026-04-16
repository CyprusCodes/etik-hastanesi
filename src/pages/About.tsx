import { Layout } from "@/components/layout/Layout"
import { Award, Users, Heart, Target, Eye } from "lucide-react"
import {stats } from "@/data/hospital"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Building2, ArrowRight } from "lucide-react"

const timeline = [
  {
    year: "1999",
    titleKey: "hospital:aboutPage.timeline.0.title",
    descriptionKey: "hospital:aboutPage.timeline.0.description",
  },
  {
    year: "2005",
    titleKey: "hospital:aboutPage.timeline.1.title",
    descriptionKey: "hospital:aboutPage.timeline.1.description",
  },
  {
    year: "2010",
    titleKey: "hospital:aboutPage.timeline.2.title",
    descriptionKey: "hospital:aboutPage.timeline.2.description",
  },
  {
    year: "2015",
    titleKey: "hospital:aboutPage.timeline.3.title",
    descriptionKey: "hospital:aboutPage.timeline.3.description",
  },
  {
    year: "2020",
    titleKey: "hospital:aboutPage.timeline.4.title",
    descriptionKey: "hospital:aboutPage.timeline.4.description",
  },
  {
    yearKey: "hospital:aboutPage.timeline.5.year",
    titleKey: "hospital:aboutPage.timeline.5.title",
    descriptionKey: "hospital:aboutPage.timeline.5.description",
  },
]

const values = [
  {
    icon: Heart,
    titleKey: "hospital:aboutPage.values.items.0.title",
    descriptionKey: "hospital:aboutPage.values.items.0.description",
  },
  {
    icon: Award,
    titleKey: "hospital:aboutPage.values.items.1.title",
    descriptionKey: "hospital:aboutPage.values.items.1.description",
  },
  {
    icon: Users,
    titleKey: "hospital:aboutPage.values.items.2.title",
    descriptionKey: "hospital:aboutPage.values.items.2.description",
  },
]

export default function About() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:aboutPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:aboutPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:aboutPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-4 mb-6">
                {t("hospital:name")}
              </h1>

              <p className="body-large">
                {t("hospital:aboutPage.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container-narrow">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="rounded-2xl bg-secondary/50 p-6 text-center"
                >
                  <div className="mb-1 text-3xl font-bold text-primary lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Target className="h-7 w-7 text-white" />
                </div>

                <h2 className="heading-3 mb-4">
                  {t("hospital:aboutPage.mission.title")}
                </h2>

                <p className="text-muted-foreground">
                  {t("hospital:aboutPage.mission.description")}
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <Eye className="h-7 w-7 text-white" />
                </div>

                <h2 className="heading-3 mb-4">
                  {t("hospital:aboutPage.vision.title")}
                </h2>

                <p className="text-muted-foreground">
                  {t("hospital:aboutPage.vision.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:aboutPage.values.badge")}
              </span>
              <h2 className="heading-2 mt-2">
                {t("hospital:aboutPage.values.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon

                return (
                  <div
                    key={value.titleKey}
                    className="card-hover rounded-2xl border border-border bg-white p-8 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="heading-3 mb-3 text-xl">
                      {t(value.titleKey)}
                    </h3>

                    <p className="text-muted-foreground">
                      {t(value.descriptionKey)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:aboutPage.timelineSection.badge")}
              </span>
              <h2 className="heading-2 mt-2">
                {t("hospital:aboutPage.timelineSection.title")}
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

                {timeline.map((item, index) => (
                  <div
                    key={`${item.year ?? item.yearKey}-${index}`}
                    className={`relative mb-8 flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 z-10 h-3 w-3 rounded-full bg-primary -translate-x-1/2 md:left-1/2" />

                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="rounded-xl border border-border bg-card p-6">
                        <span className="text-lg font-bold text-primary">
                          {item.year ?? t(item.yearKey!)}
                        </span>

                        <h3 className="mt-1 text-lg font-semibold">
                          {t(item.titleKey)}
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {t(item.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

       <section className="bg-white pb-12">
  <div className="container-narrow">
    <div className="rounded-2xl border border-border bg-secondary/20 px-6 py-6 shadow-sm lg:px-8 lg:py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            <Building2 className="h-5 w-5 text-primary" />
          </div>

          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {t("hospital:aboutSection.contractedOrganizations.badge")}
          </span>

          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            {t("hospital:aboutSection.contractedOrganizations.title")}
          </h2>

          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            {t("hospital:aboutSection.contractedOrganizations.description")}
          </p>
        </div>

        <div className="shrink-0">
          <Link
            to="/anlasmali-kurumlar"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            {t("hospital:aboutSection.contractedOrganizations.button")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      </Layout>
    </>
  )
}
