export default function Skills() {
  return (
    <section className="px-10 py-20 text-white max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold">Technical Skills</h2>

      <p className="text-gray-400 mt-4">
        A combination of systems-level programming, full-stack development, and cloud-based tools.
      </p>

      {/* PROGRAMMING LANGUAGES */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Programming Languages</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {["C", "C++", "Python", "JavaScript", "x86 Assembly"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* WEB DEVELOPMENT */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Full-Stack Development</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {["React.js", "Next.js", "Node.js", "Django", "REST APIs"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* DATABASES */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Databases</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {["Oracle SQL", "MongoDB", "SQLite"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SYSTEMS & TOOLS */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Systems & Tools</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {["Linux", "Git", "Docker", "VPS Management", "SSH"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CORE STRENGTHS */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Core Strengths</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Data Structures & Algorithms",
            "System Design Basics",
            "Problem Solving",
            "AI & Machine Learning Fundamentals",
            "Backend Architecture"
          ].map((skill) => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}