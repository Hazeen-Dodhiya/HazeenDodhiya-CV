import Link from "next/link";

export default function FileCompressorPage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          File Compressor System 🗜️
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          High-performance lossless compression system using C++ backend and JavaScript frontend
        </p>

        <p className="text-gray-500 mt-2">
          University Project | Data Structures & Algorithms
        </p>


      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Introduction</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The File Compressor System is a hybrid application designed to efficiently compress and decompress
          files using classical lossless compression techniques. It combines a JavaScript-based user interface
          with a high-performance C++ backend integrated through the Molybden framework.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system focuses on optimizing storage efficiency while maintaining data integrity, achieving
          strong compression ratios using well-established algorithms.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Problem Statement</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Large file sizes increase storage and transfer costs</li>
          <li>Existing tools lack optimized algorithm-level control</li>
          <li>Need for lightweight and fast compression systems</li>
          <li>Limited educational implementations of compression algorithms</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Lossless file compression and decompression</li>
          <li>Web-based interactive user interface</li>
          <li>High-performance C++ backend processing</li>
          <li>Supports multiple file formats</li>
          <li>Efficient memory usage and optimized execution</li>
        </ul>
      </section>

      {/* ALGORITHMS */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Core Algorithms</h2>

        <div className="mt-4 space-y-6 text-gray-300">

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Huffman Coding</h3>
            <p className="mt-2">
              A lossless compression algorithm that assigns variable-length codes to characters based on
              frequency, significantly reducing file size.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Run-Length Encoding (RLE)</h3>
            <p className="mt-2">
              A simple compression technique that replaces repeated characters with a single value and count,
              making it efficient for repetitive data.
            </p>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "JavaScript",
            "C++",
            "Molybden Framework",
            "Algorithms",
            "Huffman Coding",
            "Run-Length Encoding"
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

      {/* RESULTS */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Results</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system achieved up to <b>34% compression efficiency</b> depending on file type,
          demonstrating strong performance and a strong understanding of algorithm optimization.
        </p>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Impact</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          This project highlights practical implementation of classic compression algorithms
          and demonstrates the ability to design and integrate a full-stack system combining
          frontend usability with backend performance engineering.
        </p>
      </section>

      {/* GITHUB LINK */}
      <section className="max-w-5xl mx-auto mt-16 text-center">

        <Link
          href="https://github.com/Hazeen-Dodhiya/file-compressor"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </Link>

      </section>

    </main>
  );
}