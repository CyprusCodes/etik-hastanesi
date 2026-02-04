import { Layout } from "@/components/layout/Layout"
import {
  HeroSection,
  ServicesSection,
  FeaturesSection,
  AboutSection,
  ContactSection,
} from "@/components/home"

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </Layout>
  )
}
