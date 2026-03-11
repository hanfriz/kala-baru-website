export default function CatanPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Catan – How to Play
        </h1>

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-4">
          Players: 3–4 players
        </p>

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-8">
          Playing time: 60–90 minutes
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Game Objective
        </h2>

        <p className="dark:text-gray-300 mb-6">
          The goal of Catan is to be the first player to reach 
          <b> 10 victory points</b>. Players earn points by building 
          settlements, upgrading them into cities, and achieving 
          special achievements like the longest road.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Prepare the Board
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>Shuffle the hexagonal terrain tiles.</li>
          <li>Build the island by placing the tiles in a hex shape.</li>
          <li>Place number tokens on top of each terrain tile.</li>
          <li>The desert tile does not receive a number token.</li>
          <li>Place the robber on the desert tile.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Initial Placement
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>Each player places one settlement and one road.</li>
          <li>Players take turns placing settlements clockwise.</li>
          <li>Then players place their second settlement counter-clockwise.</li>
          <li>The second settlement produces starting resources.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Resource Production
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>At the beginning of each turn, the player rolls two dice.</li>
          <li>The number rolled determines which tiles produce resources.</li>
          <li>If a player has a settlement next to that tile, they receive resources.</li>
          <li>Cities produce two resources instead of one.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Trading Resources
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Players can trade resources with other players to obtain the
          materials they need. Trades are negotiated freely between players.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Building
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>Road – expands your network.</li>
          <li>Settlement – gives victory points and resources.</li>
          <li>City – upgrades a settlement and produces double resources.</li>
          <li>Development cards – give special abilities.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 6 – The Robber
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>If a player rolls a 7, the robber activates.</li>
          <li>Players with more than 7 cards must discard half.</li>
          <li>The active player moves the robber to another tile.</li>
          <li>That tile no longer produces resources.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning the Game
        </h2>

        <p className="dark:text-gray-300">
          The first player to reach <b>10 victory points</b> wins the game.
        </p>
        <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://www.dicebreaker.com/games/catan-1/how-to/how-to-play-catan-board-game"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play Catan – Dicebreaker
        </a>
        </p>
      </div>

    </main>
  );
}