import { useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { doctors, medicalUnitCategories } from "@/data/hospital"

const groupedDoctors = doctors.reduce<Record<string, typeof doctors[number][]>>(
  (acc, doctor) => {
    if (!acc[doctor.department]) {
      acc[doctor.department] = []
    }

    acc[doctor.department].push(doctor)
    return acc
  },
  {}
)

const departmentOrder = medicalUnitCategories.map((category) => category.title)

function chunkArray<T>(array: T[], size: number) {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export default function Doctors() {
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({})

  const handlePrev = (department: string, totalPages: number) => {
    setCurrentPages((prev) => {
      const current = prev[department] ?? 0

      return {
        ...prev,
        [department]: current > 0 ? current - 1 : totalPages - 1,
      }
    })
  }

  const handleNext = (department: string, totalPages: number) => {
    setCurrentPages((prev) => {
      const current = prev[department] ?? 0

      return {
        ...prev,
        [department]: current < totalPages - 1 ? current + 1 : 0,
      }
    })
  }

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Doktorlarımız
            </span>
            <h1 className="heading-1 mt-3 mb-6">Uzman Hekim Kadromuz</h1>
            <p className="body-large">
              Hastalarımıza güvenilir sağlık hizmeti sunan uzman
              doktorlarımızı branşlarına göre inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow space-y-16">
          {departmentOrder.map((department) => {
            const departmentDoctors = groupedDoctors[department]
            if (!departmentDoctors?.length) return null

            const sortedDoctors = departmentDoctors
              .slice()
              .sort((a, b) => a.order - b.order)

            const pages = chunkArray(sortedDoctors, 3)
            const currentPage = currentPages[department] ?? 0
            const visibleDoctors = pages[currentPage] || []
            const totalPages = pages.length

            return (
              <div key={department}>
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="heading-2">{department}</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mt-3" />
                  </div>

                  {totalPages > 1 ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handlePrev(department, totalPages)}
                        className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label={`${department} önceki doktorlar`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNext(department, totalPages)}
                        className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label={`${department} sonraki doktorlar`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div className="h-64 bg-secondary flex items-center justify-center">
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

                      <div className="p-6">
                        <h3 className="font-semibold text-lg text-foreground">
                          {doctor.name}
                        </h3>

                        <p className="text-primary text-sm mt-2">
                          {doctor.title}
                        </p>

                        <div className="mt-4">
                          <Link
                            to="/iletisim"
                            className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            İletişime Geç
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 ? (
                  <div className="flex justify-center gap-2 mt-6">
                    {pages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          setCurrentPages((prev) => ({
                            ...prev,
                            [department]: index,
                          }))
                        }
                        className={`h-2.5 rounded-full transition-all ${
                          currentPage === index
                            ? "w-8 bg-primary"
                            : "w-2.5 bg-border"
                        }`}
                        aria-label={`${department} sayfa ${index + 1}`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
