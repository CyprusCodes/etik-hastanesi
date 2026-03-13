import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "../data/blog"

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h1 className="heading-2 mb-4">Yazı bulunamadı</h1>
            <Link to="/blog" className="text-primary font-medium underline">
              Blog sayfasına dön
            </Link>
          </div>
        </section>
      </Layout>
    )
  }

  const otherPosts = blogPosts.filter((item) => item.slug !== slug)

  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary font-medium hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Bloga geri dön
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.8fr_0.8fr] gap-10">
            <article>
              {post.image ? (
                <div className="rounded-3xl overflow-hidden border border-border mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="mb-6">
                <div className="text-sm text-primary font-medium mb-3">
                  {post.category}
                </div>

                <h1 className="heading-2 mb-3">{post.title}</h1>

                {post.date ? (
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                ) : null}
              </div>

              <div className="space-y-6">
                {post.content?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-muted-foreground leading-8 text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside>
  <div className="rounded-3xl border border-border bg-card p-6 sticky top-24">
    <div className="text-sm text-muted-foreground mb-4">Diğer Yazılar</div>

    <div className="space-y-3">
      {otherPosts.slice(0, 5).map((item) => (
        <Link
          key={item.id}
          to={`/blog/${item.slug}`}
          className="block rounded-2xl border border-border bg-white p-4 hover:border-primary hover:shadow-sm transition-all"
        >
          <div className="font-medium text-foreground leading-6 hover:text-primary transition-colors">
            {item.title}
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-6 pt-6 border-t border-border">
      <Link
        to="/blog"
        className="inline-flex items-center text-primary font-medium hover:opacity-80"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Tüm yazılara dön
      </Link>
    </div>
  </div>
</aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}
