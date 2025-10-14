"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">DMYJ</Link>
        </div>
        <ul className="flex space-x-2">
          <li><Button asChild variant="ghost"><Link href="/">Home</Link></Button></li>
          <li><Button asChild variant="ghost"><Link href="/about">About</Link></Button></li>
          <li><Button asChild variant="ghost"><Link href="/projects">Projects</Link></Button></li>
          <li><Button asChild variant="ghost"><Link href="/blog">Blog</Link></Button></li>
          <li><Button asChild variant="ghost"><Link href="/donate">Donate</Link></Button></li>
          <li><Button asChild variant="ghost"><Link href="/contact">Contact</Link></Button></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
