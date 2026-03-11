import Link from "next/link";

export default function BoardGames() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold text-[#3A2A1F] dark:text-[#FDF1DD] mb-6">
          Board Games at Kala Baru
        </h1>

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-16">
          Discover the board games available at Kala Baru and learn how to play them before starting your match.
          Please treat all games with care. Return all pieces and cards to the box after playing. 
          If something is missing or damaged, please inform our staff. 
          Keep food and drinks away from the games as much as possible. 
          Feel free to try different games and have fun!
        </p>

        {/* GAME GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CATAN */}
          <Link
            href="/activities/boardgames/catan"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/catan.jpg"
              className="w-full h-[220px] object-cover"
              alt="Catan"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                Catan
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                Strategy game where players build settlements and trade resources.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                3-4 players • 60-90 minutes
              </p>
            </div>
          </Link>

          {/* UNO */}
          <Link
            href="/activities/boardgames/uno"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/uno.jpg"
              className="w-full h-[220px] object-cover"
              alt="UNO"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                UNO
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                Fast paced card game perfect for groups and casual fun.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                2-10 players • 20 minutes
              </p>
            </div>
          </Link>

          {/* MONOPOLY */}
          <Link
            href="/activities/boardgames/monopoly"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/monopoly.jpg"
              className="w-full h-[220px] object-cover"
              alt="Monopoly"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                Monopoly
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                Classic property trading game where players compete to dominate the board.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                2-6 players • 60-120 minutes
              </p>
            </div>
          </Link>

          {/* DIXIT */}
          <Link
            href="/activities/boardgames/dixit"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/dixit.jpg"
              className="w-full h-[220px] object-cover"
              alt="Dixit"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                Dixit
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                Creative storytelling game where players use illustrated cards to tell stories and guess each other's cards.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                3-8 players • Around 30 minutes
              </p>
            </div>
          </Link>

          {/* SCOTLAND YARD */}
          <Link
            href="/activities/boardgames/scotlandyard"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/scotlandyard.jpg"
              className="w-full h-[220px] object-cover"
              alt="Scotland Yard"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                Scotland Yard
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                Detective game where players work together to catch a criminal on the streets of London.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                3-6 players • Around 45-60 minutes
              </p>
            </div>
          </Link>

          {/* CLUEDO */}
          <Link
            href="/activities/boardgames/cluedo"
            className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="/activities/boardgames/cluedo.jpg"
              className="w-full h-[220px] object-cover"
              alt="Cluedo"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
                Cluedo
              </h2>

              <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
                A classic mystery board game where players become detectives trying to solve a murder.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                2-6 players • Around 45-60 minutes
              </p>
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}