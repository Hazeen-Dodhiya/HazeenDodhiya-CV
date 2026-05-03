import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 border-b border-gray-800">
      <h1 className="font-bold text-xl">MyPortfolio</h1>

      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}