import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400">
              {link}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden flex flex-col bg-gray-800 p-4"
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="p-2 hover:text-cyan-400">
              {link}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
