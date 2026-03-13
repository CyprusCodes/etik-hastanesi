import { testimonials } from "@/data/hospital"

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Left */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hasta Yorumları
            </span>

            <h2 className="heading-2 mt-3 mb-4">Biz Mutluyuz</h2>

            <p className="text-muted-foreground leading-8">
              Hastalarımızın memnuniyeti, sunduğumuz sağlık hizmetinin en önemli
              göstergelerinden biridir. Uzman kadromuz, hasta odaklı
              yaklaşımımız ve güven veren hizmet anlayışımız ile her zaman en
              iyisini sunmayı hedefliyoruz.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                50+
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Uzman Personel
                </div>
                <div className="text-sm text-muted-foreground">
                  Güvenle tercih edilen sağlık hizmeti
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {item.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <div className="text-sm text-muted-foreground">
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
      </div>
    </section>
  )
}
