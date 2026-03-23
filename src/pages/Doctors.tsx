import { useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { doctors, medicalUnitCategories } from "@/data/hospital"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

const groupedDoctors = doctors.reduce<Record<string, typeof doctors[number][]>>(
  (acc, doctor) => {
    if (!acc[doctor.departmentKey]) {
      acc[doctor.departmentKey] = []
    }

    acc[doctor.departmentKey].push(doctor)
    return acc
  },
  {}
)

const departmentOrder = medicalUnitCategories.map((category) => ({
  id: category.id,
  title: category.titleKey,
}))

const departmentTranslationMap: Record<string, string> = {
  cerrahi: "hospital:medicalUnitCategories.surgical.title",
  dahili: "hospital:medicalUnitCategories.internal.title",
  diger: "hospital:medicalUnitCategories.other.title",
  paramedikal: "hospital:medicalUnitCategories.paramedical.title",
}
const departmentGroupMap: Record<string, string> = {
  cerrahi: "hospital:doctorDepartments.surgical",
  dahili: "hospital:doctorDepartments.internal",
  diger: "hospital:doctorDepartments.other",
  paramedikal: "hospital:doctorDepartments.paramedical",
}

function chunkArray<T>(array: T[], size: number) {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export default function Doctors() {
  const { t } = useTranslation(["hospital"])
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
    <>
      <Helmet>
        <title>{t("hospital:doctorsPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:doctorsPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:doctorsPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-3 mb-6">
                {t("hospital:doctorsPage.hero.title")}
              </h1>

              <p className="body-large">
                {t("hospital:doctorsPage.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow space-y-16">
            {departmentOrder.map((departmentItem) => {
              const departmentDoctors = groupedDoctors[departmentGroupMap[departmentItem.id]]
              if (!departmentDoctors?.length) return null

              const sortedDoctors = departmentDoctors
                .slice()
                .sort((a, b) => a.order - b.order)

              const pages = chunkArray(sortedDoctors, 3)
              const currentPage = currentPages[departmentItem.id] ?? 0
              const visibleDoctors = pages[currentPage] || []
              const totalPages = pages.length

              const translatedDepartment =
                departmentTranslationMap[departmentItem.id]
                  ? t(departmentTranslationMap[departmentItem.id])
                  : departmentItem.title

              return (
                <div key={departmentItem.id}>
                  <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="heading-2">{translatedDepartment}</h2>
                      <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
                    </div>

                    {totalPages > 1 ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handlePrev(departmentItem.id, totalPages)}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                          aria-label={t("hospital:doctorsPage.pagination.previous", {
                            department: translatedDepartment,
                          })}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNext(departmentItem.id, totalPages)}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                          aria-label={t("hospital:doctorsPage.pagination.next", {
                            department: translatedDepartment,
                          })}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visibleDoctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                      >
                        <div className="flex h-64 items-center justify-center bg-secondary">
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

                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-foreground">
                            {doctor.name}
                          </h3>

                          <p className="mt-2 text-sm text-primary">
                            {t(doctor.titleKey)}
                          </p>

                          <div className="mt-4">
                            <Link
                              to="/iletisim"
                              className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                              {t("hospital:doctorsPage.contactButton")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalPages > 1 ? (
                    <div className="mt-6 flex justify-center gap-2">
                      {pages.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            setCurrentPages((prev) => ({
                              ...prev,
                              [departmentItem.id]: index,
                            }))
                          }
                          className={`h-2.5 rounded-full transition-all ${
                            currentPage === index
                              ? "w-8 bg-primary"
                              : "w-2.5 bg-border"
                          }`}
                          aria-label={t("hospital:doctorsPage.pagination.page", {
                            department: translatedDepartment,
                            page: index + 1,
                          })}
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
    </>
  )
}
