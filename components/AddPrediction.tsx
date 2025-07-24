'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AddPrediction({ expertId }: { expertId: string }) {
  const params   = useSearchParams();
  const router   = useRouter();
  if (params.get('admin') !== '1') return null;   // hide unless ?admin=1

  const [statement, setStatement] = useState('');
  const [target,    setTarget]    = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase
      .from('predictions')
      .insert({ expert_id: expertId, statement, target_date: target, status: 'pending' });

    if (error) alert(error.message);
    else { setStatement(''); setTarget(''); router.refresh(); }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <h3 className="font-semibold text-lg">Add Prediction (admin)</h3>

      <input
        required
        value={statement}
        onChange={e => setStatement(e.target.value)}
        placeholder="Prediction text…"
        className="w-full border p-2 rounded"
      />

      <input
        required
        type="date"
        value={target}
        onChange={e => setTarget(e.target.value)}
        className="border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}