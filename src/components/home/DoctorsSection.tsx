import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { doctorsPreview } from "@/data/hospital"

export function DoctorsSection() {
  const { t } = useTranslation(["hospital"])

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t("hospital:doctorsSection.badge")}
            </span>

            <h2 className="heading-2 mt-3 mb-4">
              {t("hospital:doctorsSection.title")}
            </h2>

            <p className="body-large">
              {t("hospital:doctorsSection.description")}
            </p>
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link to="/doktorlarimiz">
              {t("hospital:doctorsSection.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctorsPreview.map((doctor) => (
            <div
              key={doctor.id}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="w-full aspect-[10/11] overflow-hidden bg-secondary">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                    {doctor.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm text-primary">
                  {t(doctor.titleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
