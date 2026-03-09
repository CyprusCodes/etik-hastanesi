import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { medicalUnitCategories } from "@/data/hospital"

export function CategoryCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {medicalUnitCategories.map((cat, index) => {
        const Icon = cat.icon
        return (
          <Link
            key={cat.id}
            to={`/tibbi-birimler/${cat.id}`}
            className="group relative bg-card rounded-2xl border border-border p-6 card-hover"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
            </div>

            <h3 className="heading-3 text-lg mb-2 group-hover:text-primary transition-colors">
              {cat.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-3">
              {cat.description}
            </p>

            <div className="mt-4 flex items-center text-primary text-sm font-medium">
              <span>Detaylar</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
