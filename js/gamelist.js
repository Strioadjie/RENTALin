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