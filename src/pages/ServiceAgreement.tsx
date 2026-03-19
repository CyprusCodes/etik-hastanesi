import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"

export default function ServiceAgreement() {
  return (
    <>
  <Helmet>
    <title>Hizmet Sözleşmesi | Etik Hastanesi</title>
    <meta
      name="description"
      content="Etik Hastanesi hizmet sözleşmesi ve genel hizmet şartlarını inceleyin."
    />
  </Helmet>
    <Layout>
      <section className="bg-gradient-to-r from-primary to-accent py-14 lg:py-16 text-white">
        <div className="container-narrow text-center">
          <h1 className="heading-2 text-white">Hizmet Sözleşmesi</h1>
          <p className="mt-3 text-white/90 text-sm">
            Etik Hastanesi Kıbrıs hizmet şartları ve genel sözleşme hükümleri
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 md:px-10 py-8 border-b border-border bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground">
                ETİK HASTANESİ KIBRIS HİZMET SÖZLEŞMESİ
              </h2>
            </div>

            <div className="px-6 md:px-10 py-8 space-y-8 text-muted-foreground leading-8">
              <p>
                Bu Hizmet Sözleşmesi ("Sözleşme"), taraflar arasında
                [Sözleşmenin Başlangıç Tarihi] tarihinde yapılmıştır ve
                aşağıdaki gibi tanımlanmıştır.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Taraflar
                </h3>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                    <p className="font-medium text-foreground mb-2">
                      A. Hizmet Sağlayıcı ("Hastane")
                    </p>
                    <p>Etik Hastanesi Kıbrıs</p>
                    <p>Adres: [Hastanenin Tam Adresi]</p>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                    <p className="font-medium text-foreground mb-2">
                      B. Hasta ("Hasta")
                    </p>
                    <p>[Hasta'nın Tam Adı]</p>
                    <p>Adres: [Hasta'nın Tam Adresi]</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2. Hizmetler
                </h3>
                <p>
                  Hastane, Hasta'ya sağlık hizmetleri sunmayı kabul eder. Bu
                  hizmetler, ancak bunlarla sınırlı olmamak üzere, muayene,
                  teşhis, tedavi ve diğer sağlık hizmetlerini içerebilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  3. Hizmetin Şartları
                </h3>
                <p>
                  Hastane, tıbbi etik ve standartlara uygun olarak en yüksek
                  kalitede hizmet sağlamayı taahhüt eder. Hasta, Hastane
                  tarafından önerilen tıbbi prosedürlere ve tedavilere
                  uyacağını kabul eder.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  4. Ücretlendirme ve Ödeme
                </h3>
                <p>
                  Hizmetlerin ücretlendirilmesi, Hastane'nin geçerli fiyat
                  listesine ve Hasta'nın alacağı spesifik hizmetlere göre
                  belirlenecektir. Hasta, hizmetler için Hastane tarafından
                  belirlenen ücretleri ödemeyi kabul eder.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  5. Gizlilik
                </h3>
                <p>
                  Hastane, Hasta'nın kişisel ve tıbbi bilgilerini gizli tutma
                  konusunda yasalara uygun hareket edecek ve bu bilgileri
                  yalnızca yasal olarak gerektiğinde ve Hasta'nın izniyle
                  paylaşacaktır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  6. Sorumluluk
                </h3>
                <p>
                  Hastane, hizmetlerini sunarken gereken özeni gösterecektir.
                  Ancak, Hastane, tedavinin sonuçlarına dair herhangi bir
                  garanti vermez.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  7. Anlaşmazlıkların Çözümü
                </h3>
                <p>
                  Taraflar arasındaki herhangi bir anlaşmazlık, öncelikle iyi
                  niyetle çözülmeye çalışılacak; aksi takdirde, [Yargı Bölgesi]
                  yasalarına göre çözülecektir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  8. Sözleşmenin Süresi ve Feshi
                </h3>
                <p>
                  Bu Sözleşme, herhangi bir taraf tarafından yazılı olarak
                  feshedilene kadar geçerlidir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  9. Diğer Şartlar
                </h3>
                <p>
                  Bu Sözleşme, taraflar arasındaki tam anlaşmayı oluşturur ve
                  herhangi bir önceki anlaşmayı iptal eder.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  İmzalar
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-border p-5">
                    <p className="font-medium text-foreground">
                      Hastane Yetkilisi
                    </p>
                    <p className="mt-6">___________________</p>
                    <p className="mt-2">Tarih: ___________</p>
                  </div>

                  <div className="rounded-2xl border border-border p-5">
                    <p className="font-medium text-foreground">Hasta</p>
                    <p className="mt-6">___________________</p>
                    <p className="mt-2">Tarih: ___________</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
