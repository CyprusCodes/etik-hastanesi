import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Pages
import Index from "@/pages/Index"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"

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
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} />
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
