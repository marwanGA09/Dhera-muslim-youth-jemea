'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24 md:space-y-32 mt-24"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Empowering the Next Generation
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
          Through Faith, Knowledge, and Service. We are a non-profit community organization committed to nurturing youth.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Join Us <ArrowRight className="ml-2" /></Button>
          <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">Donate Now</Button>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-12 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            To create an active and conscious generation of Muslim youth who contribute positively to society through education, community service, and unity.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            To see a future where every Muslim youth is guided by Qur’anic principles, empowered with knowledge, and inspired to serve humanity.
          </p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={itemVariants}>
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Faith</h3>
            <p className="text-gray-500">Our foundation in every effort.</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Unity</h3>
            <p className="text-gray-500">We rise together as one community.</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Service</h3>
            <p className="text-gray-500">We serve society as an act of worship.</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Integrity</h3>
            <p className="text-gray-500">Trust and transparency guide our work.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section variants={itemVariants} className="text-center py-20 my-20 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Build a Stronger Ummah With Us</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join hands with Dera Muslim Youth Jemea and be a part of the change.</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Get Involved Today <ArrowRight className="ml-2" /></Button>
      </motion.section>
    </motion.div>
  );
}