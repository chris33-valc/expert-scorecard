// app/experts/[id]/page.tsx
import { createClient } from '@supabase/supabase-js';
import PredictionCard, { Prediction } from '@/components/PredictionCard';
import AddPrediction from '@/components/AddPrediction';
import Link from 'next/link';

// tell Next.js this page is always dynamic
export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { data: expert, error: eErr } = await supabase
    .from('experts')
    .select('id, display_name, handle, platform')
    .eq('id', params.id)
    .single();

  if (eErr || !expert) throw eErr ?? new Error('Expert not found');

  const { data: predictions, error: pErr } = await supabase
    .from('predictions')
    .select('*')
    .eq('expert_id', params.id)
    .order('target_date', { ascending: false })
    .limit(20);

  if (pErr) throw pErr;

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{expert.display_name}</h1>
      <p className="text-gray-500 mb-8">
        {expert.handle} · {expert.platform}
      </p>

      <h2 className="text-2xl font-semibold mb-4">Predictions</h2>
      {predictions?.length ? (
        <ul className="space-y-4">
          {predictions.map((p) => (
            <PredictionCard key={p.id} p={p as Prediction} />
          ))}
        </ul>
      ) : (
        <p>No predictions yet.</p>
      )}

      {/* admin-only form */}
      <AddPrediction expertId={expert.id} />
    </>
  );
}