'use client';
import clsx from 'clsx';

export interface Prediction {
  id: string;
  statement: string;
  target_date: string;   // ISO
  status: 'pending' | 'correct' | 'wrong';
}

export default function PredictionCard({ p }: { p: Prediction }) {
  const badge =
    p.status === 'correct' ? 'bg-green-100 text-green-700'
  : p.status === 'wrong'   ? 'bg-red-100 text-red-700'
  :                         'bg-yellow-100 text-yellow-800';

  return (
    <li key={p.id} className="p-4 rounded-xl shadow flex flex-col gap-1 bg-blue-50">
      <p className="font-medium">{p.statement}</p>
      <div className="text-sm text-gray-500 flex gap-3">
        <span>Target {p.target_date.slice(0,10)}</span>
        <span className={clsx('px-2 rounded-full text-xs', badge)}>
          {p.status}
        </span>
      </div>
    </li>
  );
}