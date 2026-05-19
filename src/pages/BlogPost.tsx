import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import { blogPosts } from "../data/blog"

export default function BlogPost() {
  const { slug } = useParams()
  const { t } = useTranslation(["hospital"])
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <>
        <Helmet>
          <title>{t("hospital:blogPostPage.notFound.seo.title")}</title>
          <meta
            name="description"
            content={t("hospital:blogPostPage.notFound.seo.description")}
          />
        </Helmet>

        <Layout>
          <section className="section-padding bg-white">
            <div className="container-narrow">
              <h1 className="heading-2 mb-4">
                {t("hospital:blogPostPage.notFound.title")}
              </h1>

              <Link to="/blog" className="font-medium text-primary underline">
                {t("hospital:blogPostPage.notFound.backToBlog")}
              </Link>
            </div>
          </section>
        </Layout>
      </>
    )
  }

  const otherPosts = blogPosts.filter((item) => item.slug !== slug)

  return (
    <>
      <Helmet>
        <title>
          {t("hospital:blogPostPage.seo.title", { title: t(post.titleKey) })}
        </title>
        <meta name="description" content={t(post.excerptKey)} />
      </Helmet>

      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center font-medium text-primary hover:opacity-80"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("hospital:blogPostPage.backToBlog")}
              </Link>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.8fr_0.8fr]">
              <article>
                {post.image ? (
                  <div className="mb-8 overflow-hidden rounded-3xl border border-border">
                    <img
                      src={t(post.image)}
                      alt={t(post.titleKey)}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="mb-6">
                  <div className="mb-3 text-sm font-medium text-primary">
                    {t(post.categoryKey)}
                  </div>

                  <h1 className="heading-2 mb-3">{t(post.titleKey)}</h1>

                  {post.date ? (
                    <div className="text-sm text-gray-700">
                      {t(post.date)}
                    </div>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {post.contentKeys?.map((paragraphKey, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-gray-700 text-justify"
                    >
                      {t(paragraphKey)}
                    </p>
                  ))}
                </div>
              </article>

              <aside>
                <div className="sticky top-24 rounded-3xl border border-border bg-card p-6">
                  <div className="mb-4 text-sm text-gray-700">
                    {t("hospital:blogPostPage.otherPosts")}
                  </div>

                  <div className="space-y-3">
                    {otherPosts.slice(0, 5).map((item) => (
                      <Link
                        key={item.id}
                        to={`/blog/${item.slug}`}
                        className="block rounded-2xl border border-border bg-white p-4 transition-all hover:border-primary hover:shadow-sm"
                      >
                        <div className="leading-6 font-medium text-foreground transition-colors hover:text-primary">
                          {t(item.titleKey)}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <Link
                      to="/blog"
                      className="inline-flex items-center font-medium text-primary hover:opacity-80"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t("hospital:blogPostPage.backToAllPosts")}
                    </Link>
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
