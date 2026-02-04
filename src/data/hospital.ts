import {
  Stethoscope,
  Baby,
  Heart,
  Sparkles,
  Microscope,
  Syringe,
  Phone,
  Clock,
  MapPin,
  Mail,
  type LucideIcon,
} from "lucide-react"

export interface Department {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image?: string
}

export interface ContactInfo {
  phone: string
  phone2?: string
  emergency: string
  email?: string
  address: string
  workingHours: {
    weekdays: string
    weekend: string
    emergency: string
  }
  location: {
    lat: number
    lng: number
  }
}

export const hospitalInfo = {
  name: "Etik Hastanesi",
  tagline: "Lefkoşa'nın İlk Özel Hastanesi",
  description:
    "2000 yılından bu yana Lefkoşa'da sağlık hizmeti veren Etik Hastanesi, modern tıbbi teknoloji ve uzman kadrosuyla 7/24 yanınızda.",
  foundedYear: 2000,
  logo: "/logo.svg",
}

export const contactInfo: ContactInfo = {
  phone: "+90 392 223 4694",
  phone2: "+90 533 885 9191",
  emergency: "1141",
  email: "info@etikhastanesi.com",
  address: "Dr. Remzi Gönenç Sokak No:5, 99010 Ortaköy, Lefkoşa, Kuzey Kıbrıs",
  workingHours: {
    weekdays: "08:00 - 20:00",
    weekend: "09:00 - 18:00",
    emergency: "7/24 Acil Servis",
  },
  location: {
    lat: 35.20128,
    lng: 33.329807,
  },
}

export const departments: Department[] = [
  {
    id: "dahiliye",
    title: "Dahiliye",
    description:
      "Yetişkinlerde genel sağlık sorunlarının tanı ve tedavisi için iç hastalıkları uzmanlarımız hizmetinizde.",
    icon: Stethoscope,
  },
  {
    id: "pediatri",
    title: "Çocuk Sağlığı ve Hastalıkları",
    description:
      "Bebeklerden ergenlere kadar tüm çocuklarımızın sağlık takibi ve tedavisi için uzman pediatristlerimiz.",
    icon: Baby,
  },
  {
    id: "kadin-dogum",
    title: "Kadın Hastalıkları ve Doğum",
    description:
      "Kadın sağlığının her döneminde, gebelik takibinden jinekolojik muayenelere kadar kapsamlı hizmet.",
    icon: Heart,
  },
  {
    id: "dermatoloji",
    title: "Dermatoloji",
    description:
      "Cilt, saç, tırnak hastalıkları ve estetik dermatoloji uygulamaları için uzman hekimlerimiz.",
    icon: Sparkles,
  },
  {
    id: "laboratuvar",
    title: "Tıbbi Laboratuvar",
    description:
      "En güncel cihazlarla donatılmış laboratuvarımızda hızlı ve güvenilir test sonuçları.",
    icon: Microscope,
  },
  {
    id: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    description:
      "Son teknoloji lazer cihazlarımızla güvenli ve etkili kalıcı tüy alma hizmeti.",
    icon: Syringe,
  },
]

export const features = [
  {
    title: "7/24 Acil Servis",
    description: "Acil sağlık ihtiyaçlarınız için günün her saati hizmetinizdeyiz.",
    icon: Clock,
  },
  {
    title: "Uzman Kadro",
    description: "Alanında deneyimli doktorlar ve sağlık profesyonelleri.",
    icon: Stethoscope,
  },
  {
    title: "Modern Teknoloji",
    description: "En son tıbbi cihazlar ve tedavi yöntemleriyle hizmet.",
    icon: Microscope,
  },
  {
    title: "Kolay Ulaşım",
    description: "Lefkoşa merkezinde, kolay ulaşılabilir konumda.",
    icon: MapPin,
  },
]

export const stats = [
  { value: "24+", label: "Yıllık Deneyim" },
  { value: "50K+", label: "Mutlu Hasta" },
  { value: "20+", label: "Uzman Doktor" },
  { value: "7/24", label: "Acil Servis" },
]

export const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
]

export { Phone, Clock, MapPin, Mail }
