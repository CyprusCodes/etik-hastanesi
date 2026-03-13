import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPreview } from "../../data/blog"

export function BlogSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h2 className="heading-2 mt-3 mb-4">Sağlık Yazıları</h2>
            <p className="body-large">
              Sağlığınızla ilgili güncel bilgiler, farkındalık içerikleri ve
              faydalı öneriler için blog yazılarımıza göz atabilirsiniz.
            </p>
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link to="/blog">
              Tüm Yazılar
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPreview.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group h-full bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-52 bg-secondary">
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
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors min-h-[64px]">
                  {post.title}
                </h3>

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
  )
}
