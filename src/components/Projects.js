import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.description}</p>
            <div className="mt-4 flex gap-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                GitHub
              </a>
              {/* <a href={p.demo} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                Live Demo
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
