import { useState } from "react"
import { testimonials } from "@/data/hospital"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 2) % testimonials.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const visible = testimonials.slice(index, index + 2)

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">

        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hasta Yorumları
            </span>

            <h2 className="heading-2 mt-2">
             Biz Mutluyuz
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-primary hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {item.name.charAt(0)}
                  </div>
                )}

                <div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>

                  <div className="font-semibold text-foreground">
                    {item.name}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
