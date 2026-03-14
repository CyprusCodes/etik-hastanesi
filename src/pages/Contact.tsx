import { useMemo, useState, type FormEvent } from "react"
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
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

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function Contact() {
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
  title: string
}

const allMedicalUnits = useMemo<MedicalUnitOption[]>(() => {
  return medicalUnitCategories
    .flatMap((category) =>
      category.items.map((item) => ({
        id: String(item.id),
        title: String(item.title),
      }))
    )
    .sort((a, b) => a.title.localeCompare(b.title, "tr"))
}, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormStatus("success")
    setFormData({
      name: "",
      phone: "",
      email: "",
      appointmentType: "",
      department: "",
      message: "",
    })
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
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              İletişim
            </span>
            <h1 className="heading-1 mt-4 mb-6">Bize Ulaşın</h1>
            <p className="body-large">
              Sorularınız, randevu talepleriniz veya önerileriniz için bizimle
              iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-2 mb-6">İletişim Bilgileri</h2>
                <p className="text-muted-foreground">
                  Aşağıdaki iletişim kanallarından bize ulaşabilir veya doğrudan
                  hastanemizi ziyaret edebilirsiniz.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <ContactCard
                  icon={Phone}
                  title="Telefon"
                  content={contactInfo.phone}
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                />
                {contactInfo.phone2 && (
                  <ContactCard
                    icon={Phone}
                    title="Telefon 2"
                    content={contactInfo.phone2}
                    href={`tel:${contactInfo.phone2.replace(/\s/g, "")}`}
                  />
                )}
                {contactInfo.email && (
                  <ContactCard
                    icon={Mail}
                    title="E-posta"
                    content={contactInfo.email}
                    href={`mailto:${contactInfo.email}`}
                  />
                )}
                <ContactCard
                  icon={MapPin}
                  title="Adres"
                  content={contactInfo.address}
                />
                <ContactCard
                  icon={Clock}
                  title="Çalışma Saatleri"
                  content={
                    <>
                      <span className="block">
                        Hafta içi: {contactInfo.workingHours.weekdays}
                      </span>
                      <span className="block">
                        Hafta sonu: {contactInfo.workingHours.weekend}
                      </span>
                      <span className="block text-primary font-semibold">
                        {contactInfo.workingHours.emergency}
                      </span>
                    </>
                  }
                />
              </div>

              {/* Emergency Banner */}
              <div className="p-6 bg-emergency/10 border border-emergency/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emergency rounded-xl flex items-center justify-center">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Acil Durumlarda
                    </div>
                    <a
                      href={`tel:${contactInfo.emergency}`}
                      className="font-bold text-2xl text-emergency hover:opacity-80 transition-opacity"
                    >
                      {contactInfo.emergency}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl border border-border">
              <h2 className="heading-3 mb-6">Randevu Formu</h2>

              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">
                    Talebiniz Alındı
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <Button onClick={() => setFormStatus("idle")}>
                    Yeni Talep Oluştur
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Telefon numaranız"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="appointmentType"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Randevu Türü
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Randevu türü seçiniz</option>
                        <option value="on-gorusme">Ön Görüşme</option>
                        <option value="muayene">Muayene</option>
                        <option value="kontrol">Kontrol</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Bölüm
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Bölüm seçiniz</option>
                        {allMedicalUnits.map((unit) => (
                          <option key={unit.id} value={unit.id}>
                            {unit.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      "Gönderiliyor..."
                    ) : (
                      <>
                        Gönder
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.2!2d${contactInfo.location.lng}!3d${contactInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEyJzA0LjYiTiAzM8KwMTknNDcuMyJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Etik Hastanesi Konum"
        />
      </section>
    </Layout>
  )
}

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: React.ReactNode
  href?: string
}

function ContactCard({ icon: Icon, title, content, href }: ContactCardProps) {
  const Wrapper = href ? "a" : "div"
  const wrapperProps = href
    ? { href, className: "block hover:border-primary transition-colors" }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-start gap-4 p-4 bg-secondary/50 rounded-xl ${
        href ? "hover:bg-secondary transition-colors cursor-pointer" : ""
      }`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground mb-1">{title}</div>
        <div className="font-medium text-foreground">{content}</div>
      </div>
    </Wrapper>
  )
}
