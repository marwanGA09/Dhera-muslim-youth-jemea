'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900 text-gray-400 py-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Dera Muslim Youth Jemea</h3>
          <p>Empowering the next generation through faith, knowledge, and service.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white"><Facebook /></Link>
            <Link href="#" className="hover:text-white"><Twitter /></Link>
            <Link href="#" className="hover:text-white"><Instagram /></Link>
            <Link href="#" className="hover:text-white"><Linkedin /></Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
          <p className="mb-4">Stay updated with our latest news and events.</p>
          <div className="flex">
            <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700" />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white ml-2">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center">
        <p>© 2025 Dera Muslim Youth Jemea. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
