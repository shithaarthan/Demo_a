import { motion } from 'framer-motion'

const Founder = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger the appearance of child elements
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section className="relative py-20 px-6 lg:px-8 bg-brand-dark text-brand-light overflow-hidden">
      {/* Animated background shape */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              variants={imageVariants}
              className="relative w-full max-w-md mx-auto rounded-lg shadow-luxury overflow-hidden"
            >
              <img
                src="/images/img-3.png"
                alt="Shri. M. V. Manikandan"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div variants={itemVariants} className="text-center mt-6">
              <h3 className="text-3xl font-bold text-brand-gold mb-2">Shri. M. V. Manikandan</h3>
              <p className="text-brand-light text-lg font-medium">Founder & Managing Director</p>
            </motion.div>
          </div>

          <div className="text-center lg:text-left">
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Visionary <span className="text-brand-gold">Leadership</span> Behind Adissia
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-light/80 mb-6 leading-relaxed"
            >
              With over 15 years of unparalleled experience in real estate development, Shri. M. V. Manikandan brings a profound vision and exceptional expertise to every Adissia project. His dedication to innovation and quality has shaped our legacy.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-light/80 mb-8 leading-relaxed"
            >
              Under his guidance, Adissia consistently delivers properties that redefine luxury and set new benchmarks in the industry, ensuring every investment is a step towards a brighter future.
            </motion.p>
            <motion.button variants={itemVariants} className="btn-primary-gold">
              Meet the Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founder
