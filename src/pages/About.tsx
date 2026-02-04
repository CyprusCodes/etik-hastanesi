import { Layout } from "@/components/layout/Layout"
import { Award, Users, Heart, Target, Eye } from "lucide-react"
import { hospitalInfo, stats } from "@/data/hospital"

const timeline = [
  {
    year: "2000",
    title: "Kuruluş",
    description: "Lefkoşa'nın ilk özel hastanesi olarak hizmete açıldık.",
  },
  {
    year: "2005",
    title: "Genişleme",
    description: "Yeni bölümler ve modern tıbbi cihazlarla kapasitemizi artırdık.",
  },
  {
    year: "2010",
    title: "Teknoloji Yatırımı",
    description: "En son teknoloji tıbbi ekipmanlarla hastanemizi donattık.",
  },
  {
    year: "2015",
    title: "Uzman Kadro",
    description: "Alanında uzman doktorlarla ekibimizi güçlendirdik.",
  },
  {
    year: "2020",
    title: "20. Yıl",
    description: "20 yıllık deneyimimizle sağlık hizmetlerimizi sürdürüyoruz.",
  },
  {
    year: "Bugün",
    title: "Sürekli Gelişim",
    description: "Her geçen gün daha iyi sağlık hizmeti sunmak için çalışıyoruz.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Hasta Odaklılık",
    description: "Her kararımızda hastalarımızın sağlığı ve konforu ön plandadır.",
  },
  {
    icon: Award,
    title: "Kalite",
    description: "En yüksek standartlarda sağlık hizmeti sunmayı hedefliyoruz.",
  },
  {
    icon: Users,
    title: "Takım Çalışması",
    description: "Uzman kadromuzla koordineli ve etkili sağlık hizmeti veriyoruz.",
  },
]

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h1 className="heading-1 mt-4 mb-6">
              {hospitalInfo.name}
            </h1>
            <p className="body-large">
              {hospitalInfo.foundedYear} yılından bu yana Lefkoşa'da güvenilir sağlık hizmeti
              sunuyoruz. Lefkoşa'nın ilk özel hastanesi olarak kurulmuş olan hastanemiz,
              bugün Kuzey Kıbrıs'ın önde gelen sağlık kuruluşları arasında yer almaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-secondary/50"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h2 className="heading-3 mb-4">Misyonumuz</h2>
              <p className="text-muted-foreground">
                Hastalarımıza en yüksek kalitede, güvenilir ve erişilebilir sağlık
                hizmeti sunmak. Modern tıbbi teknoloji ve uzman kadromuzla toplumun
                sağlık ihtiyaçlarına çözüm üretmek.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h2 className="heading-3 mb-4">Vizyonumuz</h2>
              <p className="text-muted-foreground">
                Kuzey Kıbrıs'ın en güvenilir ve tercih edilen sağlık kuruluşu olmak.
                Sürekli gelişim ve yenilikçi yaklaşımlarla sağlık hizmetlerinde
                öncü olmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Değerlerimiz
            </span>
            <h2 className="heading-2 mt-2">Bizi Biz Yapan Değerler</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-2xl border border-border text-center card-hover"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Tarihçemiz
            </span>
            <h2 className="heading-2 mt-2">Yolculuğumuz</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <span className="text-primary font-bold text-lg">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
