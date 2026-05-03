import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-10 py-20 text-white bg-gray-950">

      {/* TITLE */}
      <h1 className="text-4xl font-bold">Projects</h1>

      <p className="text-gray-400 mt-3">
        A collection of my software engineering, AI, systems, and full-stack development projects.
      </p>

      {/* PROJECT GRID */}
      <div className="mt-10 flex flex-wrap gap-6">

        {/* NEUROFUSION */}
        <div className="w-full md:w-[48%] bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold">NeuroFusion (Final Year Project)</h2>

          <p className="text-gray-400 mt-2">
            AI-powered Alzheimer’s detection system using MRI scans and Vision Transformers.
            Includes explainability heatmaps and full-stack web integration for real-time inference.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Next.js</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Python</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Vision Transformers</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">AI/ML</span>
          </div>

          <Link
            href="/projects/neurofusion"
            className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Full Details →
          </Link>
        </div>

        {/* CLOUD TORRENTING */}
        <div className="w-full md:w-[48%] bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold">Cloud-Based Torrenting System</h2>

          <p className="text-gray-400 mt-2">
            A secure cloud seedbox system that executes torrents on Oracle VPS,
            routes traffic through VPN for anonymity, and automatically uploads completed files to Google Drive.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Django</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Python</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Paramiko</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Oracle VPS</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">OpenVPN</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Google Drive API</span>
          </div>

          <Link
            href="/projects/cloud-torrenting"
            className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Full Details →
          </Link>
        </div>

        {/* FILE COMPRESSOR */}
        <div className="w-full md:w-[48%] bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold">File Compressor System</h2>

          <p className="text-gray-400 mt-2">
            A high-performance file compression system combining C++ backend with a JavaScript frontend.
            Implements Huffman Coding and Run-Length Encoding for efficient lossless compression.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">C++</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">JavaScript</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Algorithms</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Huffman Coding</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">RLE</span>
          </div>

          <Link
            href="/projects/file-compressor"
            className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Full Details →
          </Link>
        </div>

        {/* SNAKE GAME */}
        <div className="w-full md:w-[48%] bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold">
            Snake Game (x86 Assembly - Irvine32)
          </h2>

          <p className="text-gray-400 mt-2">
            A classic Snake game built using x86 Assembly language with the Irvine32 library.
            The snake grows as it eats randomly spawning food on the screen.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">x86 Assembly</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Irvine32</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Low-Level Programming</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Game Dev</span>
          </div>

          <Link
            href="/projects/snake-game"
            className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Full Details →
          </Link>
        </div>

      </div>
    </main>
  );
}