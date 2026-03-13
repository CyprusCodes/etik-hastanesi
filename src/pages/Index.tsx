import { Layout } from "@/components/layout/Layout"
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ServicesSection,
  DoctorsSection,
  BlogSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/home"

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <DoctorsSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  )
}
