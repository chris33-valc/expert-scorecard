'use client';

import { useEffect } from 'react';

export default function Home() {
  // just to prove env vars still load
  useEffect(() => {
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  }, []);

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind is working!
      </h1>

      {/* 🔵 NEW CARD */}
      <div className="max-w-sm rounded-2xl bg-blue-50 p-6 shadow">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">
          Sample Expert Card
        </h2>
        <p className="text-sm text-blue-800">
          This is where an expert’s bio or stats will go.
        </p>
      </div>
    </main>
  );
}
