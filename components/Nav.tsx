'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex gap-6 px-8 py-4 shadow-sm bg-white/80 backdrop-blur">
      <Link href="/" className="font-bold text-blue-600">
        ExpertScorecard
      </Link>
      <Link href="/experts">Experts</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}