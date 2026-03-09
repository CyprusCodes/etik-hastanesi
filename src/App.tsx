import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


// Pages
import Index from "@/pages/Index"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import MedicalUnitBranch from "@/pages/MedicalUnitBranch"
import MedicalUnits from "@/pages/MedicalUnits"
import MedicalUnitCategory from "@/pages/MedicalUnitCategory"


// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hakkimizda" element={<About />} />

        {/* İstersen /hizmetler yerine direkt tıbbi birimler açsın */}
        <Route path="/hizmetler" element={<MedicalUnits />} />

        <Route path="/iletisim" element={<Contact />} />

        {/* ✅ Tıbbi birimler route'ları */}
        <Route path="/tibbi-birimler" element={<MedicalUnits />} />
        <Route path="/tibbi-birimler/:category" element={<MedicalUnitCategory />} />
        <Route path="/tibbi-birimler/:category/:branch" element={<MedicalUnitBranch />}
/>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
