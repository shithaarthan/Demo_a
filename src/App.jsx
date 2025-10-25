import { motion } from 'framer-motion'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Properties from './components/Properties'
import Founder from './components/Founder'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Presence from './components/Presence'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Properties />
      <Founder />
      <Features />
      <Testimonials />
      <Presence />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
