'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4 text-white">
        <div className="text-2xl font-bold">
          <Link href="/">DMYJ</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
          <li><Link href="/donate" className="hover:text-blue-400 transition-colors">Donate</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;