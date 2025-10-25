import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
  const opacity = useTransform(scrollYProgress, [0.4, 0.7, 0.9], [0, 1, 1])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="relative bg-brand-dark text-brand-light py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        ref={ref}
        style={{ overflow: 'hidden' }}
      >
        <motion.img
          style={{ y }}
          src="/images/about-banner.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-brand-gold">
            About Adissia
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Adissia is a pioneering force in the luxury real estate market, dedicated to transforming visions into tangible masterpieces. With decades of experience, we specialize in curating properties that offer not just a home, but a legacy.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our commitment to excellence, innovative design, and unparalleled client service sets us apart. We believe in creating spaces that inspire, comfort, and elevate the living experience.
          </p>
          <button className="btn-secondary-gold mt-8">Learn More</button>
        </motion.div>

        <div className="lg:w-1/2 flex justify-center">
          {/* Placeholder for additional image or animation if desired */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
