  // app/experts/page.tsx
export const dynamic = 'force-dynamic';   // always fetch live

import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export default async function Experts() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: experts, error } = await supabase
    .from('experts')
    .select('id, display_name')
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) throw error;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Experts</h1>

      <ul className="space-y-4">
        {experts.map((e) => (
          <li key={e.id}>
            <Link
              href={`/experts/${e.id}`}
              className="block p-4 rounded-xl bg-blue-50 hover:bg-blue-100 shadow"
            >
              <span className="font-semibold">{e.display_name}</span>
              <span className="text-sm text-gray-500 ml-2">
                Accuracy: {e.overall_accuracy ?? '—'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}