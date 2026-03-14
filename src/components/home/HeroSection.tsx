import { Link } from "react-router-dom"
import { Phone, Calendar, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { hospitalInfo, contactInfo, stats } from "@/data/hospital"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)] py-12 lg:py-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>1999'dan beri güvenilir sağlık hizmeti</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="heading-1 text-foreground">
                Sağlığınız İçin{" "}
                <span className="gradient-text">Güvenilir</span>{" "}
                Adresiniz
              </h1>
              <p className="body-large max-w-lg">
                {hospitalInfo.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/iletisim">
                  <Calendar className="h-5 w-5 mr-2" />
                  Randevu Al
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Hemen Ara
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>7/24 Acil Servis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>Uzman Kadro</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Main Image Area */}
            <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`text-center p-4 rounded-2xl ${
                        index % 2 === 0 ? "bg-primary/5" : "bg-accent/5"
                      }`}
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hospital Name Banner */}
                <div className="mt-8 p-4 bg-gradient-to-r from-primary to-accent rounded-2xl text-white text-center">
                  <h3 className="font-bold text-xl">{hospitalInfo.name}</h3>
                  <p className="text-sm opacity-90">{hospitalInfo.tagline}</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emergency rounded-2xl flex items-center justify-center shadow-lg animate-float">
              <div className="text-white text-center">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-xs">Acil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
