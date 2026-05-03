import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white bg-gray-950">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* LEFT TEXT */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-500">Hazeen Dodhiya</span> 👋
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Final-year Computer Science Student | Full Stack Developer | AI Enthusiast
            </p>

            <p className="text-gray-500 mt-6 leading-relaxed">
              I build scalable web applications, AI-powered systems, and cloud-based solutions.
              Passionate about solving real-world problems using modern technologies like
              Next.js, Node.js, and Machine Learning.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">

              <a
                href="/projects"
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">

            <div className="relative w-72 h-72 md:w-96 md:h-96">

              <Image
                src="/profile.jpeg"
                alt="Hazeen Dodhiya"
                width = {320}
                height = {320}
                // fill
                className="rounded-full object-cover border-4 border-gray-800 shadow-xl"
                priority
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}