import { Layout } from "@/components/layout/Layout"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "../data/blog"

export default function Blog() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h1 className="heading-1 mt-3 mb-6">Sağlık Yazıları</h1>
            <p className="body-large">
              Sağlığınızla ilgili güncel bilgiler, farkındalık içerikleri ve
              uzman görüşlerine blog sayfamızdan ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-56 bg-secondary">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-primary font-medium">
                    {post.category}
                  </div>

                  <h2 className="font-semibold text-xl text-foreground mt-3 group-hover:text-primary transition-colors min-h-[64px]">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mt-3 leading-7 line-clamp-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 inline-flex items-center text-primary text-sm font-medium">
                    <span>Devamını Oku</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
