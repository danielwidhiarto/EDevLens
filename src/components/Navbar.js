// src/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          EDevLens
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
