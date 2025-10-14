"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-gray-900 text-white rounded-t-lg">
        <CardContent className="p-4 text-center">
          <p>© 2025 Dera Muslim Youth Jemea. All rights reserved.</p>
          <p>“Empowering Youth through Faith and Service.”</p>
        </CardContent>
      </Card>
    </motion.footer>
  );
};

export default Footer;
