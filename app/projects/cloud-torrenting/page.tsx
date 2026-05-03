import Image from "next/image";
import Link from "next/link";

export default function CloudTorrentingPage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          Cloud-Based Torrenting ☁️
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Secure, Anonymous, Cloud-Powered Torrent Seedbox System with VPN Routing & Google Drive Integration
        </p>

        <p className="text-gray-500 mt-2">
          CS3001 – Computer Networks | Spring 2025
        </p>


      </section>

      {/* IMAGE */}
      <section className="max-w-5xl mx-auto mt-10 flex justify-center">
        <Image
          src="/cloud.jpg"
          alt="Cloud Torrent Architecture"
          width={1000}
          height={550}
          className="rounded-xl border border-gray-800"
        />
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Introduction</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Cloud-Based Torrenting is a distributed system that enables users to download torrents
          remotely using a cloud seedbox architecture. Instead of running torrents on a local machine,
          all downloads are executed on an Oracle Cloud VPS, improving speed, privacy, and reliability.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system also integrates a VPN layer to mask IP addresses and automatically uploads completed
          files to Google Drive, providing a fully automated cloud download pipeline.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Problem Statement</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Traditional torrenting exposes user IP addresses</li>
          <li>Local machines suffer bandwidth and performance issues</li>
          <li>Existing seedbox services are expensive or limited</li>
          <li>Lack of automation for cloud storage integration</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Web-based torrent submission system</li>
          <li>Remote torrent execution on Oracle VPS</li>
          <li>VPN routing for IP masking (OpenVPN)</li>
          <li>Real-time download progress dashboard</li>
          <li>Automatic Google Drive upload on completion</li>
          <li>User authentication and quota management</li>
        </ul>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">System Architecture</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system consists of three major components:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Frontend: Django-based web application for user interaction</li>
          <li>VPS 1: Torrenting server running qBittorrent + OpenVPN client</li>
          <li>VPS 2: OpenVPN server acting as secure proxy gateway</li>
        </ul>

        <p className="text-gray-300 mt-4 leading-relaxed">
          All communication between web server and VPS is handled via SSH (Paramiko),
          while file uploads are automated using Google Drive API.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Django",
            "Python",
            "qBittorrent",
            "Paramiko (SSH)",
            "Oracle Cloud VPS",
            "OpenVPN",
            "Google Drive API",
            "HTML/CSS/JS"
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

      {/* IMPLEMENTATION */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Implementation Summary</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The system was implemented using a Django backend that communicates with a remote Oracle VPS
          via SSH. Torrent commands are executed remotely using Paramiko, while download progress is
          continuously monitored and displayed on the dashboard.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Once a torrent completes, the file is automatically uploaded to Google Drive using the Drive API.
          All torrent traffic is routed through a second VPS acting as a VPN gateway for anonymity.
        </p>
      </section>

      {/* RESULTS */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Results</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Successful remote torrent execution via cloud VPS</li>
          <li>100% automated file upload to Google Drive</li>
          <li>IP masking verified through VPN routing</li>
          <li>Stable performance under Oracle Free Tier constraints</li>
        </ul>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Impact</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          This project demonstrates how cloud infrastructure can replace local torrent clients,
          offering privacy, automation, and scalability using free-tier cloud resources.
        </p>
      </section>

      {/* LINKS */}
      <section className="max-w-5xl mx-auto mt-16 text-center">

        <Link
          href="https://github.com/Hazeen-Dodhiya/cloud-torrenting-system"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </Link>

      </section>

    </main>
  );
}