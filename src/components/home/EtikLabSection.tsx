import { FlaskConical, FileText, ArrowRight } from "lucide-react"

const etikLabUrl = "https://etiklab.net/"
const testResultsUrl = "http://78.135.60.128:8080/Bireysel.html"

export function EtikLabSection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="container-narrow">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-white to-accent/5 p-6 shadow-sm lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Etik Laboratuvarı
              </span>

              <h2 className="mt-2 text-2xl font-semibold text-foreground lg:text-3xl">
                Laboratuvar Hizmetleri ve Test Sonuçları
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 lg:text-base">
                Etik Lab üzerinden laboratuvar hizmetlerine ulaşabilir, test sonuçları
                sayfasından sonuçlarınıza kolayca erişebilirsiniz.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={etikLabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <FlaskConical className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Etik Lab</div>
                    <div className="text-xs text-gray-700">
                      Laboratuvar sayfasına git
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={testResultsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Test Sonuçları</div>
                    <div className="text-xs text-gray-700">
                      Sonuç sorgulama sayfasına git
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
