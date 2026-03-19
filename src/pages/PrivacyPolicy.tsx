import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"

export default function PrivacyPolicy() {
  return (
    <>
  <Helmet>
    <title>Gizlilik Politikası | Etik Hastanesi</title>
    <meta
      name="description"
      content="Etik Hastanesi gizlilik politikası ve kişisel verilerin korunmasına ilişkin bilgilere buradan ulaşabilirsiniz."
    />
  </Helmet>
    <Layout>
      <section className="bg-gradient-to-r from-primary to-accent py-14 lg:py-16 text-white">
        <div className="container-narrow text-center">
          <h1 className="heading-2 text-white">Gizlilik Politikası</h1>
          <p className="mt-3 text-white/90 text-sm">
            Etik Hastanesi web sitesi üzerinden toplanan veriler ve gizlilik esasları
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 md:px-10 py-8 border-b border-border bg-primary/5">
              <h2 className="text-2xl font-bold text-foreground">
                Gizlilik Politikası
              </h2>
            </div>

            <div className="px-6 md:px-10 py-8 space-y-8 text-muted-foreground leading-8">
              <p>
                Bu gizlilik politikası, Etik Hastanesi web sitesi üzerinden kişisel bilgilerin
                toplanması, kullanılması ve ifşa edilmesi ile ilgili politikaları
                açıklar. Etik Hastanesi olarak, ziyaretçilerimizin gizliliğine
                saygı duyuyor ve kişisel bilgilerinizi korumak için en yüksek
                standartları uyguluyoruz. Bu politika, web sitemizi kullanan
                herkesin kişisel bilgilerinin nasıl toplandığını, kullanıldığını
                ve korunduğunu anlamalarına yardımcı olmak için tasarlanmıştır.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Kişisel Bilgilerin Toplanması ve Kullanılması
                </h3>
                <p>
                  Etik Hastanesi web sitesini ziyaret ettiğinizde, kullanıcıların
                  tarayıcıları tarafından sağlanan standart bilgiler gibi genel
                  bilgiler otomatik olarak kaydedilebilir. Bu bilgiler, internet
                  protokol (IP) adresleri, tarayıcı türleri, internet servis
                  sağlayıcıları (ISP'ler), çıkış sayfaları, tarih ve saat
                  damgalarını içerebilir. Bu bilgiler, web sitesinin kullanımını
                  analiz etmek, siteyi yönetmek, kullanıcı etkileşimlerini takip
                  etmek ve demografik bilgileri toplamak için kullanılabilir.
                </p>

                <p className="mt-4">
                  Etik Hastanesi web sitesi, kullanıcıların kişisel bilgilerini
                  (ad, e-posta adresi, telefon numarası vb.) sağlamaları için
                  çeşitli formlar sunabilir. Bu bilgiler, randevu taleplerini
                  işlemek, geri bildirim almak, hizmet sunmak veya gerektiğinde
                  kullanıcılarla iletişim kurmak için toplanır. Kişisel bilgiler,
                  yalnızca belirli bir amacın yerine getirilmesi için kullanılacak
                  ve kullanıcıların rızası olmadan üçüncü taraflarla
                  paylaşılmayacaktır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Çerezler (Cookies)
                </h3>
                <p>
                  Etik Hastanesi web sitesi, kullanıcı deneyimini geliştirmek ve
                  siteyi optimize etmek için çerezler kullanabilir. Çerezler,
                  kullanıcı tercihlerini hatırlamak, siteyi ziyaret edenlerin
                  tercihlerini analiz etmek ve ilgi alanlarına göre içerik ve
                  reklamları özelleştirmek için kullanılabilir. Kullanıcılar,
                  tarayıcı ayarlarını değiştirerek çerez kullanımını istedikleri
                  şekilde kontrol edebilir veya reddedebilirler.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Bilgi Paylaşımı ve Üçüncü Taraf Bağlantıları
                </h3>
                <p>
                  Etik Hastanesi, kullanıcıların kişisel bilgilerini üçüncü
                  taraflarla paylaşmaz veya satmaz. Ancak, yasal gereklilikler
                  doğrultusunda veya web sitesinin işletilmesi için hizmet
                  sağlayıcılarına bilgi aktarılabilir. Etik Hastanesi web sitesi,
                  zaman zaman diğer web sitelerine bağlantılar içerebilir. Bu
                  bağlantılar, kullanıcıları diğer web sitelerine yönlendirebilir.
                  Bağlantı verilen diğer web sitelerinin gizlilik uygulamalarından
                  sorumlu değiliz. Diğer web sitelerini ziyaret etmeden önce kendi
                  gizlilik politikalarını incelemenizi öneririz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Güvenlik
                </h3>
                <p>
                  Etik Hastanesi, kullanıcıların kişisel bilgilerini korumak için
                  uygun güvenlik önlemlerini alır. Ancak, internet üzerinden bilgi
                  iletimi veya depolama konusunda tam güvenlik garantisi
                  sağlayamayız. Bilgi aktarımı tamamen kullanıcının kendi
                  riskindedir. Bu nedenle, Etik Hastanesi web sitesini kullanırken
                  kişisel bilgilerinizi korumak için gereken özeni göstermenizi
                  öneririz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gizlilik Politikasının Kabul Edilmesi
                </h3>
                <p>
                  Etik Hastanesi web sitesini kullanarak, bu gizlilik politikasını
                  kabul etmiş sayılırsınız. Politika ile ilgili herhangi bir
                  sorunuz varsa, lütfen bizimle iletişime geçin.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-primary/5 p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Politika Güncellemeleri
                </h3>
                <p>
                  Etik Hastanesi, bu gizlilik politikasını güncellemek veya
                  değiştirmek için zaman zaman revize edebilir. Herhangi bir
                  güncelleme yapıldığında, değişikliklerin yürürlüğe girdiği tarihi
                  güncel gizlilik politikası sayfasında yayınlayarak kullanıcıları
                  bilgilendireceğiz.
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
