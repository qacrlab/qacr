'use client'

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <header className="w-full flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            className="dark:invert"
            src="/images/icon_black.png"
            alt="Logo"
            width={50}
            height={50}
            priority
            // Use Tailwind breakpoints to increase size for larger screens
            sizes="(max-width: 640px) 50px, 80px"
          />
        </Link>
        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Inline SVG for hamburger icon */}
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-6">
          <Link href="/strategy" passHref>
            <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
              Mission
            </div>
          </Link>
          <Link href="/whitepaper" passHref>
            <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
              Whitepaper
            </div>
          </Link>
          <Link href="/research" passHref>
            <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
              Research
            </div>
          </Link>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center sm:hidden">
          <Link href="/strategy" passHref legacyBehavior>
            <div className="my-2 text-lg hover:underline">
              Mission
            </div>
          </Link>
          <Link href="/whitepaper" passHref>
            <div className="my-2 text-lg hover:underline">
              Whitepaper
            </div>
          </Link>
          <Link href="/research" passHref>
            <div className="my-2 text-lg hover:underline">
              Research
            </div>
          </Link>
        </nav>
      )}

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/images/full_black.png"
          alt=""
          width={600}
          height={100}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://qacr.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="deployment"
              width={20}
              height={20}
            />
            http://qacr.xyz
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          href="strategy"
          passHref
          legacyBehavior
        >
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Mission
          </a>
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/whitepaper"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Whitepaper
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/research"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Research
        </a>
      </footer>
    </div>
  );
}
