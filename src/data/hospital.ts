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
  HeartPulse,
  Layers,
  HandHeart,
  type LucideIcon,
} from "lucide-react"

const base = import.meta.env.BASE_URL
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
  hrEmail?: string
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
    "1999 yılından bu yana Lefkoşa'da sağlık hizmeti veren Etik Hastanesi, modern tıbbi teknoloji ve uzman kadrosuyla 7/24 yanınızda.",
  foundedYear: 2000,
  logo: "/logo.svg",
}

export const contactInfo: ContactInfo = {
  phone: "+90 392 223 4694",
  phone2: "+90 533 885 9191",
  emergency: "1141",
  email: "info@etikhastanesi.com",
  hrEmail: "info@etikhastanesi.xyz",
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
    titleKey: "hospital:features.emergency.title",
    descriptionKey: "hospital:features.emergency.description",
    icon: Clock,
  },
  {
    titleKey: "hospital:features.expertTeam.title",
    descriptionKey: "hospital:features.expertTeam.description",
    icon: Stethoscope,
  },
  {
    titleKey: "hospital:features.technology.title",
    descriptionKey: "hospital:features.technology.description",
    icon: Microscope,
  },
  {
    titleKey: "hospital:features.access.title",
    descriptionKey: "hospital:features.access.description",
    icon: MapPin,
  },
]

export const stats = [
  { value: "26+", labelKey: "hospital:stats.experience" },
  { value: "50K+", labelKey: "hospital:stats.happyPatients" },
  { value: "20+", labelKey: "hospital:stats.specialistDoctors" },
  { value: "7/24", labelKey: "hospital:stats.emergencyService" },
]

export const navLinks = [
  { labelKey: "common:nav.home", href: "/" },
  { labelKey: "common:nav.about", href: "/hakkimizda" },
  { labelKey: "common:nav.services", href: "/tibbi-birimler" },
  { labelKey: "common:nav.doctors", href: "/doktorlarimiz" },
  { labelKey: "common:nav.blog", href: "/blog" },
  { labelKey: "common:nav.contact", href: "/iletisim" },
]

export { Phone, Clock, MapPin, Mail }

export const medicalUnitCategories: MedicalUnitCategory[] = [
  {
    id: "cerrahi",
    titleKey: "hospital:medicalUnitsData.categories.cerrahi.title",
    descriptionKey: "hospital:medicalUnitsData.categories.cerrahi.description",
    longDescriptionKeys: [
      "hospital:medicalUnitsData.categories.cerrahi.longDescription.0",
    ],
    bulletsKeys: [
      "hospital:medicalUnitsData.categories.cerrahi.bullets.0",
      "hospital:medicalUnitsData.categories.cerrahi.bullets.1",
      "hospital:medicalUnitsData.categories.cerrahi.bullets.2",
    ],
    image: `${base}/images/branches/genel-cerrahi.jpg`,
    icon: Stethoscope,
    items: [
      {
        id: "estetik-plastik-rekonstruktif-cerrahi",
        titleKey:
          "hospital:medicalUnitsData.branches.estetikPlastikRekonstruktifCerrahi.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.estetikPlastikRekonstruktifCerrahi.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.estetikPlastikRekonstruktifCerrahi.longDescription.0",
          "hospital:medicalUnitsData.branches.estetikPlastikRekonstruktifCerrahi.longDescription.1",
          "hospital:medicalUnitsData.branches.estetikPlastikRekonstruktifCerrahi.longDescription.2",
        ],
        image: `${base}/images/services/estetik.jpg`,
      },
      {
        id: "genel-cerrahi",
        titleKey: "hospital:medicalUnitsData.branches.genelCerrahi.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.genelCerrahi.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.genelCerrahi.longDescription.0",
          "hospital:medicalUnitsData.branches.genelCerrahi.longDescription.1",
          "hospital:medicalUnitsData.branches.genelCerrahi.longDescription.2",
          "hospital:medicalUnitsData.branches.genelCerrahi.longDescription.3",
        ],
        image: `${base}/images/services/genel.png`,
      },
      {
        id: "goz-hastaliklari",
        titleKey: "hospital:medicalUnitsData.branches.gozHastaliklari.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.gozHastaliklari.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.gozHastaliklari.longDescription.0",
          "hospital:medicalUnitsData.branches.gozHastaliklari.longDescription.1",
          "hospital:medicalUnitsData.branches.gozHastaliklari.longDescription.2",
          "hospital:medicalUnitsData.branches.gozHastaliklari.longDescription.3",
        ],
        image: `${base}/images/services/goz-hastaliklari.jpg`,
      },
      {
        id: "gogus-hastaliklari",
        titleKey: "hospital:medicalUnitsData.branches.gogusHastaliklari.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.gogusHastaliklari.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.gogusHastaliklari.longDescription.0",
          "hospital:medicalUnitsData.branches.gogusHastaliklari.longDescription.1",
          "hospital:medicalUnitsData.branches.gogusHastaliklari.longDescription.2",
          "hospital:medicalUnitsData.branches.gogusHastaliklari.longDescription.3",
          "hospital:medicalUnitsData.branches.gogusHastaliklari.longDescription.4",
        ],
        image: `${base}/images/services/gogus-hastaliklari.jpg`,
      },
      {
        id: "ortopedi-ve-travmatoloji",
        titleKey:
          "hospital:medicalUnitsData.branches.ortopediVeTravmatoloji.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.ortopediVeTravmatoloji.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.ortopediVeTravmatoloji.longDescription.0",
        ],
        image: `${base}/images/services/ortopedi.jpg`,
      },
      {
        id: "kadin-hastaliklari-dogum",
        titleKey:
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.longDescription.0",
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.longDescription.1",
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.longDescription.2",
          "hospital:medicalUnitsData.branches.kadinHastaliklariDogum.longDescription.3",
        ],
        image: `${base}/images/services/kadin.jpg`,
      },
      {
        id: "kardiyoloji",
        titleKey: "hospital:medicalUnitsData.branches.kardiyoloji.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.kardiyoloji.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.kardiyoloji.longDescription.0",
          "hospital:medicalUnitsData.branches.kardiyoloji.longDescription.1",
          "hospital:medicalUnitsData.branches.kardiyoloji.longDescription.2",
          "hospital:medicalUnitsData.branches.kardiyoloji.longDescription.3",
          "hospital:medicalUnitsData.branches.kardiyoloji.longDescription.4",
        ],
        image: `${base}/images/services/kardiyoloji.jpg`,
      },
      {
        id: "noroloji",
        titleKey: "hospital:medicalUnitsData.branches.noroloji.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.noroloji.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.noroloji.longDescription.0",
          "hospital:medicalUnitsData.branches.noroloji.longDescription.1",
          "hospital:medicalUnitsData.branches.noroloji.longDescription.2",
          "hospital:medicalUnitsData.branches.noroloji.longDescription.3",
        ],
        image: `${base}/images/services/noroloji.jpg`,
      },
      {
        id: "uroloji",
        titleKey: "hospital:medicalUnitsData.branches.uroloji.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.uroloji.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.uroloji.longDescription.0",
          "hospital:medicalUnitsData.branches.uroloji.longDescription.1",
          "hospital:medicalUnitsData.branches.uroloji.longDescription.2",
          "hospital:medicalUnitsData.branches.uroloji.longDescription.3",
        ],
        image: `${base}/images/services/urology.jpg`,
      },
    ],
  },

  {
    id: "dahili",
    titleKey: "hospital:medicalUnitsData.categories.dahili.title",
    descriptionKey: "hospital:medicalUnitsData.categories.dahili.description",
    longDescriptionKeys: [
      "hospital:medicalUnitsData.categories.dahili.longDescription.0",
    ],
    bulletsKeys: [
      "hospital:medicalUnitsData.categories.dahili.bullets.0",
      "hospital:medicalUnitsData.categories.dahili.bullets.1",
      "hospital:medicalUnitsData.categories.dahili.bullets.2",
    ],
    image: `${base}/images/branches/genel-cerrahi.jpg`,
    icon: HeartPulse,
    items: [
      {
        id: "dahiliye",
        titleKey: "hospital:medicalUnitsData.branches.dahiliye.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.dahiliye.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.dahiliye.longDescription.0",
          "hospital:medicalUnitsData.branches.dahiliye.longDescription.1",
          "hospital:medicalUnitsData.branches.dahiliye.longDescription.2",
          "hospital:medicalUnitsData.branches.dahiliye.longDescription.3",
        ],
        image: `${base}/images/services/dahiliye.webp`,
      },
      {
        id: "deri-zuhrevi-hastaliklar",
        titleKey:
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.longDescription.0",
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.longDescription.1",
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.longDescription.2",
          "hospital:medicalUnitsData.branches.deriZuhreviHastaliklar.longDescription.3",
        ],
        image: `${base}/images/services/deri.jpg`,
      },
      {
        id: "kulak-burun-bogaz",
        titleKey: "hospital:medicalUnitsData.branches.kulakBurunBogaz.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.kulakBurunBogaz.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.kulakBurunBogaz.longDescription.0",
          "hospital:medicalUnitsData.branches.kulakBurunBogaz.longDescription.1",
          "hospital:medicalUnitsData.branches.kulakBurunBogaz.longDescription.2",
          "hospital:medicalUnitsData.branches.kulakBurunBogaz.longDescription.3",
        ],
        image: `${base}/images/services/kulak-burun-bogaz.jpg`,
      },
      {
        id: "cocuk-sagligi-hastaliklari",
        titleKey:
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.longDescription.0",
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.longDescription.1",
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.longDescription.2",
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.longDescription.3",
          "hospital:medicalUnitsData.branches.cocukSagligiHastaliklari.longDescription.4",
        ],
        image: `${base}/images/services/cocuk-sagligi.jpg`,
      },
    ],
  },

  {
    id: "diger",
    titleKey: "hospital:medicalUnitsData.categories.diger.title",
    descriptionKey: "hospital:medicalUnitsData.categories.diger.description",
    longDescriptionKeys: [
      "hospital:medicalUnitsData.categories.diger.longDescription.0",
    ],
    bulletsKeys: [
      "hospital:medicalUnitsData.categories.diger.bullets.0",
      "hospital:medicalUnitsData.categories.diger.bullets.1",
      "hospital:medicalUnitsData.categories.diger.bullets.2",
    ],
    image: `${base}/images/branches/genel-cerrahi.jpg`,
    icon: Layers,
    items: [
      {
        id: "agiz-dis-sagligi",
        titleKey: "hospital:medicalUnitsData.branches.agizDisSagligi.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.agizDisSagligi.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.agizDisSagligi.longDescription.0",
          "hospital:medicalUnitsData.branches.agizDisSagligi.longDescription.1",
          "hospital:medicalUnitsData.branches.agizDisSagligi.longDescription.2",
          "hospital:medicalUnitsData.branches.agizDisSagligi.longDescription.3",
        ],
        image: `${base}/images/services/dental.jpg`,
      },
      {
        id: "radyoloji",
        titleKey: "hospital:medicalUnitsData.branches.radyoloji.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.radyoloji.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.radyoloji.longDescription.0",
          "hospital:medicalUnitsData.branches.radyoloji.longDescription.1",
          "hospital:medicalUnitsData.branches.radyoloji.longDescription.2",
        ],
        image: `${base}/images/services/radyoloji.jpg`,
      },
      {
        id: "lazer-epilasyon",
        titleKey: "hospital:medicalUnitsData.branches.lazerEpilasyon.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.lazerEpilasyon.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.lazerEpilasyon.longDescription.0",
          "hospital:medicalUnitsData.branches.lazerEpilasyon.longDescription.1",
          "hospital:medicalUnitsData.branches.lazerEpilasyon.longDescription.2",
          "hospital:medicalUnitsData.branches.lazerEpilasyon.longDescription.3",
        ],
        image: `${base}/images/services/laser.jpg`,
      },
    ],
  },

  {
    id: "paramedikal",
    titleKey: "hospital:medicalUnitsData.categories.paramedikal.title",
    descriptionKey:
      "hospital:medicalUnitsData.categories.paramedikal.description",
    longDescriptionKeys: [
      "hospital:medicalUnitsData.categories.paramedikal.longDescription.0",
    ],
    bulletsKeys: [
      "hospital:medicalUnitsData.categories.paramedikal.bullets.0",
      "hospital:medicalUnitsData.categories.paramedikal.bullets.1",
      "hospital:medicalUnitsData.categories.paramedikal.bullets.2",
    ],
    image: `${base}/images/branches/genel-cerrahi.jpg`,
    icon: HandHeart,
    items: [
      {
        id: "psikiyatri",
        titleKey: "hospital:medicalUnitsData.branches.psikiyatri.title",
        descriptionKey:
          "hospital:medicalUnitsData.branches.psikiyatri.description",
        longDescriptionKeys: [
          "hospital:medicalUnitsData.branches.psikiyatri.longDescription.0",
          "hospital:medicalUnitsData.branches.psikiyatri.longDescription.1",
          "hospital:medicalUnitsData.branches.psikiyatri.longDescription.2",
          "hospital:medicalUnitsData.branches.psikiyatri.longDescription.3",
          "hospital:medicalUnitsData.branches.psikiyatri.longDescription.4",
        ],
        image: `${base}/images/services/p.jpg`,
      },
    ],
  },
] as const

export type MedicalUnitBranch = {
  id: string
  titleKey: string
  descriptionKey: string
  image?: string
  longDescriptionKeys?: string[]
  bulletsKeys?: string[]
}

export type MedicalUnitCategory = {
  id: string
  titleKey: string
  descriptionKey: string
  longDescriptionKeys?: string[]
  bulletsKeys?: string[]
  icon: any
  image?: string
  items: MedicalUnitBranch[]
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Op. Dr. Hüseyin Kalgay",
    titleKey: "hospital:doctorTitles.orthopedics",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 1,
  },
  {
    id: "2",
    name: "Op. Dr. Selin Haver",
    titleKey: "hospital:doctorTitles.orthopedics",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 2,
  },
  {
    id: "3",
    name: "Op. Dr. Mehmet Arıkbuka",
    titleKey: "hospital:doctorTitles.cardiovascularSurgery",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 3,
  },
  {
    id: "4",
    name: "Dr. Kamuran Arıkbuka",
    titleKey: "hospital:doctorTitles.pediatrics",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 1,
  },
  {
    id: "5",
    name: "Dr. Huriye Alasya",
    titleKey: "hospital:doctorTitles.internalMedicine",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 2,
  },
  {
    id: "6",
    name: "Op. Dr. Ceyhun Erdoğan",
    titleKey: "hospital:doctorTitles.generalSurgery",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 4,
  },
  {
    id: "7",
    name: "Dr. Zafer Erdoğmuş",
    titleKey: "hospital:doctorTitles.microbiologyInfectiousDiseases",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 3,
  },
  {
    id: "8",
    name: "Dr. Burak Bahçıvan",
    titleKey: "hospital:doctorTitles.radiology",
    departmentKey: "hospital:doctorDepartments.other",
    order: 1,
  },
  {
    id: "9",
    name: "Dr. Kemal Tavukçu",
    titleKey: "hospital:doctorTitles.obstetricsGynecology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 5,
  },
  {
    id: "10",
    name: "Dr. Sıla Usar",
    titleKey: "hospital:doctorTitles.neurology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 4,
  },
  {
    id: "11",
    name: "Dr. Ferda Selçuk",
    titleKey: "hospital:doctorTitles.neurology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 5,
  },
  {
    id: "12",
    name: "Dr. Mehmet Ali Yeşilada",
    titleKey: "hospital:doctorTitles.ent",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 6,
  },
  {
    id: "13",
    name: "Dr. Fatma Deniz",
    titleKey: "hospital:doctorTitles.dermatologyVenereal",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 6,
  },
  {
    id: "14",
    name: "Dr. Refika Hüral",
    titleKey: "hospital:doctorTitles.cardiology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 7,
  },
  {
    id: "15",
    name: "Dr. Adil Öyyılkan",
    titleKey: "hospital:doctorTitles.ophthalmology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 7,
  },
  {
    id: "16",
    name: "Dr. Nafiye Direktör",
    titleKey: "hospital:doctorTitles.internalMedicine",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 8,
  },
  {
    id: "17",
    name: "Dr. Güven Erkal",
    titleKey: "hospital:doctorTitles.internalMedicine",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 9,
  },
  {
    id: "18",
    name: "Dr. İsmet Başar",
    titleKey: "hospital:doctorTitles.urology",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 8,
  },
  {
    id: "19",
    name: "Dr. Pınar Özbilgehan",
    titleKey: "hospital:doctorTitles.plasticReconstructiveSurgery",
    departmentKey: "hospital:doctorDepartments.surgical",
    order: 9,
  },
  {
    id: "20",
    name: "Dr. Mehmet Salih Bağzıbağlı",
    titleKey: "hospital:doctorTitles.pediatrics",
    departmentKey: "hospital:doctorDepartments.internal",
    order: 10,
  },
  {
    id: "21",
    name: "Ulus Kasap",
    titleKey: "hospital:doctorTitles.biochemist",
    departmentKey: "hospital:doctorDepartments.other",
    order: 2,
  },
]
export const doctorsPreview = [
  doctors[1],
  doctors[2],
  doctors[3],
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bahar Demir",
    roleKey: "hospital:testimonialsData.roles.patient",
    textKey: "hospital:testimonialsData.items.1.text",
    image: `${base}/images/testimonials/bahar-demir.png`,
  },
  {
    id: "2",
    name: "Mustafa Ok",
    roleKey: "hospital:testimonialsData.roles.patient",
    textKey: "hospital:testimonialsData.items.2.text",
    image: `${base}/images/testimonials/mustafa-ok.png`,
  },
  {
    id: "3",
    name: "Neslihan Sert",
    roleKey: "hospital:testimonialsData.roles.patient",
    textKey: "hospital:testimonialsData.items.3.text",
    image: `${base}/images/testimonials/neslihan-sert.png`,
  },
  {
    id: "4",
    name: "Ömer Küçük",
    roleKey: "hospital:testimonialsData.roles.patient",
    textKey: "hospital:testimonialsData.items.4.text",
    image: `${base}/images/testimonials/omer-kucuk.png`,
  },
]
export interface Doctor {
  id: string
  name: string
  titleKey: string
  departmentKey: string
  order: number
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  roleKey: string
  textKey: string
  image?: string
}
