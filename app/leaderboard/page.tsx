const MOCK = [
    { rank: 1, name: 'Finance Guru Alice', accuracy: '72%' },
    { rank: 2, name: 'Crypto Ninja Bob', accuracy: '68%' },
  ];
  
  export default function Leaderboard() {
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
  
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Rank</th>
              <th>Name</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {MOCK.map(row => (
              <tr key={row.rank} className="odd:bg-blue-50">
                <td className="py-2 pr-4">{row.rank}</td>
                <td>{row.name}</td>
                <td>{row.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }