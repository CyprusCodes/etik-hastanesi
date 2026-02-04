import { Link } from "react-router-dom"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/hospital"

export function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                İletişim
              </span>
              <h2 className="heading-2 mt-2 mb-4 text-white">
                Sağlığınız İçin Bize Ulaşın
              </h2>
              <p className="text-white/80 text-lg">
                Sorularınız veya randevu talepleriniz için bize ulaşabilirsiniz.
                Uzman kadromuz size yardımcı olmaktan mutluluk duyacaktır.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Telefon</div>
                  <div className="font-semibold">{contactInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Adres</div>
                  <div className="font-semibold text-sm">{contactInfo.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Çalışma Saatleri</div>
                  <div className="font-semibold">
                    {contactInfo.workingHours.emergency}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white rounded-3xl p-8 text-foreground">
            <h3 className="heading-3 mb-4">Randevu Alın</h3>
            <p className="text-muted-foreground mb-6">
              Online randevu formunu doldurarak veya telefon ile bize ulaşarak
              hızlıca randevu alabilirsiniz.
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <Link to="/iletisim">
                  Online Randevu
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {contactInfo.phone}
                </a>
              </Button>
            </div>

            {/* Emergency */}
            <div className="mt-6 p-4 bg-emergency/10 rounded-xl border border-emergency/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emergency rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Acil Durumlarda
                  </div>
                  <a
                    href={`tel:${contactInfo.emergency}`}
                    className="font-bold text-xl text-emergency"
                  >
                    {contactInfo.emergency}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
