import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"

export default function CookiePolicy() {
  return (
    <>
  <Helmet>
    <title>Çerez Politikası | Etik Hastanesi</title>
    <meta
      name="description"
      content="Etik Hastanesi web sitesinde kullanılan çerezler ve çerez yönetimi hakkında bilgi alın."
    />
  </Helmet>
    <Layout>
      <section className="bg-gradient-to-r from-primary to-accent py-14 lg:py-16 text-white">
        <div className="container-narrow text-center">
          <h1 className="heading-2 text-white">Çerez Politikası</h1>
          <p className="mt-3 text-white/90 text-sm">
            Etik Hastanesi web sitesinde kullanılan çerezler hakkında bilgilendirme
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 md:px-10 py-8 border-b border-border bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground">
                Çerez Politikası
              </h2>
            </div>

            <div className="px-6 md:px-10 py-8 space-y-8 text-muted-foreground leading-8">
              <p>
                Bu çerez politikası, Etik Hastanesi web sitesi
                (https://etikhastanesi.xyz) tarafından kullanılan çerezler
                hakkında bilgi vermektedir. Çerezler, web sitesini kullanımınızı
                optimize etmek, performansını artırmak ve kullanıcı deneyimini
                geliştirmek için kullanılan küçük metin dosyalarıdır. Bu politika,
                web sitesini ziyaret eden herkesin çerez kullanımını anlamalarına
                yardımcı olmak için tasarlanmıştır.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Çerez Nedir?
                </h3>
                <p>
                  Çerezler, bir web sitesi tarafından tarayıcınıza veya cihazınıza
                  yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web
                  sitesinin ziyaretçileri hakkında bilgi toplamak ve depolamak için
                  kullanılır. Çerezler, kullanıcı tercihlerini hatırlamak, siteyi
                  analiz etmek, kullanıcı etkileşimlerini izlemek ve ilgi
                  alanlarına göre içerik ve reklamları özelleştirmek için
                  kullanılabilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Çerez Türleri ve Kullanımı
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                    <p className="font-medium text-foreground mb-2">
                      Oturum Çerezleri
                    </p>
                    <p>
                      Oturum çerezleri, bir kullanıcının web sitesini ziyaret ettiği
                      süre boyunca geçerlidir ve tarayıcı kapandığında silinir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                    <p className="font-medium text-foreground mb-2">
                      Kalıcı Çerezler
                    </p>
                    <p>
                      Kalıcı çerezler, belirli bir süre boyunca tarayıcınızda kalır
                      ve tekrar ziyaret ettiğinizde tanımlanmanızı sağlar.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                    <p className="font-medium text-foreground mb-2">
                      Analitik Çerezler
                    </p>
                    <p>
                      Analitik çerezler, web sitesinin kullanımını analiz etmek ve
                      iyileştirmek için kullanılır. Bu çerezler, ziyaretçi sayısını,
                      sayfa görüntülemelerini, trafik kaynaklarını ve diğer
                      istatistikleri izlemek için kullanılabilir.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Çerez Yönetimi
                </h3>
                <p>
                  Çerezleri kabul etmek veya reddetmek konusunda kontrol sizde.
                  Tarayıcınızın ayarlarını değiştirerek çerez kullanımını istediğiniz
                  şekilde yönetebilirsiniz. Ancak, bazı çerezleri devre dışı
                  bırakmanın, web sitesinin bazı fonksiyonlarının düzgün
                  çalışmamasına neden olabileceğini unutmayın.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Politika Güncellemeleri
                </h3>
                <p>
                  Bu çerez politikası, Etik Hastanesi tarafından zaman zaman
                  güncellenebilir veya değiştirilebilir. Herhangi bir güncelleme
                  yapıldığında, değişikliklerin yürürlüğe girdiği tarihi güncel
                  çerez politikası sayfasında yayınlayarak kullanıcıları
                  bilgilendireceğiz.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-primary/5 p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  İletişim
                </h3>
                <p>
                  Herhangi bir sorunuz veya endişeniz varsa, lütfen bizimle
                  iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
