import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold mt-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hi, I'm <span className="text-cyan-400">Darshan</span>
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
A passionate developer who loves building modern web applications 🚀      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-300 transition"
      >
        View My Work
      </a>
    </section>
  );
}
