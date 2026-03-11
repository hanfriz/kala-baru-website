export default function UnoPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO
        </h1>

        <p className="mb-4 text-[#5C4A3A] dark:text-gray-300">
          Players: 2–10 • Playing Time: 20 minutes
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Objective
        </h2>

        <p className="dark:text-gray-300">
          Be the first player to get rid of all your cards.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Setup
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300">
          <li>Each player receives 7 cards.</li>
          <li>Place the remaining cards face down as a draw pile.</li>
          <li>Flip the top card to start the discard pile.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          How to Play
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300">
          <li>Match the top card by color or number.</li>
          <li>Use action cards like Skip, Reverse, and Draw Two.</li>
          <li>Say “UNO” when you have one card left.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          The first player who discards all their cards wins the round.
        </p>
             <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://www.dicebreaker.com/games/uno/how-to/how-to-play-uno"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play UNO
        </a>
        </p>
      </div>

    </main>
  );
}