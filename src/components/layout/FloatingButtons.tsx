import { Phone, MessageCircle } from "lucide-react"
import { contactInfo } from "@/data/hospital"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.phone2?.replace(/\s/g, "").replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark hover:scale-110 transition-all duration-200"
        aria-label="Telefon ile ara"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
