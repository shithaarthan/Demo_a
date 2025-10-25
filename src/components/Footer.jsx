import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.footer
      className="bg-brand-dark text-brand-light py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div variants={footerVariants}>
            <img src="/images/logo.svg" alt="Adissia" className="w-36 mb-6" />
            <div className="space-y-3 text-brand-light/80 text-lg">
              <p className="flex items-center gap-3">
                <Phone size={20} className="text-brand-gold" />
                <span>+91 9159066666</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} className="text-brand-gold" />
                <span>support@adissia.com</span>
              </p>
            </div>
          </motion.div>

          <motion.div variants={footerVariants}>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Pages</h4>
            <ul className="space-y-3 text-brand-light/80 text-lg">
              {['Home', 'About Us', 'Projects', 'NRI', 'Careers', 'Blogs', 'News', 'Contact'].map(item => (
                <li key={item}><a href="#" className="hover:text-brand-gold transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={footerVariants}>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Projects</h4>
            <ul className="space-y-3 text-brand-light/80 text-lg">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">The Address 2.0</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Adissia One World</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Echo Valley</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">MK Grand</a></li>
            </ul>
          </motion.div>

          <motion.div variants={footerVariants}>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-brand-light/10 rounded-full flex items-center justify-center text-brand-light hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-brand-light/70 text-base leading-relaxed">
              Crafted with excellence for your future. Discover unparalleled luxury and enduring value with Adissia Developers.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-brand-light/20 pt-8 text-center text-brand-light/60 text-sm">
          <p>© {new Date().getFullYear()} Adissia Developers Private Limited. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
