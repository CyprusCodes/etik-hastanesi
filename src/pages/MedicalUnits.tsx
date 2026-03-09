import { Layout } from "@/components/layout/Layout"
import { CategoryCards } from "@/components/medical/CategoryCards"

export default function MedicalUnits() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hizmetlerimiz
            </span>
            <h1 className="heading-1 mt-4 mb-6">Tıbbi Birimler</h1>
            <p className="body-large">
              Tıbbi birimlerimiz kategoriler halinde listelenmiştir. Size uygun bölümü seçerek detaylara ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <CategoryCards />
        </div>
      </section>
    </Layout>
  )
}
