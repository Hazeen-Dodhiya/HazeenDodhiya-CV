export default function ContactPage() {
  return (
    <main className="px-10 py-20 text-white max-w-4xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <p className="text-gray-300 mt-4">
        Feel free to reach out for internships, collaborations, or opportunities.
      </p>

      {/* EMAIL */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Email</h2>
        <a
          href="mailto:hazeenwork@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          hazeenwork@gmail.com
        </a>
      </div>

      {/* LINKS */}
      <div className="mt-10 space-y-6">

        {/* LINKEDIN */}
        <div>
          <h2 className="text-xl font-semibold">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/hazeen-dodhiya-b9505035a/?skipRedirect=true"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            linkedin.com/in/hazeen-dodhiya
          </a>
        </div>

        {/* GITHUB */}
        <div>
          <h2 className="text-xl font-semibold">GitHub</h2>
          <a
            href="https://github.com/Hazeen-Dodhiya"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            github.com/Hazeen-Dodhiya
          </a>
        </div>

      </div>

    </main>
  );
}