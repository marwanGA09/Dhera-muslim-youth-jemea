'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 text-center text-gray-400"
    >
      <p>© 2025 Dera Muslim Youth Jemea. All rights reserved.</p>
      <p className="mt-2">“Empowering Youth through Faith and Service.”</p>
    </motion.footer>
  );
};

export default Footer;