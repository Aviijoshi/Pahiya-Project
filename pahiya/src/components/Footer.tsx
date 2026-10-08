'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa6'

function Footer() {
  const socialIcons = [
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn
  ]

  return (
    <div className="w-full bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-wide">PAHIYA</h2>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Find the right ride for every journey, with simple booking and
              transparent pricing.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors"
                >
                  <Icon size={18} />

                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-white/10'>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center text-xs text-gray-500 gap-6">
          <p>© {new Date().getFullYear()} PAHIYA. All rights reserved.</p>
        </div>
        

        </div>


      </motion.div>




    </div>
  )
}

export default Footer