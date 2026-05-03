export default function About() {
  return (
    <section className="px-10 py-20 text-white max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold">About Me</h2>

      <p className="text-gray-300 mt-6 leading-relaxed">
        I am <span className="text-white font-semibold">Mohammad Hazeen Dodhiya</span>, a final-year
        Computer Science student from FAST NUCES, Pakistan, with a strong foundation in
        software engineering, systems programming, and AI-driven applications.
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        My academic journey (2022–2026) has been focused on building a deep understanding of
        core computer science concepts such as Data Structures & Algorithms, Operating Systems,
        Computer Architecture, Database Systems, and Object-Oriented Programming. I have also
        been recognized twice on the Dean’s List for academic excellence.
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        On the technical side, I work across the full stack — developing scalable web applications
        using <span className="text-white">React, Next.js, Node.js, and Django</span>, while also
        working with databases like <span className="text-white">Oracle SQL, MongoDB, and SQLite</span>.
        I am comfortable in both system-level programming (C/C++, x86 Assembly) and modern web development
        environments, including Docker, Git, and Linux systems.
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        My main focus is building intelligent, real-world systems that combine software engineering
        with artificial intelligence. My Final Year Project, <span className="text-white font-semibold">
        NeuroFusion</span>, is an AI-powered medical imaging system designed for early Alzheimer’s detection
        using MRI scans. It includes a full-stack web platform where users can upload scans and receive
        predictive analysis in real time.
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        In addition, I have developed a cloud-based torrenting system integrated with Google Drive,
        featuring VPS automation, secure VPN routing, and a complete user dashboard, as well as a file
        compression tool using Huffman Encoding that achieves efficient data reduction while strengthening
        my understanding of algorithms and data structures.
      </p>

      <p className="text-gray-300 mt-4 leading-relaxed">
        I am particularly interested in Artificial Intelligence, Cloud Computing, DevOps, and scalable
        backend systems. My goal is to contribute to impactful software solutions that solve real-world
        problems, especially in healthcare and distributed systems.
      </p>

      <div className="mt-8 text-gray-400">
        <p><span className="text-white">Email:</span> hazeenwork@gmail.com</p>
        <p><span className="text-white">Location:</span> Karachi, Pakistan</p>
        <p>
          <span className="text-white">GitHub:</span>{" "}
          <a href="https://github.com/Hazeen-Dodhiya" className="text-blue-400">
            github.com/Hazeen-Dodhiya
          </a>
        </p>
      </div>

    </section>
  );
}