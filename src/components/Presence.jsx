import { motion } from 'framer-motion'
import { Globe, Building2, Landmark } from 'lucide-react'

const Presence = () => {
  const presenceLocations = [
    {
      city: 'Coimbatore',
      description: 'Head office and primary development hub, leading innovative projects.',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      city: 'Chennai',
      description: 'Strategic regional office for market expansion and client outreach.',
      icon: <Landmark className="w-8 h-8" />
    },
    {
      city: 'Dubai',
      description: 'International NRI office, serving our global clientele and investments.',
      icon: <Globe className="w-8 h-8" />
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="py-20 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-4">
            Our Multi-City Presence
          </h2>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Expanding our footprint to bring unparalleled real estate opportunities closer to you, globally.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            staggerChildren: 0.1
          }}
        >
          {presenceLocations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-brand-darker p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-brand-light/10"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                {location.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-light mb-2">{location.city}</h3>
              <p className="text-brand-light/70 leading-relaxed">{location.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <img
            src="/images/india-map-new.webp"
            alt="Adissia India Presence Map"
            className="mx-auto max-w-full h-auto rounded-xl shadow-2xl opacity-80"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Presence
