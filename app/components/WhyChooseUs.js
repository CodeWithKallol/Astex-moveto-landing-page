'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// --- SVG Icons ---
// By using inline SVGs, we remove the need for the external 'react-icons' library,
// which resolves the compilation error.

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l-10 4.44v6.56c0 5.4 10 11 10 11s10-5.6 10-11v-6.56l-10-4.44zm0 17.5c-5.06-2.67-8-6.85-8-9.5v-4.3l8-3.55 8 3.55v4.3c0 2.65-2.94 6.83-8 9.5zm-1-6.5l-3.5-3.5 1.41-1.41 2.09 2.09 4.59-4.59 1.41 1.41-6 6z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-4.41 0-8 3.59-8 8 0 2.38 1.04 4.53 2.71 6h10.58c1.67-1.47 2.71-3.62 2.71-6 0-4.41-3.59-8-8-8zm-1 18h2v2h-2zm-5-2h12v-2h-12zm.29-11c-.19.64-.29 1.31-.29 2h10c0-.69-.1-1.36-.29-2z" />
  </svg>
);

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3l4.2 4.2-1.4 1.4-4.2-4.2c-1.1 2.4-.7 5.4 1.3 7.4 1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1 0-1.4z" />
    <path d="M20.9 11.2c-.3-.3-.8-.3-1.1 0l-1.8 1.8-1.5-1.5 1.8-1.8c.3-.3.3-.8 0-1.1l-1.4-1.4c-.3-.3-.8-.3-1.1 0l-1.8 1.8-1.5-1.5 1.8-1.8c.3-.3.3-.8 0-1.1l-1.4-1.4c-.3-.3-.8-.3-1.1 0l-1.8 1.8-1.5-1.5 1.8-1.8c.3-.3.3-.8 0-1.1l-1.4-1.4c-.3-.3-.8-.3-1.1 0l-1.8 1.8-1.5-1.5 1.8-1.8c.3-.3.3-.8 0-1.1l-1.4-1.4c-.3-.3-.8-.3-1.1 0L3 10.1c-1.2 1.2-1.2 3.1 0 4.2l9.1 9.1c1.2 1.2 3.1 1.2 4.2 0l4.6-4.6c.3-.3.3-.8 0-1.1l-1-1z" />
  </svg>
);

// Animation variants for the parent container (staggering children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will apply a 0.2s delay between each child animation
    },
  },
};

// Animation variants for the child cards
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    }
  },
};

const FeatureCard = ({ icon, title, text }) => (
  // Each card is now a motion.div using the itemVariants for animation
  <motion.div
    variants={itemVariants}
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center sm:text-left"
  >
    <div className="text-orange-500 mb-4 inline-block">{icon}</div>
    <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className='grid '>
          <div className='flex items-center gap-2 mb-2'>
            <FaQuoteLeft className="text-orange-500 text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-black font-semibold uppercase tracking-wider"><i>WHY CHOOSE US</i></h3>
            </div>
          </div>
          <div className="flex gap-10 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Client Satisfaction Is Our <br />Primary Focus</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide top-tier moving services with a focus on reliability, security, and customer satisfaction. Here's what sets us apart.
            </p>
          </div>
        </div>

        {/* Responsive Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <FeatureCard
            icon={<StarIcon />}
            title="Quality & Satisfaction"
            text="Our commitment to quality ensures a seamless move and complete satisfaction for every client."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Security & Reliability"
            text="Your belongings are safe with us. We offer secure, reliable, and fully insured moving services."
          />
          <FeatureCard
            icon={<LightbulbIcon />}
            title="Flexibility & Advice"
            text="We offer flexible scheduling and expert advice to make your relocation as easy as possible."
          />
          <FeatureCard
            icon={<ToolsIcon />}
            title="Cutting-edge Solution"
            text="Utilizing the latest technology and equipment to provide an efficient and modern moving experience."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

