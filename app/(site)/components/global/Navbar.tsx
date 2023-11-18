import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-green-400">Max </span> Carlquist
          </h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-green-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-green-400 duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}