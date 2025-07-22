'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Prediction = {
  id: string;
  claim_text: string;
  target_date: string | null;
  outcome_status: string;
};

export default function Home() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('predictions')
        .select('id, claim_text, target_date, outcome_status')
        .order('created_at', { ascending: false })
        .limit(10);
      if (!error) setPredictions(data as Prediction[]);
      else console.error(error);
    })();
  }, []);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Latest Predictions</h1>

      {predictions.map(p => (
        <div key={p.id} className="max-w-md rounded-2xl bg-blue-50 p-6 shadow">
          <p className="mb-2 font-semibold">{p.claim_text}</p>
          <p className="text-sm text-gray-600">
            Target date: {p.target_date ?? '—'} · Status: {p.outcome_status}
          </p>
        </div>
      ))}

      {predictions.length === 0 && (
        <p className="text-gray-500">No predictions yet.</p>
      )}
    </main>
  );
}