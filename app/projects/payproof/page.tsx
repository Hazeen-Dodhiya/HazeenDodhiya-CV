import Link from "next/link";

export default function PayProofPage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          PayProof 💳
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Full-Stack Manual Payment Verification System with Admin Dashboard & Google Sheets Integration
        </p>

        <p className="text-gray-500 mt-2">
          Client Project | 2026
        </p>

      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Overview</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          PayProof is a full-stack payment verification platform built for a client that handles manual
          bank transfer confirmations. Customers fill out a multi-step payment form, receive a unique
          reference ID, and upload a screenshot of their bank transfer as proof of payment.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Admins then review each submission through a dedicated dashboard — they can inspect the uploaded
          screenshot, verify the reference ID, and either approve or reject the payment. Approved payments
          are automatically synced to a connected Google Spreadsheet for record-keeping.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Problem Statement</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The client needed a structured way to manage manual bank transfer payments from customers, which previously involved:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>No standardized reference system — payments were hard to match to customers</li>
          <li>Screenshot proofs sent over informal channels (WhatsApp, email) with no central tracking</li>
          <li>Manual copy-pasting into spreadsheets after every approval</li>
          <li>No visibility into how much had been received or was pending per bank account</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">How It Works</h2>

        <div className="mt-6 space-y-6 text-gray-300">

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Customer Flow</h3>
            <p className="mt-2">
              The customer fills in their name, email, and payment amount, then selects from available bank
              accounts filtered by their chosen currency. They are assigned a unique 8-digit reference ID
              which they must include in their bank transfer remarks. After making the payment, they upload
              a screenshot through the form and submit.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Admin Verification Flow</h3>
            <p className="mt-2">
              Admins log into the dashboard and see all incoming submissions with their status — pending,
              approved, or rejected. They can open a submission to view the customer details, the uploaded
              screenshot stored on Cloudinary, and decide to approve or reject it. On approval, the customer
              record is automatically pushed to the configured Google Spreadsheet.
            </p>
          </div>

        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Multi-step payment form with a unique reference ID generated per customer</li>
          <li>Screenshot upload with cloud storage via Cloudinary</li>
          <li>Admin dashboard with approve / reject workflow</li>
          <li>Automatic Google Sheets sync on payment approval</li>
          <li>Per-bank received and pending amount tracking</li>
          <li>Multi-admin system — create, edit, and delete admin accounts</li>
          <li>Configurable bank accounts — add, edit, and remove banks from the admin panel</li>
          <li>JWT-based admin authentication</li>
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
            "Google Sheets API",
            "Cloudinary",
            "JWT Auth",
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
          PayProof follows a modular client-server architecture:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Frontend: Next.js web application serving both the customer payment form and admin dashboard</li>
          <li>Backend: Node.js + Express.js REST API handling submissions, authentication, and bank management</li>
          <li>Database: MongoDB for storing submissions, bank accounts, and admin users</li>
          <li>Storage: Cloudinary for secure screenshot uploads</li>
          <li>Integration: Google Sheets API for automated record logging on approval</li>
        </ul>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Impact</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          PayProof replaced an entirely manual, error-prone process with a structured end-to-end workflow.
          The client gained full visibility over incoming payments, eliminated spreadsheet copy-paste work,
          and reduced payment-matching errors through the reference ID system.
        </p>
      </section>

      {/* GITHUB LINK */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <Link
          href="https://dashboard.juniorlayer.com"
          target="_blank"
          className="bg-blue-600 px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition"
        >
          Live Demo
        </Link>
      </section>

    </main>
  );
}