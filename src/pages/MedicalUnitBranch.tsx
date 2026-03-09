import { Layout } from "@/components/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { medicalUnitCategories, contactInfo } from "@/data/hospital"

export default function MedicalUnitBranch() {
  const { category, branch } = useParams()

  const currentCategory = medicalUnitCategories.find((c) => c.id === category)
  const currentBranch = currentCategory?.items.find((b) => b.id === branch)

  if (!currentCategory || !currentBranch) {
    return (
      <Layout>
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h1 className="heading-2">Sayfa bulunamadı</h1>
            <p className="text-muted-foreground mt-2">
              Aradığınız branş bulunamadı. Lütfen branşlar sayfasına dönün.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link to="/tibbi-birimler">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Tıbbi Birimler
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  const image = "image" in currentBranch ? (currentBranch as any).image : undefined
  const longDescription =
    "longDescription" in currentBranch
      ? (currentBranch as any).longDescription
      : undefined

  const bullets =
    "bullets" in currentBranch
      ? (currentBranch as any).bullets
      : undefined

  const shortDescription = (currentBranch as any).description ?? ""
  const fullDescription = longDescription ?? shortDescription
  const paragraphs = fullDescription
    .split("\n\n")
    .filter((paragraph: string) => paragraph.trim().length > 0)

  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-14 lg:py-20">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-background/80" />
          </>
        ) : null}

        <div className="container-narrow relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <Link
                to={`/tibbi-birimler/${currentCategory.id}`}
                className="inline-flex items-center text-primary font-medium hover:opacity-80"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {currentCategory.title} • Branşlar
              </Link>

              <h1 className="heading-1 mt-4">{currentBranch.title}</h1>

              <p className="body-large mt-4">
                {shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link to="/iletisim">
                    <Calendar className="h-5 w-5 mr-2" />
                    Randevu Al
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a href={phoneHref}>
                    <Phone className="h-5 w-5 mr-2" />
                    Hemen Ara
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border border-border bg-white shadow-sm">
                <div className="aspect-[4/3] bg-secondary">
                  {image ? (
                    <img
                      src={image}
                      alt={currentBranch.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <div className="p-4">
                  <div className="text-sm text-muted-foreground">Branş</div>
                  <div className="font-semibold">{currentBranch.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 max-w-3xl">
              <h2 className="heading-2 mb-6">Branş Hakkında</h2>

              <div className="space-y-6">
                {paragraphs.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-8 text-base text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {bullets?.length ? (
                <div className="mt-10 rounded-2xl bg-secondary/40 p-6">
                  <h3 className="font-semibold text-lg mb-4">Öne Çıkan Alanlar</h3>

                  <div className="space-y-3">
                    {bullets.map((bullet: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2" />
                        <p className="text-muted-foreground">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-1">
              <div className="rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-28">
                <div className="text-sm text-muted-foreground">Kategori</div>
                <div className="font-semibold text-lg">{currentCategory.title}</div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-3">Hızlı İşlemler</div>

                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link to="/iletisim">Randevu Formu</Link>
                    </Button>

                    <Button variant="outline" className="w-full" asChild>
                      <a href={phoneHref}>Telefonla Ara</a>
                    </Button>

                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to={`/tibbi-birimler/${currentCategory.id}`}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Branşlara geri dön
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}
