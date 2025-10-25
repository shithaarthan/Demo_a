import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

const propertiesData = [
    {
      id: 1,
      name: 'Adissia - The Address 2.0',
      location: 'Saravanampatti',
      status: 'ongoing',
      image: '/images/banner_68dfbf8a6972d.jpg',
    },
    {
      id: 2,
      name: 'Adissia - One World',
      location: 'Kalapatti',
      status: 'ongoing',
      image: '/images/banner_68bab0a1dcda7.jpg',
    },
    {
      id: 3,
      name: 'Adissia - Echo Valley',
      location: 'Pannimadai',
      status: 'ongoing',
      image: '/images/banner_68ad440b6d7a9.webp',
    },
    {
      id: 4,
      name: 'Adissia - Neelambur',
      location: 'Neelambur',
      status: 'upcoming',
      image: '/images/banner_68c7ac05e8716.jpeg',
    },
    {
      id: 5,
      name: 'Adissia - Empress Hill',
      location: 'Kovaipudur',
      status: 'ongoing',
      image: '/images/banner_68c94a0b1769c.jpg',
    },
    {
      id: 6,
      name: 'Adissia - The Address',
      location: 'Saravanampatti',
      status: 'completed',
      image: '/images/banner_68a4123aeff78.jpg',
    },
]

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('ongoing')

  const filters = [
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'completed', label: 'Completed' }
  ]

  const filteredProperties = propertiesData.filter(prop => prop.status === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <section className="py-24 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-gold mb-4">
            Our Exclusive Properties
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            A curated selection of our finest developments, each with its own unique character and charm.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-black/20 p-2 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-brand-gold text-brand-dark'
                    : 'text-brand-light hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key={activeFilter}
        >
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent group-hover:from-black/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center text-sm text-brand-light/80 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>{property.location}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {property.name}
                </h3>
                <a href="#" className="flex items-center text-brand-gold font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-500">
                  View Details
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Properties
