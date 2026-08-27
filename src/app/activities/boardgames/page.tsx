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

          {/* DIE GÄRTEN VON ALHAMBRA */}
          <Link
          href="/activities/boardgames/diegartenvonalhambra"
          className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
          <img
           src="/activities/boardgames/diegartenvonalhambra.jpeg"
          className="w-full h-[220px] object-cover"
          alt="Die Gärten von Alhambra"
        />

          <div className="p-6">
             <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
              Die Gärten von Alhambra
        </h2>

          <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
          A strategic tile-placement board game where players design beautiful gardens around the Alhambra Palace to earn the highest score.
        </p>

          <p className="text-xs text-gray-500 mt-3">
      2–4 players • Around 45 minutes
       </p>
       </div>
      </Link>

      {/* KELTIS */}
      <Link
      href="/activities/boardgames/keltis"
      className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
      >
      <img
      src="/activities/boardgames/keltis.webp"
      className="w-full h-[220px] object-cover"
      alt="Keltis"
     />

      <div className="p-6">
      <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Keltis
      </h2>

      <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A strategic card game where players create ascending or descending paths to collect points and valuable bonuses.
      </p>

      <p className="text-xs text-gray-500 mt-3">
      2–4 players • Around 30–45 minutes
       </p>
       </div>
      </Link>

      {/* TIKAL */}
    <Link
    href="/activities/boardgames/tikal"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
>
    <img
    src="/activities/boardgames/tikal.jpg"
    className="w-full h-[220px] object-cover"
    alt="Tikal"
  />

  <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Tikal
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      An award-winning strategy game where players explore ancient Mayan ruins, excavate temples, collect treasures, and compete for control of archaeological sites.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–4 players • Around 90 minutes
    </p>
  </div>
</Link>

      {/* SAGALAND */}
    <Link
    href="/activities/boardgames/sagaland"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
    <img
    src="/activities/boardgames/sagaland.jpeg"
    className="w-full h-[220px] object-cover"
    alt="Sagaland"
    />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Sagaland
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A classic family adventure game where players explore an enchanted forest, memorize hidden treasures, and race to impress the King.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–6 players • Around 45–60 minutes
    </p>
  </div>
</Link>


    {/* HALLI GALLI */}
    <Link
    href="/activities/boardgames/halligalli"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      <img
      src="/activities/boardgames/halligalli.jpg"
      className="w-full h-[220px] object-cover"
      alt="Halli Galli"
      />

     <div className="p-6">
      <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Halli Galli
      </h2>

      <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A fast-paced reaction game where players race to ring the bell whenever exactly five matching fruits appear on the table.
      </p>

      <p className="text-xs text-gray-500 mt-3">
      2–6 players • Around 15 minutes
      </p>
      </div>
      </Link>


      {/* UNO NO MERCY */}
      <Link
       href="/activities/boardgames/unonomercy"
      className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
      >
      <img
      src="/activities/boardgames/unonomercy.jpg"
      className="w-full h-[220px] object-cover"
      alt="UNO No Mercy"
      />

      <div className="p-6">
      <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      UNO No Mercy
      </h2>

      <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A brutal twist on classic UNO featuring powerful action cards, stacking penalties, and the Mercy Rule for nonstop chaos.
      </p>

      <p className="text-xs text-gray-500 mt-3">
      2–6 players • Around 30 minutes
      </p>
      </div>
      </Link>

      {/* DOS */}
    <Link
    href="/activities/boardgames/unodos"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
    <img
    src="/activities/boardgames/unodos.jpg"
    className="w-full h-[220px] object-cover"
    alt="DOS"
    />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      DOS
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A clever twist on UNO where players match numbers using one card or a combination of two cards to outsmart their opponents.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–4 players • Around 30 minutes
    </p>
    </div>
    </Link>


      {/* UNO TEAMS */}
    <Link
    href="/activities/boardgames/unoteams"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
    <img
    src="/activities/boardgames/unoteams.webp"
    className="w-full h-[220px] object-cover"
    alt="UNO Teams"
      />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      UNO Teams
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A cooperative twist on classic UNO where teammates work together, support each other, and strategize to defeat the opposing team.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      4 players • Around 30 minutes
    </p>
  </div>
</Link>

      {/* UNO FLIP! */}
    <Link
    href="/activities/boardgames/unoflip"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
    <img
    src="/activities/boardgames/unoflip.jpeg"
    className="w-full h-[220px] object-cover"
    alt="UNO Flip!"
    />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      UNO Flip!
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A dynamic twist on classic UNO where the entire game flips between Light and Dark sides, introducing new action cards and unexpected challenges.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–10 players • Around 30 minutes
      </p>
     </div>
    </Link>

    {/* UNO STACKO */}
    <Link
    href="/activities/boardgames/unostacko"
    className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
    <img
    src="/activities/boardgames/unostacko.jpeg"
    className="w-full h-[220px] object-cover"
    alt="UNO Stacko"
    />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      UNO Stacko
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A fun stacking game that combines the excitement of UNO with the challenge of carefully removing and balancing colorful blocks.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–10 players • Around 20 minutes
    </p>
    </div>
    </Link>
       {/* BACKGAMMON */}
      <Link
  href="/activities/boardgames/backgammon"
  className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
>
  <img
    src="/activities/boardgames/backgammon.jpg"
    className="w-full h-[220px] object-cover"
    alt="Backgammon"
  />

  <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Backgammon
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      A timeless strategy game where players race to move all their pieces home while blocking and capturing their opponent.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2 players • Around 30–60 minutes
    </p>
  </div>
</Link>


{/* DIE GOLDINSEL */}
  <Link
  href="/activities/boardgames/diegoldinsel"
  className="bg-white dark:bg-[#2b2b2b] rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
  >
  <img
    src="/activities/boardgames/diegoldinsel.webp"
    className="w-full h-[220px] object-cover"
    alt="Die Goldinsel"
  />

    <div className="p-6">
    <h2 className="text-xl font-semibold text-[#3A2A1F] dark:text-white">
      Die Goldinsel
    </h2>

    <p className="text-[#6B5A48] dark:text-gray-300 text-sm mt-2">
      An exciting treasure-hunting adventure where players explore a mysterious island, collect gold, and race back safely with the greatest fortune.
    </p>

    <p className="text-xs text-gray-500 mt-3">
      2–4 players • Around 45–60 minutes
    </p>
  </div>
</Link>



</div> {/* END GAME GRID */}

    
  
      </div>
    </main>
  );
}