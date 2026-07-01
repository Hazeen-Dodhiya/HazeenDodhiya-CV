import Link from "next/link";

export default function AuroraFreightPage() {
  return (
    <main className="px-6 md:px-20 py-16 text-white bg-gray-950">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          Aurora Carla Maria 🚢
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Full-Stack Freight & Logistics Company Website with Quote Request System
        </p>

        <p className="text-gray-500 mt-2">
          Client Project | 2025
        </p>

      </section>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Overview</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Aurora Carla Maria is a global freight and logistics company website built for a UK-based client
          offering air, ocean, and ground freight services. The site combines a polished marketing front-end
          with animated SVG visuals, a company timeline, service breakdowns, and a multi-step quote request
          form that connects directly to the client's sales workflow.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          When a customer submits a quote request, the owner is instantly notified with the shipment and
          contact details, allowing the team to follow up with a tailored freight estimate — closing the
          loop between marketing and sales without any manual tracking.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Problem Statement</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The client needed a professional web presence that could also act as a lead-generation tool,
          replacing what was previously handled through:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>No structured way for prospects to request freight quotes online</li>
          <li>Leads coming in via scattered emails and phone calls with no context</li>
          <li>No central showcase of services, credentials, or company track record</li>
          <li>No visibility into shipment volume or company milestones for prospective clients</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">How It Works</h2>

        <div className="mt-6 space-y-6 text-gray-300">

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Customer Flow</h3>
            <p className="mt-2">
              A visitor browses the company's services, track record, and why-choose-us sections, then opens
              the "Request a Quote" form. They select their freight mode (Air, Ocean, or Ground), enter
              origin, destination, estimated weight, and a cargo description, then submit their contact
              details across a two-step flow.
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold">Owner Notification Flow</h3>
            <p className="mt-2">
              On submission, the backend sends an instant email notification to the business owner containing
              the full shipment details and customer contact info. The owner then reaches out directly to the
              customer with a tailored freight quote — no dashboard login or manual lookup required.
            </p>
          </div>

        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Multi-step quote request form (shipment info → contact details)</li>
          <li>Instant email notification to the owner on every quote request</li>
          <li>Animated SVG hero visuals and live shipment/stat widgets</li>
          <li>Company timeline showcasing milestones from 2008 to present</li>
          <li>Service breakdown: Air, Ocean, Ground freight, Warehousing, Analytics, Support</li>
          <li>Carrier & partner network showcase</li>
          <li>Dedicated contact section with direct email form</li>
          <li>Fully responsive, animated single-page marketing site</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Nodemailer",
            "REST APIs",
            "Vercel"
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
          Aurora Carla Maria follows a lightweight marketing-site-plus-API architecture:
        </p>

        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Frontend: Next.js + TypeScript single-page site with Tailwind for styling and animated SVGs</li>
          <li>Backend: Node.js + Express.js API handling quote and contact form submissions</li>
          <li>Notifications: Nodemailer for instant email alerts to the business owner on new leads</li>
          <li>Hosting: Frontend deployed on Vercel with custom domain configuration</li>
        </ul>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-3xl font-semibold">Impact</h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          The new site gave the client a credible, modern brand presence and turned quote requests into a
          fully automated lead pipeline. Instead of chasing scattered inquiries, the owner now gets instant,
          structured notifications for every prospective shipment — cutting response time and making the
          sales process far more consistent.
        </p>
      </section>

      {/* SITE LINK */}
      <section className="max-w-5xl mx-auto mt-16 text-center">
        <Link
          href="https://auroraartscm.com"
          target="_blank"
          className="bg-blue-600 px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition"
        >
          Live Demo
        </Link>
      </section>

    </main>
  );
}