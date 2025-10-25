import { motion } from 'framer-motion'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import AboutUs from './components/AboutUs' // Import the new AboutUs component
import Properties from './components/Properties'
import Founder from './components/Founder'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Presence from './components/Presence'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vw"
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: "100vw"
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Hero />
        <TrustBar />
        <AboutUs /> {/* Add the AboutUs component here */}
        <Properties />
        <Founder />
        <Features />
        <Testimonials />
        <Presence />
        <CtaSection />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
