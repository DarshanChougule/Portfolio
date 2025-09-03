import skills from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Skills</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <span
              className="px-6 py-2 bg-gray-800 rounded-full shadow-md hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              {skill.domain}
            </span>
            <div className="absolute hidden group-hover:block bg-gray-950 rounded-xl shadow-2xl p-6 mt-3 w-72 z-10 border-2 border-transparent bg-clip-padding bg-gradient-to-r from-cyan-900 to-purple-900 transform transition-all duration-300 ease-in-out hover:scale-105">
              <ul className="list-none text-gray-100 text-base font-medium space-y-3">
                {skill.subskills.map((subskill, subIndex) => (
                  <li key={subIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    {subskill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}