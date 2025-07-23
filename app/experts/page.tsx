import Link from 'next/link';

const MOCK = [
  { id: '1', name: 'Finance Guru Alice', accuracy: '—' },
  { id: '2', name: 'Crypto Ninja Bob', accuracy: '—' },
];

export default function Experts() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Experts</h1>

      <ul className="space-y-4">
        {MOCK.map(e => (
          <li key={e.id}>
            <Link
              href={`/experts/${e.id}`}
              className="block p-4 rounded-xl bg-blue-50 hover:bg-blue-100 shadow"
            >
              <span className="font-semibold">{e.name}</span>
              <span className="text-sm text-gray-500 ml-2">
                Accuracy: {e.accuracy}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}