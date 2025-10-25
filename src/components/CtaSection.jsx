import { motion } from 'framer-motion'

const CtaSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative py-20 bg-brand-dark text-brand-light overflow-hidden">
      {/* Background overlay/pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/images/amendities-bg.png')` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-6 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Begin Your <span className="text-brand-light">Investment Journey</span> With Adissia
        </motion.h2>
        <motion.p
          className="text-lg text-brand-light/80 mb-8 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Schedule a private site visit with our expert consultants and discover properties that align with your vision and future aspirations.
        </motion.p>
        <motion.button
          className="btn-primary-gold text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(234, 179, 8, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Private Tour
        </motion.button>
      </div>
    </section>
  )
}

export default CtaSection
