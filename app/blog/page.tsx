'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogPage() {
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

  const blogPosts = [
    {
      title: "Faith in Action: How Our Youth Are Transforming Dera",
      description: "A reflection on volunteerism and Islamic identity.",
      link: "#",
    },
    {
      title: "From the Qur’an Circle to the Community",
      description: "How weekly Qur’an circles are shaping confident young Muslims.",
      link: "#",
    },
    {
      title: "Why Community Service Is a Form of Worship",
      description: "Exploring how giving back strengthens one’s faith.",
      link: "#",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-32 space-y-24 md:space-y-32"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
          Our Reflections & Updates
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stay updated with the voices of our youth, scholars, and community volunteers. Read stories that inspire growth, faith, and togetherness.
        </p>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section variants={itemVariants} className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div key={index} whileHover={cardHover}>
              <Link href={post.link}>
                <Card className="h-full bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}