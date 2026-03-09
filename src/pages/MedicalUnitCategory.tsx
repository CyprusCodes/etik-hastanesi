import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { medicalUnitCategories } from "@/data/hospital"

export default function MedicalUnitCategory() {
  const { category } = useParams()

  const current = medicalUnitCategories.find((c) => c.id === category)

  if (!current) {
    return (
      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h1 className="heading-2 mb-4">Kategori bulunamadı</h1>
            <Link
              to="/tibbi-birimler"
              className="text-primary font-medium underline"
            >
              Tıbbi Birimler sayfasına dön
            </Link>
          </div>
        </section>
      </Layout>
    )
  }

  const Icon = current.icon

  return (
    <Layout>
      {/* Header */}

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">

            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>

            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hizmetlerimiz
            </span>

            <h1 className="heading-1 mt-3">
              {current.title}
            </h1>

            <p className="body-large mt-4">
              {current.description}
            </p>

            <div className="mt-6">
              <Link
                to="/tibbi-birimler"
                className="inline-flex items-center text-primary font-medium hover:opacity-80"
              >
                Tüm kategoriler
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Branch list */}
      <section className="section-padding bg-white">
        <div className="container-narrow">

          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="heading-2">
              Branşlar
            </h2>

            <div className="text-sm text-muted-foreground">
              {current.items.length} branş
            </div>
          </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

  {current.items.map((item) => (
    <Link
      key={item.id}
      to={`/tibbi-birimler/${current.id}/${item.id}`}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative h-44 w-full bg-secondary">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-muted-foreground mt-2 line-clamp-4">
          {item.description}
        </p>

        <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
          <span>Detaylar</span>
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
