import { useState } from "react"
import { useTranslation } from "react-i18next"
import { testimonials } from "@/data/hospital"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useTranslation(["hospital"])
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 2) % testimonials.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const visible = testimonials.slice(index, index + 2)

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t("hospital:testimonialsSection.badge")}
            </span>

            <h2 className="heading-2 mt-2">
              {t("hospital:testimonialsSection.title")}
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {item.name.charAt(0)}
                  </div>
                )}

                <div>
                  <div className="text-xs text-gray-700">
                    {t(item.roleKey)}
                  </div>

                  <div className="font-semibold text-foreground">
                    {item.name}
                  </div>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-700">
                {t(item.textKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
