"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Bike, Car, Bus, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";

function HeroSection({ onAuthRequired }: { onAuthRequired: () => void }) {
  const {userData} = useSelector((state:RootState)=>state.user)
  const router = useRouter()

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Heroimage.png')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl mt-30"
        >
          Book Any Vehicle
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 max-w-xl text-gray-300 text-2xl"
        >
          Your Ride. Your Route. Your Journey
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-8 text-gray-300 text-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Bike size={30} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Car size={30} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Bus size={30} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <Truck size={30} />
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 bg-white text-black rounded-full font-semibold shadow-xl"
          onClick={()=>{!userData?onAuthRequired():router.push("/user/book")}}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
}

export default HeroSection;
