export default function SnakeGamePage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* TITLE */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          Snake Game 🐍 (x86 Assembly)
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Classic Snake Game built using Irvine32 library in x86 Assembly Language
        </p>

        <p className="text-gray-500 mt-2">
          Low-Level Systems Programming Project
        </p>

      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto mt-12">

        <h2 className="text-3xl font-semibold">Overview</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          This project is a fully functional Snake game implemented in x86 Assembly language using
          the Irvine32 library. The game demonstrates low-level programming concepts such as memory
          manipulation, loops, interrupts, and direct console control.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The snake moves across the console screen, consuming food that spawns at random positions.
          Each time food is eaten, the snake grows in length and the game becomes more challenging.
        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-12">

        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Real-time snake movement using keyboard input</li>
          <li>Random food generation on console grid</li>
          <li>Snake growth mechanism after eating food</li>
          <li>Collision detection (self & boundaries)</li>
          <li>Score tracking system</li>
        </ul>

      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-12">

        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "x86 Assembly",
            "Irvine32 Library",
            "Low-Level Programming",
            "Console I/O",
            "CPU Registers"
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </section>

      {/* LEARNING OUTCOME */}
      <section className="max-w-5xl mx-auto mt-12">

        <h2 className="text-3xl font-semibold">Learning Outcomes</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          This project strengthened understanding of low-level system architecture,
          memory control, and CPU-level execution. It provided hands-on experience
          with assembly programming and real-time game logic implementation.
        </p>

      </section>

      {/* GITHUB LINK (optional placeholder) */}
      <section className="max-w-5xl mx-auto mt-16 text-center">

        <a
          href="https://github.com/Hazeen-Dodhiya/snake-game-assembly"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </a>

      </section>

    </main>
  );
}