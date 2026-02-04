import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { departments } from "@/data/hospital"

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="heading-2 mt-2 mb-4">Bölümlerimiz</h2>
          <p className="body-large">
            Uzman doktor kadromuz ve modern tıbbi teknolojimizle geniş yelpazede
            sağlık hizmeti sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon
            return (
              <Link
                key={dept.id}
                to={`/hizmetler#${dept.id}`}
                className="group relative bg-card rounded-2xl border border-border p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="heading-3 text-lg mb-2 group-hover:text-primary transition-colors">
                  {dept.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {dept.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  <span>Detaylar</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link to="/hizmetler">
              Tüm Hizmetlerimiz
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
