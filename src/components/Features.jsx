import { motion } from 'framer-motion'
import { Shield, MapPin, Award, Users, TrendingUp, Settings } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Transparency",
      description: "CLR processes, documented ownership, and clear project timelines"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime Locations",
      description: "Strategic zones with excellent connectivity and future appreciation"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "DTCP Approved",
      description: "Government approved developments with legal compliance"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Modern Infrastructure",
      description: "Contemporary amenities and well-planned community spaces"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Long-term Value",
      description: "Sustainable investments with consistent property appreciation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technology-Driven",
      description: "Seamless booking and management through digital platforms"
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Why Choose <span className="text-brand-gold">Adissia</span>
          </h2>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, security, and premium development standards
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            staggerChildren: 0.1 // Stagger the appearance of each card
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-darker p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-brand-light/10"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-light mb-4">{feature.title}</h3>
              <p className="text-brand-light/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
