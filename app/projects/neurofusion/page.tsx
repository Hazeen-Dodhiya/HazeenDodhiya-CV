import Image from "next/image";
import Link from "next/link";

export default function NeuroFusionPage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          NeuroFusion 🧠
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          AI-Powered Alzheimer’s Disease Detection System using MRI & Vision Transformers
        </p>

        <p className="text-gray-500 mt-2">
          Final Year Project  | 2025–2026
        </p>

      </section>

      {/* IMAGE */}
      <section className="max-w-5xl mx-auto mt-10 flex justify-center">
        <Image
          src="/neuro.jpeg"
          alt="NeuroFusion System"
          width={1000}
          height={550}
          className="rounded-xl border border-gray-800"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Overview</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          NeuroFusion is a full-stack AI-based diagnostic support system designed to detect
          Alzheimer’s Disease from structural MRI scans. It integrates Vision Transformers (ViT)
          with a modern web interface to provide real-time predictions and explainable AI outputs.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system is built to address the critical challenge of early Alzheimer’s detection,
          where brain degeneration begins 15–20 years before clinical symptoms appear.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Problem Statement</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Traditional diagnostic methods and CNN-based AI models struggle with:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Early-stage Alzheimer’s detection</li>
          <li>Poor generalization across medical institutions</li>
          <li>Lack of explainability in predictions</li>
          <li>Limited ability to capture global brain structure patterns</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>MRI scan upload and preprocessing pipeline</li>
          <li>AI-based prediction (CN / MCI / AD classification)</li>
          <li>Vision Transformer-based inference engine</li>
          <li>Explainable AI heatmaps (attention visualization)</li>
          <li>Real-time web dashboard</li>
          <li>User authentication system</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Python",
            "Vision Transformers (ViT)",
            "Docker",
            "REST APIs"
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

      {/* ARCHITECTURE */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">System Architecture</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          NeuroFusion follows a modular architecture:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Frontend: Next.js web application</li>
          <li>Backend: Node.js + Express API layer</li>
          <li>AI Engine: Python-based Vision Transformer model</li>
          <li>Database: MongoDB for user and prediction storage</li>
        </ul>
      </section>

      {/* RESEARCH BASE */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Research Foundation</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system is built on extensive literature review of Vision Transformers in medical imaging,
          achieving reported diagnostic performance of 92.5% sensitivity and 95.7% specificity in AD detection.
          It leverages insights from ADNI, OASIS, and UK Biobank datasets.
        </p>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Impact</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          NeuroFusion aims to support early clinical decision-making in Alzheimer’s diagnosis,
          enabling earlier intervention and improved patient outcomes through AI-assisted analysis.
        </p>
      </section>

      {/* LINKS */}
      <section className="max-w-5xl mx-auto mt-16 text-center">

        <Link
          href="https://neurofusion.me"
          target="_blank"
          className="bg-blue-600 px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition"
        >
          Live Demo
        </Link>

        <Link
          href="https://github.com/Hazeen-Dodhiya/NeuroFusion"
          target="_blank"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </Link>

      </section>

    </main>
  );
}