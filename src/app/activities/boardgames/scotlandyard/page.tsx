export default function ScotlandYardPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Scotland Yard – How to Play
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Scotland Yard is a deduction game where one player becomes the 
          mysterious criminal <b>Mr. X</b> and the other players become detectives.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Choose Roles
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>One player becomes Mr. X.</li>
          <li>All other players become detectives.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Starting Positions
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Each player draws a random starting location on the map.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Mr. X Moves Secretly
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6">
          <li>Mr. X writes down his moves secretly.</li>
          <li>He reveals only the type of transport used.</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Detectives Move
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Detectives move around the map trying to deduce Mr. X's location.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Reveal Rounds
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Occasionally Mr. X must reveal his position on the board.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Detectives win if they land on Mr. X’s location.
          Mr. X wins if he escapes until the final round.
        </p>
         <p className="mt-2 text-sm">
        Other instruction source:{" "}
        <a
        href="https://www.ultraboardgames.com/scotland-yard/game-rules.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline hover:text-amber-800"
        >
    How to Play Scotland Yard
        </a>
        </p>
      </div>

    </main>
  );
}