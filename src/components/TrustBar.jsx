import { motion } from 'framer-motion'
import { Award, Shield, Calendar, Users, MapPin, TrendingUp } from 'lucide-react'

const TrustBar = () => {
  const trustItems = [
    { text: 'Est. 2012', icon: Calendar },
    { text: '250+ Professionals', icon: Users },
    { text: 'DTCP Approved', icon: Award },
    { text: 'Multi-City Presence', icon: MapPin },
    { text: 'IPO 2030 Vision', icon: TrendingUp },
    { text: '100% Safe Investment', icon: Shield }
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section className="bg-brand py-8 overflow-hidden">
      <motion.div
        className="flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          staggerChildren: 0.1 // Stagger the appearance of each item
        }}
      >
        {/* First set - moves left */}
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap min-w-max px-6"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <item.icon size={16} className="text-white" />
              </div>
              <span className="text-white font-medium text-sm md:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second set - moves left (continuation) */}
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap min-w-max px-6"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
            delay: 15, // Start the second one half way through
          }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <item.icon size={16} className="text-white" />
              </div>
              <span className="text-white font-medium text-sm md:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TrustBar
