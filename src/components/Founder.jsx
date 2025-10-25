import { motion } from 'framer-motion'

const Founder = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/img-3.png"
              alt="Shri. M. V. Manikandan"
              className="w-full max-w-md mx-auto rounded-lg shadow-luxury"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shri. M. V. Manikandan</h3>
              <p className="text-brand font-medium">Founder & Managing Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
              Visionary <span className="text-brand">Leadership</span> Behind Adissia
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With 15+ years of experience in real estate development, our founder brings unparalleled expertise and vision to every project.
            </p>
            <button className="btn-primary">Meet the Team</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Founder
