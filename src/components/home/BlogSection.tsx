import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { blogPreview } from "../../data/blog"

export function BlogSection() {
  const { t } = useTranslation(["hospital"])

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t("hospital:blogSection.badge")}
            </span>

            <h2 className="heading-2 mt-3 mb-4">
              {t("hospital:blogSection.title")}
            </h2>

            <p className="body-large">
              {t("hospital:blogSection.description")}
            </p>
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link to="/blog">
              {t("hospital:blogSection.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPreview.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-52 bg-secondary">
                {post.image ? (
                  <img
                    src={t(post.image)}
                    alt={t(post.titleKey)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="min-h-[60px] text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {t(post.titleKey)}
                </h3>

                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-7 text-gray-700">
                  {t(post.excerptKey)}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                  <span>{t("hospital:blogSection.readMore")}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
