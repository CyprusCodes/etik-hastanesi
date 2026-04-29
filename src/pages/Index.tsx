import { Layout } from "@/components/layout/Layout"
import { Helmet } from "react-helmet-async"
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ServicesSection,
  DoctorsSection,
  BlogSection,
  TestimonialsSection,
  ContactSection,
  EtikLabSection,
  SocialMediaSection,
} from "@/components/home"

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Etik Hastanesi | Lefkoşa'nın İlk Özel Hastanesi</title>
        <meta
          name="description"
          content="Etik Hastanesi Lefkoşa'da uzman doktor kadrosu, modern tıbbi teknoloji ve 7/24 sağlık hizmeti sunar."
        />
      </Helmet>
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <DoctorsSection />
      <EtikLabSection />
      <BlogSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <ContactSection />
    </Layout>
    </>
  )
}
