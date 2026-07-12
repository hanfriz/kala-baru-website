export default function CluedoPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Cluedo
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Cluedo adalah permainan papan misteri klasik di mana Anda berperan
          sebagai seorang detektif yang berusaha memecahkan sebuah kasus
          pembunuhan. Tujuan Anda adalah menjadi pemain pertama yang berhasil
          menebak dengan tepat <b>siapa pelakunya, senjata yang digunakan,
          dan di ruangan mana pembunuhan terjadi.</b>
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Setiap pemain memilih satu karakter dan meletakkan pionnya di
            posisi awal pada papan permainan.
          </li>

          <li>
            Letakkan semua pion senjata secara acak di berbagai ruangan
            pada papan permainan.
          </li>

          <li>
            Pisahkan kartu menjadi tiga kelompok:
            <b> Tersangka, Senjata, dan Ruangan.</b>
          </li>

          <li>
            Kocok masing-masing kelompok secara terpisah, kemudian ambil
            satu kartu dari setiap kelompok secara acak dan masukkan ke
            dalam <b>Amplop Kasus</b> tanpa melihat isinya.
          </li>

          <li>
            Amplop tersebut berisi jawaban yang harus ditemukan selama permainan.
          </li>

          <li>
            Kocok seluruh kartu yang tersisa lalu bagikan secara merata
            kepada semua pemain.
          </li>

          <li>
            Setiap pemain menerima <b>Detective Notebook</b>. Beri tanda silang
            pada semua kartu yang Anda miliki karena kartu tersebut sudah
            dipastikan bukan jawaban.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Bergerak di Papan Permainan
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Giliran berjalan searah jarum jam. Pada giliran Anda:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Lempar kedua dadu.</li>

          <li>
            Gerakkan pion sesuai jumlah angka yang muncul.
          </li>

          <li>
            Anda boleh bergerak secara horizontal maupun vertikal.
          </li>

          <li>
            Anda tidak boleh melewati kotak yang sama dua kali dalam satu
            giliran maupun melewati kotak yang ditempati pemain lain.
          </li>

          <li>
            Jika berhasil masuk ke sebuah ruangan, pergerakan Anda langsung
            berhenti.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Membuat Saran (Suggestion)
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Saat berada di dalam sebuah ruangan, Anda dapat membuat dugaan
          mengenai kasus pembunuhan.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Sebutkan satu <b>tersangka</b>, satu <b>senjata</b>, dan
            ruangan tempat Anda berada.
          </li>

          <li>
            Contoh:
            <br />
            <i>
              "Saya menduga Kolonel Mustard melakukan pembunuhan menggunakan
              tali di Ruang Tamu."
            </i>
          </li>

          <li>
            Karakter dan senjata yang Anda sebutkan langsung dipindahkan
            ke ruangan tersebut.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Pembuktian
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pemain di sebelah kiri Anda memeriksa apakah ia memiliki salah
            satu kartu yang Anda sebutkan.
          </li>

          <li>
            Jika memiliki satu atau lebih kartu yang cocok, ia hanya perlu
            menunjukkan <b>satu kartu</b> secara diam-diam kepada Anda.
          </li>

          <li>
            Jika tidak memiliki kartu yang sesuai, giliran berpindah ke
            pemain berikutnya hingga ada yang dapat membantah dugaan Anda,
            atau tidak ada satu pun pemain yang memiliki kartu tersebut.
          </li>

          <li>
            Catat semua informasi yang Anda peroleh pada
            <b> Detective Notebook</b> untuk mempersempit kemungkinan jawaban.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Tuduhan Akhir (Final Accusation)
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Dalam Cluedo terdapat dua jenis tebakan:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            <b>Suggestion (Saran)</b> digunakan untuk mencari petunjuk
            selama permainan.
          </li>

          <li>
            <b>Accusation (Tuduhan Akhir)</b> dilakukan ketika Anda sudah
            yakin 100% dengan jawabannya.
          </li>

          <li>
            Saat melakukan Tuduhan Akhir, sebutkan tersangka,
            senjata, dan ruangan yang Anda yakini benar.
          </li>

          <li>
            Setelah itu buka Amplop Kasus secara diam-diam dan
            cocokkan dengan jawaban Anda.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Jika seluruh tebakan Anda benar, Anda memenangkan permainan.
          </li>

          <li>
            Jika salah, Anda kalah dan tidak dapat melakukan Tuduhan Akhir
            lagi. Namun, Anda tetap berada dalam permainan untuk
            menunjukkan kartu kepada pemain lain jika diminta.
          </li>
        </ul>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.dicebreaker.com/games/cluedo/how-to/how-to-play-cluedo-board-game"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Cluedo
          </a>
        </p>

      </div>

    </main>
  );
}