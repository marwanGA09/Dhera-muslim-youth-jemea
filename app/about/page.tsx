'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number] } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-24 md:mt-32 space-y-16 md:space-y-24"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center py-8 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          About Dera Muslim Youth Jemea
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Founded in Dera, Oromia, Dera Muslim Youth Jemea (DMYJ) was established to strengthen the moral, educational, and social foundation of our youth. What began as a small group of dedicated volunteers has grown into a community-wide movement for empowerment, education, and service.
        </p>
      </motion.section>

      {/* Our Journey Section */}
      <motion.section variants={itemVariants} className="py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto text-center">
          Since our founding, we have organized faith-based learning sessions, youth empowerment seminars, and social initiatives that address real community challenges — from literacy and poverty to environmental responsibility. Our journey is a testament to the power of collective action and unwavering faith.
        </p>
      </motion.section>

      {/* Leadership Section */}
      <motion.section variants={itemVariants} className="py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto text-center">
          DMYJ is led by a council of dedicated community elders, passionate youth leaders, and experienced educators who guide the organization with consultation (shura) and transparency. Their diverse expertise ensures a holistic approach to youth development.
        </p>
      </motion.section>

      {/* Community Impact Section */}
      <motion.section variants={itemVariants} className="py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-400">Distributed school materials to underprivileged students, ensuring access to education for all.</p>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-400">Organized Ramadan Iftar programs and Qur’an recitation competitions, fostering spiritual growth and community bonding.</p>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-400">Supported families in need during emergencies, providing essential aid and comfort in times of crisis.</p>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <p className="text-lg text-gray-400">Mentored hundreds of young men and women to become community leaders, empowering them to make a positive difference.</p>
          </div>
        </div>
      </motion.section>

      {/* Quote Box Section */}
      <motion.section variants={itemVariants} className="py-8 md:py-16 bg-gray-800 rounded-lg text-center max-w-4xl mx-auto p-8">
        <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-4">
          “The best of people are those who bring most benefit to others.”
        </blockquote>
        <cite className="text-lg font-semibold text-blue-400">— Prophet Muhammad ﷺ</cite>
      </motion.section>
    </motion.div>
  );
}