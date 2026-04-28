import { useMemo, useState, type FormEvent } from "react"
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { contactInfo, medicalUnitCategories } from "@/data/hospital"
const mapsUrl = "https://maps.app.goo.gl/m8ZGpYZLFXpCXNVy8"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function Contact() {
  const { t, i18n } = useTranslation(["hospital", "common"])
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appointmentType: "",
    department: "",
    message: "",
  })

  type MedicalUnitOption = {
    id: string
    label: string
  }

const allMedicalUnits = useMemo<MedicalUnitOption[]>(() => {
  return medicalUnitCategories
    .flatMap((category) =>
      category.items.map((item) => ({
        id: String(item.id),
        label: t(String(item.titleKey)),
      }))
    )
    .sort((a, b) =>
      a.label.localeCompare(b.label, i18n.language.startsWith("en") ? "en" : "tr")
    )
}, [t, i18n.language])

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setFormStatus("submitting")

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzCjZrktV1tXlqfwufjV_OijPhq16aGE0jXgf_iBKyQtFxL9fH545vN26JSwOB-4Gmu/exec"

    if (!scriptUrl) {
      throw new Error("Apps Script URL is missing.")
    }

    const formPayload = new FormData()
    formPayload.append("sheet", "appointments")
    formPayload.append("name", formData.name)
    formPayload.append("phone", formData.phone)
    formPayload.append("email", formData.email)
    formPayload.append("appointmentType", formData.appointmentType)
    formPayload.append("department", formData.department)
    formPayload.append("message", formData.message)

    const response = await fetch(scriptUrl, {
      method: "POST",
      body: formPayload,
    })

    const data = await response.json()

    if (data?.result === "success") {
      setFormStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        appointmentType: "",
        department: "",
        message: "",
      })
    } else {
      throw new Error(data?.error || "Unknown error")
    }
  } catch (error) {
    console.error("Appointment form error:", error)
    setFormStatus("error")
  }
}

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Helmet>
        <title>{t("hospital:contactPage.seo.title")}</title>
        <meta
          name="description"
          content={t("hospital:contactPage.seo.description")}
        />
      </Helmet>

      <Layout>
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t("hospital:contactPage.hero.badge")}
              </span>

              <h1 className="heading-1 mt-4 mb-6">
                {t("hospital:contactPage.hero.title")}
              </h1>

              <p className="body-large">
                {t("hospital:contactPage.hero.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-2 mb-6">
                    {t("hospital:contactPage.info.title")}
                  </h2>

                  <p className="text-muted-foreground">
                    {t("hospital:contactPage.info.description")}
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactCard
                    icon={Phone}
                    title={t("hospital:contactPage.cards.phone")}
                    content={contactInfo.phone}
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  />

                  {contactInfo.phone2 && (
                    <ContactCard
                      icon={Phone}
                      title={t("hospital:contactPage.cards.phone2")}
                      content={contactInfo.phone2}
                      href={`tel:${contactInfo.phone2.replace(/\s/g, "")}`}
                    />
                  )}

                  {contactInfo.email && (
                    <ContactCard
                      icon={Mail}
                      title={t("hospital:contactPage.cards.email")}
                      content={contactInfo.email}
                      href={`mailto:${contactInfo.email}`}
                    />
                  )}

                  {contactInfo.hrEmail && (
                    <ContactCard
                      icon={Mail}
                      title={t("hospital:contactPage.cards.hr")}
                      content={contactInfo.hrEmail}
                      href={`mailto:${contactInfo.hrEmail}`}
                    />
                  )}

                  <ContactCard
  icon={MapPin}
  title={t("hospital:contactPage.cards.address")}
  content={contactInfo.address}
  href={mapsUrl}
  external
/>

                  <ContactCard
                    icon={Clock}
                    title={t("hospital:contactPage.cards.workingHours")}
                    content={
                      <>
                        <span className="block font-semibold text-primary">
                          {t("hospital:workingHours.emergency")}
                        </span>
                      </>
                    }
                  />
                </div>

                <div className="rounded-2xl border border-emergency/20 bg-emergency/10 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emergency">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {t("hospital:contactPage.emergency.label")}
                      </div>
                      <a
                        href={`tel:${contactInfo.emergency}`}
                        className="text-2xl font-bold text-emergency transition-opacity hover:opacity-80"
                      >
                        {contactInfo.emergency}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="heading-3 mb-6">
                  {t("hospital:contactPage.form.title")}
                </h2>

                {formStatus === "success" ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">
                      {t("hospital:contactPage.form.success.title")}
                    </h3>

                    <p className="mb-6 text-muted-foreground">
                      {t("hospital:contactPage.form.success.description")}
                    </p>

                    <Button onClick={() => setFormStatus("idle")}>
                      {t("hospital:contactPage.form.success.button")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        {t("hospital:contactPage.form.fields.name.label")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder={t("hospital:contactPage.form.fields.name.placeholder")}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          {t("hospital:contactPage.form.fields.phone.label")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder={t("hospital:contactPage.form.fields.phone.placeholder")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          {t("hospital:contactPage.form.fields.email.label")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder={t("hospital:contactPage.form.fields.email.placeholder")}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="appointmentType"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          {t("hospital:contactPage.form.fields.appointmentType.label")}
                        </label>
                        <select
                          id="appointmentType"
                          name="appointmentType"
                          value={formData.appointmentType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">
                            {t("hospital:contactPage.form.fields.appointmentType.placeholder")}
                          </option>
                          <option value="on-gorusme">
                            {t("hospital:contactPage.form.fields.appointmentType.options.preConsultation")}
                          </option>
                          <option value="muayene">
                            {t("hospital:contactPage.form.fields.appointmentType.options.examination")}
                          </option>
                          <option value="kontrol">
                            {t("hospital:contactPage.form.fields.appointmentType.options.control")}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="department"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          {t("hospital:contactPage.form.fields.department.label")}
                        </label>
                        <select
                          key= {i18n.language}
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">
                            {t("hospital:contactPage.form.fields.department.placeholder")}
                          </option>
                          {allMedicalUnits.map((unit) => (
                            <option key={unit.id} value={unit.label}>
                              {unit.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        {t("hospital:contactPage.form.fields.message.label")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder={t("hospital:contactPage.form.fields.message.placeholder")}
                      />
                    </div>

                    {formStatus === "error" && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        <span>{t("hospital:contactPage.form.error")}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        t("hospital:contactPage.form.submitting")
                      ) : (
                        <>
                          {t("hospital:contactPage.form.submit")}
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="h-96 bg-secondary">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.2!2d${contactInfo.location.lng}!3d${contactInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEyJzA0LjYiTiAzM8KwMTknNDcuMyJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("hospital:contactPage.mapTitle")}
          />
        </section>
      </Layout>
    </>
  )
}

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: React.ReactNode
  href?: string
  external?: boolean
}

function ContactCard({ icon: Icon, title, content, href, external }: ContactCardProps) {
  const Wrapper = href ? "a" : "div"
  const wrapperProps = href
  ? {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
      "aria-label": external ? `${title} konumunu Google Maps üzerinde aç` : undefined,
    }
  : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-start gap-4 rounded-xl bg-secondary/50 p-4 ${
        href ? "cursor-pointer transition-colors hover:bg-secondary" : ""
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <div className="mb-1 text-sm text-muted-foreground">{title}</div>
        <div className="font-medium text-foreground">{content}</div>
      </div>
    </Wrapper>
  )

}
