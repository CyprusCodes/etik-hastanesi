import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Stethoscope, HeartPulse, Layers, HandHeart } from "lucide-react";

const categories = [
  {
    id: "cerrahi",
    title: "Cerrahi Birimler",
    description: "Cerrahi müdahale ve ameliyat gerektiren branşlarımız.",
    href: "/tibbi-birimler/cerrahi",
    icon: Stethoscope,
  },
  {
    id: "dahili",
    title: "Dahili Birimler",
    description: "Tanı, takip ve tedavi odaklı dahili branşlarımız.",
    href: "/tibbi-birimler/dahili",
    icon: HeartPulse,
  },
  {
    id: "diger",
    title: "Diğer Birimler",
    description: "Farklı uzmanlık alanlarında destek birimlerimiz.",
    href: "/tibbi-birimler/diger",
    icon: Layers,
  },
  {
    id: "paramedikal",
    title: "Paramedikal",
    description: "Fizyoterapi ve destekleyici sağlık hizmetleri.",
    href: "/tibbi-birimler/paramedikal",
    icon: HandHeart,
  },
]

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="heading-2 mt-2 mb-4">Tıbbi Birimler</h2>
          <p className="body-large">
            Tıbbi birimlerimiz kategoriler halinde listelenmiştir. Size uygun bölümü seçerek detaylara ulaşabilirsiniz.
          </p>
        </div>

        {/* Grid (4 yan yana) */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative bg-card rounded-2xl border border-border p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon (soldaki gibi) */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="heading-3 text-lg mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {cat.description}
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
            <Link to="/tibbi-birimler">
              Tüm Tıbbi Birimler
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
