import { features } from "@/data/hospital"

export function FeaturesSection() {
  return (
    <section className="section-padding bg-secondary from-white to-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Neden Biz?
          </span>
          <h2 className="heading-2 mt-2 mb-4">
            Etik Hastanesi'ni Tercih Etmeniz İçin Nedenler
          </h2>
          <p className="body-large">
            26 yılı aşkın deneyimimiz ve hasta odaklı yaklaşımımızla fark yaratıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group text-center p-6 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
