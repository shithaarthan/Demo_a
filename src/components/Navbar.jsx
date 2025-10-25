import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'NRI', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Contact', href: '#' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }

  const navbarVariants = {
    transparent: { backgroundColor: "rgba(23, 23, 23, 0.5)", backdropFilter: "blur(8px)" },
    scrolled: { backgroundColor: "rgba(23, 23, 23, 0.9)", backdropFilter: "blur(12px)" }
  }

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={isScrolled ? "scrolled" : "transparent"}
        initial="transparent"
        className="fixed top-0 left-0 right-0 z-50 border-b border-brand-gold/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img
                src="/images/logo.svg"
                alt="Adissia Developers"
                className="h-14 w-auto"
              />
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brand-light hover:text-brand-gold px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button className="btn-primary-gold">
                Enquire Now
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-brand-light hover:text-brand-gold focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/60"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 w-80 bg-brand-dark shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-brand-gold/20">
                <img src="/images/logo.svg" alt="Adissia Developers" className="h-12 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-brand-light hover:text-brand-gold"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="py-6 px-6 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-brand-light hover:text-brand-gold py-3 px-4 rounded-lg transition-colors duration-200 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-brand-gold/20">
                  <button className="btn-primary-gold w-full">
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20"></div>
    </>
  )
}

export default Navbar
