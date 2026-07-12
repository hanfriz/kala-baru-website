export default function MonopolyPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Monopoly
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Monopoly adalah permainan papan strategi ekonomi di mana tujuan utama
          pemain adalah menjadi orang terkaya dengan membeli properti,
          memungut uang sewa dari pemain lain, serta membuat seluruh lawan
          bangkrut.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pilih satu pemain sebagai <b>Bankir</b> yang bertugas mengelola
            uang, kartu kepemilikan, rumah, hotel, dan transaksi dengan Bank.
          </li>

          <li>
            Bankir membagikan modal awal kepada setiap pemain sesuai aturan
            edisi Monopoly yang digunakan.
          </li>

          <li>
            Kocok kartu <b>Kesempatan (Chance)</b> dan
            <b> Dana Umum (Community Chest)</b>, lalu letakkan di tempatnya
            masing-masing.
          </li>

          <li>
            Setiap pemain memilih satu pion dan meletakkannya di petak
            <b> START / GO</b>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pada giliran Anda, lempar dua buah dadu lalu gerakkan pion
            searah jarum jam sesuai jumlah angka yang muncul.
          </li>

          <li>
            Lakukan aksi sesuai petak tempat Anda berhenti, seperti membeli
            properti, membayar sewa, mengambil kartu, atau membayar pajak.
          </li>

          <li>
            Jika Anda mendapatkan <b>dadu kembar</b>, Anda memperoleh satu
            giliran tambahan.
          </li>

          <li>
            Namun, jika mendapatkan dadu kembar sebanyak
            <b> tiga kali berturut-turut</b>, Anda langsung masuk Penjara.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Aksi Berdasarkan Petak
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">
          <li>
            <b>Properti yang belum dimiliki</b> dapat dibeli dari Bank sesuai
            harga yang tertera. Jika tidak dibeli, properti akan dilelang.
          </li>

          <li>
            <b>Properti milik pemain lain</b> mengharuskan Anda membayar
            uang sewa kepada pemiliknya.
          </li>

          <li>
            <b>START (GO)</b> memberikan bonus uang setiap kali Anda
            melewati atau berhenti di petak tersebut.
          </li>

          <li>
            <b>Kesempatan (Chance)</b> dan
            <b> Dana Umum (Community Chest)</b> mengharuskan Anda mengambil
            kartu dan mengikuti instruksi yang tertulis.
          </li>

          <li>
            <b>Pajak</b> mengharuskan Anda membayar sejumlah uang kepada Bank.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Membangun Properti
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Untuk membangun, Anda harus memiliki seluruh properti dalam
            satu kelompok warna (Monopoli Warna).
          </li>

          <li>
            Setelah itu Anda dapat membeli <b>Rumah</b> dan kemudian
            meningkatkannya menjadi <b>Hotel</b>.
          </li>

          <li>
            Semakin banyak bangunan yang dimiliki, semakin tinggi pula
            uang sewa yang harus dibayar lawan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Penjara dan Strategi Tambahan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">
          <li>
            Anda masuk Penjara jika berhenti di petak
            <b> Go to Jail</b>, mendapat kartu yang memerintahkan masuk
            Penjara, atau melempar dadu kembar tiga kali berturut-turut.
          </li>

          <li>
            Anda dapat keluar dari Penjara dengan membayar denda,
            menggunakan kartu <b>Get Out of Jail Free</b>,
            atau berhasil melempar dadu kembar.
          </li>

          <li>
            Jika kekurangan uang, Anda dapat
            <b> menggadaikan properti</b> kepada Bank.
            Selama digadaikan, properti tersebut tidak menghasilkan uang sewa.
          </li>

          <li>
            Pemain juga dapat melakukan jual beli atau tukar-menukar
            properti dengan pemain lain sesuai kesepakatan bersama.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Permainan berakhir ketika hanya tersisa satu pemain yang belum
          bangkrut.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300">
          <li>
            Jika seluruh pemain lain bangkrut, pemain yang masih bertahan
            menjadi pemenang.
          </li>

          <li>
            Jika sejak awal disepakati ada batas waktu permainan,
            pemenang ditentukan berdasarkan jumlah kekayaan terbesar
            (uang tunai, nilai properti, rumah, dan hotel).
          </li>
        </ul>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.dicebreaker.com/games/monopoly/how-to/how-to-play-monopoly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Monopoly – Dicebreaker
          </a>
        </p>

      </div>

    </main>
  );
}