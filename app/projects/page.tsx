'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProjectsPage() {
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

  const cardHover = { scale: 1.05, transition: { duration: 0.3 } };

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
          Our Projects & Initiatives
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Every project we run reflects our belief that service is an act of worship. Here are some of our key initiatives:
        </p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section variants={itemVariants} className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={cardHover}>
            <Card className="h-full bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Youth Empowerment Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Mentorship and leadership training that prepare the youth to face modern challenges while holding firm to Islamic identity.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={cardHover}>
            <Card className="h-full bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Community Solidarity Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">A collective charity fund used to support struggling families, school fees, and emergency relief.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={cardHover}>
            <Card className="h-full bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Masjid Beautification & Clean Environment Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Encouraging youth to take part in keeping mosques and surroundings clean — as a symbol of purity and respect.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={cardHover}>
            <Card className="h-full bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Educational Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Small grants and tutoring sessions for high-achieving, low-income students.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={cardHover}>
            <Card className="h-full bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-blue-400">Dawah & Public Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Street Dawah, Qur’an competition, and radio discussions promoting ethical living and unity.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}