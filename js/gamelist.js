/* =========================================
   LOGIKA FILTER & SEARCH (GAMELIST)
   ========================================= */

// 1. Definisikan Variabel (Ambil elemen dari HTML)
const btnShowAll = document.getElementById("btn-showall");
const btnSingleplayer = document.getElementById("btn-singleplayer");
const btnMultiplayer = document.getElementById("btn-multiplayer");
const searchInput = document.getElementById("search-input");
const gameCards = document.querySelectorAll(".game-card");

// 2. Event Listeners untuk Tombol Filter
// Saat tombol diklik, jalankan fungsi filterGames
btnShowAll.addEventListener("click", function() {
    setActiveButton(btnShowAll);
    filterGames("all");
});

btnSingleplayer.addEventListener("click", function() {
    setActiveButton(btnSingleplayer);
    filterGames("singleplayer");
});

btnMultiplayer.addEventListener("click", function() {
    setActiveButton(btnMultiplayer);
    filterGames("multiplayer");
});

// 3. Event Listener untuk Search (Pencarian)
searchInput.addEventListener("input", function() {
    const searchQuery = searchInput.value.toLowerCase();
    
    // Kita ambil kategori yang sedang aktif agar pencarian tetap menghormati filter
    // (Opsional, tapi lebih canggih)
    let currentCategory = "all";
    if (btnSingleplayer.classList.contains("active")) currentCategory = "singleplayer";
    if (btnMultiplayer.classList.contains("active")) currentCategory = "multiplayer";

    filterGames(currentCategory, searchQuery);
});

/* =========================================
   FUNGSI UTAMA (LOGIC)
   ========================================= */

// Fungsi untuk menandai tombol mana yang aktif (berwarna merah)
function setActiveButton(activeBtn) {
    // Hapus kelas 'active' dari semua tombol
    [btnShowAll, btnSingleplayer, btnMultiplayer].forEach(btn => {
        btn.classList.remove("active");
    });
    // Tambahkan kelas 'active' ke tombol yang diklik
    activeBtn.classList.add("active");
}

// Fungsi Filter & Search Gabungan
function filterGames(category, searchQuery = "") {
    // Jika searchQuery kosong, ambil nilai dari input box (jaga-jaga)
    if (searchQuery === "") {
        searchQuery = searchInput.value.toLowerCase();
    }

    let delayCounter = 0; // Untuk animasi

    gameCards.forEach(function(card) {
        // Ambil data kategori dan judul dari setiap kartu
        const cardCategory = card.dataset.category;
        const gameTitle = card.querySelector("h3").textContent.toLowerCase();

        // LOGIKA PENGECEKAN:
        // 1. Apakah kategorinya cocok? (atau pilih 'all')
        const isCategoryMatch = (category === "all" || cardCategory.includes(category));
        
        // 2. Apakah judulnya cocok dengan ketikan pencarian?
        const isSearchMatch = gameTitle.includes(searchQuery);

        // Jika KEDUANYA benar, tampilkan kartu
        if (isCategoryMatch && isSearchMatch) {
            card.style.display = ""; // Tampilkan
            
            // --- Bagian Animasi (Opsional) ---
            card.classList.remove("show-animate");
            void card.offsetWidth; // Reset animasi
            card.classList.add("show-animate");
            card.style.animationDelay = `${delayCounter * 0.1}s`;
            delayCounter++;
            
        } else {
            card.style.display = "none"; // Sembunyikan
            card.classList.remove("show-animate");
        }
    });   
}

/* =========================================
   DATABASE INFO GAME
   (Saya sudah isikan sesuai game di screenshot kamu)
   ========================================= */
const gamesData = {
    "Sleeping Dogs": {
        genre: "Action / Open World / Martial Arts",
        dev: "United Front Games",
        year: "2012",
        mode: "Singleplayer",
        rating: "9/10",
        desc: "Bermain sebagai Wei Shen, polisi yang menyamar di Hong Kong yang kejam. Gunakan seni bela diri mematikan dan aksi tembak-menembak untuk menghancurkan organisasi Triad dari dalam tanpa membongkar identitas asli Anda."
    },
    "Shadow of the Tomb Raider": {
        genre: "Action-Adventure / Survival",
        dev: "Eidos-Montréal & Crystal Dynamics",
        year: "2018",
        mode: "Singleplayer",
        rating: "8.5/10",
        desc: "Saksikan momen penentuan Lara Croft menjadi Tomb Raider sesungguhnya. Lara harus bertahan hidup di hutan mematikan, menguasai teknik kamuflase, menaklukkan makam yang mengerikan, dan berpacu dengan waktu untuk menyelamatkan dunia dari kiamat suku Maya."
    },
    "Watch Dogs Legion": {
        genre: "Action / Hacking / Open World",
        dev: "Ubisoft Toronto",
        year: "2020",
        mode: "Singleplayer & Online Co-op",
        rating: "7.5/10",
        desc: "Selamat datang di London masa depan yang diambang kehancuran. Bangun perlawanan DedSec dengan fitur revolusioner 'Play as Anyone': Anda bisa merekrut dan bermain sebagai SIAPA SAJA yang Anda temui di jalanan—mulai dari agen MI6, petarung jalanan, hingga nenek pensiunan yang jago meretas!"
    },
    "Batman Arkham City": {
        genre: "Action-Adventure / Superhero / Stealth",
        dev: "Rocksteady Studios",
        year: "2011",
        mode: "Singleplayer",
        rating: "10/10",
        desc: "Terjebak di dalam Arkham City, sebuah penjara super terbuka yang menampung semua kriminal gila Gotham. Gunakan gadget canggih, kemampuan detektif, dan sistem pertarungan 'Freeflow' yang legendaris untuk menghentikan rencana jahat Joker dan Hugo Strange di malam yang paling gelap bagi sang Ksatria Kegelapan."
    },
    "Grand Theft Auto V": {
        genre: "Open World / Action / Crime",
        dev: "Rockstar North",
        year: "2013",
        mode: "Singleplayer & Online Multiplayer",
        rating: "10/10",
        desc: "Jelajahi Los Santos, kota metropolitan yang luas dan penuh detail. Ikuti kisah epik tiga kriminal dengan kepribadian unik—Michael, Trevor, dan Franklin—saat mereka melakukan serangkaian perampokan berbahaya. Atau, bangun kerajaan kriminal Anda sendiri bersama teman di dunia GTA Online yang terus berkembang."
    },
   "Counter Strike": {
        genre: "FPS / Tactical Shooter",
        dev: "Valve",
        year: "2012", /* Tahun rilis CS:GO */
        mode: "Multiplayer (Online & LAN)",
        rating: "9/10",
        desc: "Game tembak-menembak taktis paling kompetitif di dunia. Pilih tim Anda: Teroris yang ingin meledakkan target, atau Counter-Terrorist yang harus menghentikan mereka. Kerjasama tim, strategi matang, dan aim yang akurat adalah kunci kemenangan. Sangat cocok untuk mabar 5 vs 5!"
    },
    "Fifa26": {
        genre: "Sports / Football Simulation",
        dev: "EA Sports",
        year: "2025",
        mode: "Singleplayer & Multiplayer (Up to 4 Players)",
        rating: "8.5/10",
        desc: "Rasakan evolusi terbaru dari 'The World's Game'. Menggunakan teknologi HyperMotionV untuk gerakan pemain yang ultra-realistis, update transfer pemain musim terbaru, dan atmosfer stadion yang hidup. Sangat cocok untuk adu skill dan turnamen mini melawan teman-teman Anda!"
    },
    "Need For Speed": {
        genre: "Racing / Arcade / Action",
        dev: "Criterion Games",
        year: "2020", /* Tahun rilis versi Remastered */
        mode: "Singleplayer & Multiplayer (Cross-Play)",
        rating: "8.5/10",
        desc: "Rasakan sensasi kecepatan tinggi dalam perseteruan abadi antara pelanggar hukum dan polisi. Pilih sisi Anda: jadilah pembalap liar dengan mobil super canggih, atau polisi elit dengan persenjataan taktis untuk menghentikan balapan. Hancurkan lawan atau tangkap buronan dengan kecepatan penuh!"
    },
    "Sonic 3": {
        genre: "Platformer / Action / Adventure",
        dev: "SEGA & Sonic Team",
        year: "1994 (Remastered 2022)",
        mode: "Singleplayer & 2-Player Co-op",
        rating: "9/10",
        desc: "Kembali bernostalgia dengan landak biru tercepat di dunia! Bersama Tails dan Knuckles, hentikan rencana jahat Dr. Robotnik yang ingin mencuri Master Emerald. Nikmati level ikonik dengan kecepatan supersonik, loop-de-loop yang pusing, dan pertarungan bos yang epik. Sangat cocok untuk segala usia!"
    },
    "God Of War": {
        genre: "Action-Adventure / Mythology",
        dev: "Santa Monica Studio",
        year: "2022", /* Tahun rilis Ragnarok */
        mode: "Singleplayer",
        rating: "10/10",
        desc: "Fimbulwinter telah tiba. Kratos dan Atreus harus menjelajahi Sembilan Alam untuk mencari jawaban sementara pasukan Asgard bersiap menghadapi pertempuran yang diramalkan akan mengakhiri dunia. Gunakan senjata Leviathan Axe dan Blades of Chaos dalam pertarungan dewa-dewa yang brutal dan penuh emosi."
    },
    "Spiderman 2": {
        genre: "Action-Adventure / Superhero / Open World",
        dev: "Insomniac Games",
        year: "2023",
        mode: "Singleplayer",
        rating: "9.5/10",
        desc: "Mainkan dua Spider-Man sekaligus! Berganti peran antara Peter Parker dan Miles Morales secara instan saat menjelajahi New York yang lebih luas. Hadapi ancaman mematikan dari Venom, Kraven the Hunter, dan The Lizard. Rasakan kekuatan Symbiote hitam yang brutal dan ayunan jaring 'Web Wings' yang super cepat."
    },
    "It Take Two": {
        genre: "Co-op Adventure / Platformer / Puzzle",
        dev: "Hazelight Studios",
        year: "2021 (Game of the Year)",
        mode: "Multiplayer Only (Wajib Berdua)",
        rating: "10/10 (Masterpiece)",
        desc: "Pemenang penghargaan Game Terbaik Dunia (GOTY). Game ini TIDAK BISA dimainkan sendirian! Ajak teman atau pasangan Anda untuk mengendalikan Cody dan May, suami istri yang diubah menjadi boneka. Setiap level menawarkan gameplay yang selalu berubah-ubah dan teka-teki yang hanya bisa diselesaikan dengan komunikasi dan kerjasama tim yang sempurna."
    }
};

/* =========================================
   LOGIC POPUP MODAL
   ========================================= */
const myModal = new bootstrap.Modal(document.getElementById('gameDetailModal'));

gameCards.forEach(card => {
    card.addEventListener('click', function() {
        // 1. Ambil data dari kartu yang diklik
        const title = this.querySelector('h3').innerText;
        const imgSource = this.querySelector('img').src;
        
        // 2. Cari info di database 'gamesData'
        // Kalau datanya ga ada, pakai data default biar ga error
        const info = gamesData[title] || {
            genre: "Unknown",
            dev: "-",
            year: "-",
            mode: "-",
            rating: "-",
            desc: "Informasi detail belum tersedia untuk game ini."
        };

        // 3. Masukkan data ke dalam Modal HTML
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-img').src = imgSource;
        
        document.getElementById('modal-genre').innerText = info.genre;
        document.getElementById('modal-dev').innerText = info.dev;
        document.getElementById('modal-year').innerText = info.year;
        document.getElementById('modal-mode').innerText = info.mode;
        document.getElementById('modal-rating').innerText = info.rating;
        document.getElementById('modal-desc').innerText = info.desc;

        // 4. Tampilkan Modal
        myModal.show();
    });
});