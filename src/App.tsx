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
import Doctors from "@/pages/Doctors"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"


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
        <Route path="/hizmetler" element={<MedicalUnits />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/tibbi-birimler" element={<MedicalUnits />} />
        <Route path="/tibbi-birimler/:category" element={<MedicalUnitCategory />} />
        <Route path="/tibbi-birimler/:category/:branch" element={<MedicalUnitBranch />}/>
        <Route path="/doktorlarimiz" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
