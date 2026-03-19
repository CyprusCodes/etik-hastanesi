import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, lazy, Suspense } from "react"
import { HelmetProvider } from "react-helmet-async"

// Lazy loaded pages
const Index = lazy(() => import("@/pages/Index"))
const About = lazy(() => import("@/pages/About"))
const Contact = lazy(() => import("@/pages/Contact"))
const MedicalUnitBranch = lazy(() => import("@/pages/MedicalUnitBranch"))
const MedicalUnits = lazy(() => import("@/pages/MedicalUnits"))
const MedicalUnitCategory = lazy(() => import("@/pages/MedicalUnitCategory"))
const Doctors = lazy(() => import("@/pages/Doctors"))
const Blog = lazy(() => import("@/pages/Blog"))
const BlogPost = lazy(() => import("@/pages/BlogPost"))
const ServiceAgreement = lazy(() => import("@/pages/ServiceAgreement"))
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"))
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/hizmetler" element={<MedicalUnits />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/tibbi-birimler" element={<MedicalUnits />} />
          <Route path="/tibbi-birimler/:category" element={<MedicalUnitCategory />} />
          <Route path="/tibbi-birimler/:category/:branch" element={<MedicalUnitBranch />} />
          <Route path="/doktorlarimiz" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hizmet-sozlesmesi" element={<ServiceAgreement />} />
          <Route path="/cerez-politikasi" element={<CookiePolicy />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </Router>
  </HelmetProvider>
  )
}

export default App
