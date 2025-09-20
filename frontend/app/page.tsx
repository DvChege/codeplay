import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-6 text-primary">CodePlay</h1>
      <p className="text-xl mb-8 max-w-xl text-center">
        The interactive coding platform to solve challenges, run code, and climb the leaderboard.
      </p>
      <Link
        href="/auth/register"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </main>
  );
}