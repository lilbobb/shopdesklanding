// Header.tsx
"use client";

import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.header
      className="w-full h-[80px] bg-[#ffffff]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="w-full max-w-[1440px] h-[80px] mx-auto flex items-center justify-between p-4 relative">
        <motion.div
          className="flex items-center gap-[6px] relative top-[8px] w-[149px] h-[30px]"
          variants={slideIn}
        >
          <Image src="/images/box.png" alt="Logo" width={24} height={24} className="h-[24px] w-[24px]" />
          <h1 className="text-2xl font-circular-std font-medium leading-none tracking-normal text-gray-800">
            ShopDesk
          </h1>
        </motion.div>

        <div className="hidden md:flex items-center gap-[32px]">
          <motion.a href="#" aria-label="Twitter" variants={scaleUp} whileHover={{ scale: 1.1 }}>
            <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
          </motion.a>
          <motion.a href="#" aria-label="Facebook" variants={scaleUp} whileHover={{ scale: 1.1 }}>
            <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[#D0D0D0] rounded-full">
              <Image src="/images/facebook.png" alt="Facebook" width={12.46} height={24} />
            </div>
          </motion.a>
          <motion.a href="#" aria-label="Instagram" variants={scaleUp} whileHover={{ scale: 1.1 }}>
            <div className="w-[49.6px] h-[49.6px] flex items-center justify-center border-[1px] border-[#D0D0D0] rounded-full">
              <Instagram className="text-gray-700" size={24} />
            </div>
          </motion.a>
        </div>

        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none" aria-label="Toggle menu">
          {isMenuOpen ? <X className="text-gray-700" size={24} /> : <Menu className="text-gray-700" size={24} />}
        </button>

        {isMenuOpen && (
          <motion.div
            className="absolute top-[80px] right-0 w-full bg-white shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4 p-4">
              <a href="#" aria-label="Twitter">
                <Image src="/images/twitter.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[#D0D0D0] rounded-full">
                  <Image src="/images/facebook.png" alt="Facebook" width={12.46} height={24} />
                </div>
              </a>
              <a href="#" aria-label="Instagram">
                <div className="w-[49.6px] h-[49.6px] flex items-center justify-center border-[1px] border-[#D0D0D0] rounded-full">
                  <Instagram className="text-gray-700" size={24} />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
