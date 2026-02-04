import { useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { departments, contactInfo } from "@/data/hospital"

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to section if hash exists
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hizmetlerimiz
            </span>
            <h1 className="heading-1 mt-4 mb-6">Bölümlerimiz</h1>
            <p className="body-large">
              Uzman doktor kadromuz ve modern tıbbi teknolojimizle geniş yelpazede
              sağlık hizmeti sunuyoruz. Her bölümümüzde alanında deneyimli
              uzmanlarımız hizmetinizdedir.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="space-y-16">
            {departments.map((dept, index) => {
              const Icon = dept.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={dept.id}
                  id={dept.id}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="heading-2">{dept.title}</h2>
                      </div>

                      <p className="text-muted-foreground text-lg mb-6">
                        {dept.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <ServiceFeature>Uzman doktor kadrosu</ServiceFeature>
                        <ServiceFeature>Modern tıbbi ekipmanlar</ServiceFeature>
                        <ServiceFeature>Hasta odaklı yaklaşım</ServiceFeature>
                        <ServiceFeature>Hızlı tanı ve tedavi</ServiceFeature>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <Link to="/iletisim">
                            Randevu Al
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                            <Phone className="h-4 w-4 mr-2" />
                            Bilgi Al
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl aspect-[4/3] flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Icon className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground">
                              {dept.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < departments.length - 1 && (
                    <div className="border-t border-border mt-16" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-2 text-white mb-4">
            Sağlığınız İçin Bize Ulaşın
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Randevu almak veya hizmetlerimiz hakkında bilgi almak için bizimle
            iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/iletisim">
                Randevu Al
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function ServiceFeature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>
      <span>{children}</span>
    </div>
  )
}
