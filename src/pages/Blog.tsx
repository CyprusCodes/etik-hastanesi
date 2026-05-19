import { Layout } from "@/components/layout/Layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { blogPosts } from "../data/blog"

export default function Blog() {
  const { t } = useTranslation(["hospital"])

  return (
    <>
      <Helmet>
        <title>{t("hospital:blogPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:blogPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:blogPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-3 mb-6">
                {t("hospital:blogPage.hero.title")}
              </h1>

              <p className="body-large">
                {t("hospital:blogPage.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="h-56 bg-secondary">
                    {post.image ? (
                      <img
                        src={t(post.image)}
                        alt={t(post.titleKey)}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-sm font-medium text-primary">
                      {t(post.categoryKey)}
                    </div>

                    <h2 className="mt-3 min-h-[64px] text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {t(post.titleKey)}
                    </h2>

                    <p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-gray-700">
                      {t(post.excerptKey)}
                    </p>

                    <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                      <span>{t("hospital:blogPage.readMore")}</span>
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
