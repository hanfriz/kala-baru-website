export default function MonopolyPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Monopoly
        </h1>

        <p className="mb-4 text-[#5C4A3A] dark:text-gray-300">
          Players: 2–6 • Playing Time: 60–120 minutes
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Objective
        </h2>

        <p className="dark:text-gray-300">
          Become the richest player by buying properties and collecting rent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          How to Play
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300">
          <li>Players roll dice to move around the board.</li>
          <li>Buy properties when landing on them.</li>
          <li>Charge rent to other players.</li>
          <li>Build houses and hotels.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          The last player remaining after others go bankrupt wins the game.
        </p>
        <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://www.dicebreaker.com/games/monopoly/how-to/how-to-play-monopoly"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play Monopoly – Dicebreaker
        </a>
        </p>
      </div>

    </main>
  );
}