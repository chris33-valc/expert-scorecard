export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        Track the batting average of market “experts”.
      </h1>

      <p className="mb-4 text-lg">
        We score public predictions from finance, crypto, and business
        influencers so you know who’s worth listening to.
      </p>

      <p className="text-gray-600">
        Browse the{' '}
        <a href="/experts" className="underline text-blue-600">
          Experts directory
        </a>{' '}
        or jump to the{' '}
        <a href="/leaderboard" className="underline text-blue-600">
          Leaderboard
        </a>
        .
      </p>
    </>
  );
}
