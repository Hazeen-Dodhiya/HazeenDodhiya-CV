import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white border-b border-gray-800">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="font-bold text-xl tracking-wide">
          MyPortfolio
        </h1>

        {/* LINKS */}
        <div className="flex gap-6 text-sm">
          
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link href="/skills" className="hover:text-blue-400 transition">
            Skills
          </Link>

          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}