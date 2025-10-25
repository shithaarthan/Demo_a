import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Ravi Kumar',
    title: 'Investor',
    quote: 'Adissia transformed my investment portfolio. Their prime locations and transparent processes ensured a secure and highly profitable venture. Truly a class apart in real estate!',
    avatar: '/images/avatar-1.jpg' // Placeholder, ideally use real avatars
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Homeowner',
    quote: 'Finding my dream home with Adissia was an absolute pleasure. The attention to detail, modern amenities, and seamless experience from start to finish were exceptional.',
    avatar: '/images/avatar-2.jpg'
  },
  {
    id: 3,
    name: 'Anil Menon',
    title: 'Business Owner',
    quote: 'Adissia's properties are more than just land; they are future-proof assets. The team's professionalism and deep market insights made my decision easy and rewarding.',
    avatar: '/images/avatar-3.jpg'
  },
  {
    id: 4,
    name: 'Sophie Lee',
    title: 'International Client',
    quote: 'Even from abroad, Adissia made the purchasing process incredibly smooth. Their digital platforms and clear communication gave me complete confidence. Highly recommended!',
    avatar: '/images/avatar-4.jpg'
  },
  {
    id: 5,
    name: 'Vijay Singh',
    title: 'Real Estate Analyst',
    quote: 'As an industry expert, I can attest to Adissia's commitment to quality and innovation. Their projects consistently exceed expectations in design and long-term value.',
    avatar: '/images/avatar-5.jpg'
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger the appearance of each item
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section className="py-20 bg-brand-light text-brand-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Hear directly from those who've experienced the Adissia difference.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-6 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" stroke="gold" className="text-brand-gold" />
                ))}
              </div>
              <p className="text-lg text-brand-dark/90 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                {/* <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" /> */}
                <div>
                  <h4 className="font-bold text-xl text-brand-dark">{testimonial.name}</h4>
                  <p className="text-brand-gray text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
