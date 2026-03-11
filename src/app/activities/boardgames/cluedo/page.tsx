export default function CluedoPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Cluedo – How to Play
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Cluedo is a mystery deduction game where players try to solve a murder.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Prepare the Mystery
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>Randomly choose one suspect card.</li>
          <li>Choose one weapon card.</li>
          <li>Choose one room card.</li>
          <li>Place them secretly in the solution envelope.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Deal Remaining Cards
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Shuffle the remaining cards and distribute them among players.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Move Around the Mansion
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Players roll dice and move through rooms of the mansion.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Make a Suggestion
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Suggest a suspect, weapon, and room.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Other Players Disprove
        </h2>

        <p className="dark:text-gray-300 mb-6">
          If another player has one of those cards, they must show it privately.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          When you are confident, make an accusation.
          If correct, you win the game.
        </p>
           <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://www.dicebreaker.com/games/cluedo/how-to/how-to-play-cluedo-board-game"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play Cluedo
        </a>
        </p>
      </div>

    </main>
  );
}