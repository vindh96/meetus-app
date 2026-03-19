"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Meetus() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMatch = () => {
    setLoading(true);
    // This is a placeholder for the actual matching logic
    alert("Finding connections within 200 meters...");
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center p-6 font-sans">
      <nav className="w-full max-w-2xl py-8 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter">MEETUS</h1>
        <div className="w-8 h-8 rounded-full bg-pink-100" />
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-lg space-y-10">
        <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-400 font-bold">
          <span className="text-pink-400 border-b-2 border-pink-200">Interest</span>
          <span>Emotion</span>
          <span>Profession</span>
        </div>

        <textarea 
          className="w-full text-3xl font-light text-center border-none focus:ring-0 placeholder-gray-100 h-40 resize-none outline-none"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={handleMatch}
          className="bg-[#FFD1DC] px-12 py-5 rounded-full font-bold shadow-xl shadow-pink-100 hover:bg-pink-200 transition-all cursor-pointer"
        >
          {loading ? "Searching Nearby..." : "Connect Anonymously"}
        </motion.button>
      </div>

      <footer className="py-10 text-[10px] text-gray-300 tracking-[0.2em] uppercase text-center">
        200 Meters • Private • No Judgment
      </footer>
    </div>
  );
}
