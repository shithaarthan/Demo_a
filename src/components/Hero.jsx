import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Counter Component for smooth animations
const Counter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null
          const duration = 2000

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime

            const progress = Math.min((currentTime - startTime) / duration, 1)
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)

            setCount(Math.floor(target * easeOutCubic))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  }

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.6, // Delay after main text animations
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-brand-dark/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-brand-light p-4">
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Experience Unrivaled Luxury
        </motion.h1>
        <motion.p
          className="font-sans text-lg md:text-xl max-w-2xl mt-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Discover a curated collection of the world's most exclusive properties,
          where every detail is crafted to perfection.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10"
        >
          <button className="btn-primary-gold text-lg">
            Explore Properties
          </button>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-light"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8 // Start after main content
              }
            }
          }}
        >
          <motion.div variants={statVariants} custom={0} className="flex flex-col items-center">
            <div className="text-4xl font-bold text-brand-gold">
              <Counter target={25} suffix={'+'} />
            </div>
            <p className="text-sm mt-1 uppercase tracking-wider">Years Experience</p>
          </motion.div>
          <motion.div variants={statVariants} custom={1} className="flex flex-col items-center">
            <div className="text-4xl font-bold text-brand-gold">
              <Counter target={150} suffix={'+'} />
            </div>
            <p className="text-sm mt-1 uppercase tracking-wider">Happy Clients</p>
          </motion.div>
          <motion.div variants={statVariants} custom={2} className="flex flex-col items-center">
            <div className="text-4xl font-bold text-brand-gold">
              <Counter target={75} suffix={'+'} />
            </div>
            <p className="text-sm mt-1 uppercase tracking-wider">Properties Sold</p>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-brand-light/80">
          <span className="text-sm uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
