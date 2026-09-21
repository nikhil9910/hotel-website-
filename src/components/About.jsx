import React from "react";
import { motion } from "framer-motion";

import Img1 from "../assets/d1.jpg";
import Img2 from "../assets/d2.jpg";
import Img3 from "../assets/d12.jpg";
import Background from "../assets/bg45.png";

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-white">
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About This Property
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div>
            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <strong>Comfortable Accommodations:</strong> Jee Ri Haveli in Jodhpur offers heritage family rooms with picturesque views, private bathrooms, and modern amenities. Each room includes air-conditioning, a private balcony, and free WiFi.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <strong>Relaxing Facilities:</strong> Guests can enjoy spa facilities, a rooftop terrace, and serene seating areas. The hotel features a rooftop restaurant and lounge with panoramic fort and lake views. Additional services include airport/station transfers, bicycle rental, and parking.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <strong>Dining Experience:</strong> Breakfast and authentic dining options include traditional Rajasthani specialties, continental and Indian favorites prepared fresh with local ingredients.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <strong>Prime Location:</strong> Located in the historic heart of Jodhpur, near world-famous attractions such as Mehrangarh Fort, Jaswant Thada, and the Clock Tower. Guests appreciate our attentive hospitality and prime heritage location.
            </motion.p>

            <motion.p
              className="text-sm italic text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Distance in property description is calculated using © OpenStreetMap
            </motion.p>
          </div>

          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
            <motion.img
              src={Img1}
              alt="Hotel View 1"
              className="rounded-2xl w-full h-auto max-h-[350px] object-cover shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
              decoding="async"
            />
            <motion.img
              src={Img2}
              alt="Hotel View 2"
              className="rounded-2xl w-full h-auto max-h-[350px] object-cover shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
              decoding="async"
            />
            <motion.img
              src={Img3}
              alt="Hotel View 3"
              className="rounded-2xl w-full h-auto max-h-[350px] object-cover shadow-lg col-span-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Popular Facilities Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Most Popular Facilities</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-white/90 text-base">
            <li>✅ Free WiFi</li>
            <li>✅ Airport Shuttle</li>
            <li>✅ Non-smoking Rooms</li>
            <li>✅ Spa</li>
            <li>✅ Room Service</li>
            <li>✅ Free Parking</li>
            <li>✅ Restaurant</li>
            <li>✅ Family Rooms</li>
            <li>✅ Bar</li>
          </ul>
          <p className="mt-4 text-lg font-medium text-green-300">
            ✨ Very Good Breakfast
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
