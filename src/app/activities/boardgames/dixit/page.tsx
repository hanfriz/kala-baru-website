export default function DixitPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Dixit
        </h1>

        <p className="mb-4 text-[#5C4A3A] dark:text-gray-300">
          Players: 3–6 • Playing Time: 30 minutes
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Objective
        </h2>

        <p className="dark:text-gray-300">
          Guess the storyteller’s card based on clues.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          How to Play
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300">
          <li>The storyteller gives a clue for one of their cards.</li>
          <li>Other players choose a card matching the clue.</li>
          <li>Cards are shuffled and revealed.</li>
          <li>Players vote for the storyteller’s card.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Players score points for correct guesses. The highest score wins.
        </p>
                  <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://officialgamerules.org/game-rules/dixit/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play Dixit 
        </a>
        </p>
      </div>

    </main>
  );
}