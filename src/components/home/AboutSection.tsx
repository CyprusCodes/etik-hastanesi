import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { hospitalInfo } from "@/data/hospital"

const highlights = [
  "Lefkoşa'nın ilk özel hastanesi",
  "26 yılı aşkın deneyim",
  "7/24 acil servis hizmeti",
  "Uzman doktor kadrosu",
  "Modern tıbbi teknoloji",
  "Hasta memnuniyeti odaklı yaklaşım",
]

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-3xl">
              <div className="bg-secondary rounded-3xl aspect-[4/3] flex items-center justify-center">
               <div className="bg-secondary rounded-3xl aspect-[4/3] overflow-hidden">
  <img
    src="/images/about/etik-hastanesi.webp"
    alt="Etik Hastanesi"
    className="w-full h-full object-cover"
  />
</div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {new Date().getFullYear() - hospitalInfo.foundedYear}+
                </div>
                <div className="text-sm text-muted-foreground">Yıllık Deneyim</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Hakkımızda
              </span>
              <h2 className="heading-2 mt-2 mb-4">
                Güvenilir Sağlık Hizmeti İçin Doğru Adres
              </h2>
              <p className="body-large">
                {hospitalInfo.foundedYear} yılında Lefkoşa'nın ilk özel hastanesi olarak
                kurulan {hospitalInfo.name}, bugün modern tıbbi teknolojisi ve uzman
                kadrosuyla Kuzey Kıbrıs'ın önde gelen sağlık kuruluşları arasında yer
                almaktadır.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" asChild>
                <Link to="/hakkimizda">
                  Daha Fazla Bilgi
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
