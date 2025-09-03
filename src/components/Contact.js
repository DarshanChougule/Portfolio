export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://github.com/DarshanChougule"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-300 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/darshan-chougule-5aa684259/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-300 transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:darshankumarchougule@gmail.com"
          className="px-6 py-3 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-300 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
