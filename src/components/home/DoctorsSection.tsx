import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { doctorsPreview } from "@/data/hospital"

export function DoctorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Doktorlarımız
            </span>
            <h2 className="heading-2 mt-3 mb-4">Uzman Hekim Kadromuz</h2>
            <p className="body-large">
              Alanında deneyimli uzman doktorlarımız ile hastalarımıza güvenilir
              ve kaliteli sağlık hizmeti sunuyoruz.
            </p>
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link to="/doktorlarimiz">
              Tüm Doktorlarımız
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsPreview.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
                    {doctor.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground">
                  {doctor.name}
                </h3>

                <p className="text-primary text-sm mt-1">{doctor.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
