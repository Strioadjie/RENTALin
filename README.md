# RENTALin

RENTALin adalah halaman *landing page* modern dan responsif untuk layanan penyewaan PlayStation dan ruang bermain premium. Website ini dirancang untuk menampilkan fasilitas, daftar game yang sedang tren, serta berbagai tipe ruangan (Regular, VIP, dan VVIP) kepada pelanggan.

## Tentang Proyek

Proyek ini dibangun untuk memberikan pengalaman antarmuka pengguna (UI/UX) yang modern dan interaktif. Dengan menggunakan desain *glassmorphism* dan animasi gulir (scroll), RENTALin bertujuan untuk merepresentasikan kualitas premium dari layanan penyewaan PlayStation itu sendiri. Website ini sepenuhnya statis sehingga sangat cepat dan mudah untuk dikembangkan atau diintegrasikan lebih lanjut ke sistem *backend* di masa mendatang.

## Fitur Utama

- **Desain Responsif:** Tata letak yang dioptimalkan untuk berbagai perangkat, termasuk *smartphone* modern, tablet, dan desktop.
- **Antarmuka Modern:** Desain antarmuka yang bersih dengan efek *glassmorphism*, gradasi CSS, dan animasi transisi yang mulus.
- **Katalog Game Interaktif:** Halaman khusus untuk melihat daftar game lengkap dengan fitur pencarian dan penyaringan kategori (Singleplayer / Multiplayer).
- **Optimasi Performa:** Menggunakan teknik *lazy loading* pada gambar dan *DNS prefetching* untuk memastikan waktu pemuatan halaman yang sangat cepat.

## Teknologi yang Digunakan

- **HTML5 & CSS3:** Struktur semantik dan penataan gaya antarmuka khusus (Vanilla CSS).
- **JavaScript (Vanilla):** Logika DOM untuk filter pencarian, navigasi, dan inisialisasi komponen.
- **Bootstrap 5:** *Framework* CSS untuk sistem *grid* dan utilitas responsif.
- **Swiper.js:** *Library slider* sentuh untuk galeri ruangan dan game yang sedang tren.
- **AOS (Animate On Scroll):** *Library* untuk memberikan efek animasi saat pengguna melakukan *scroll* halaman.

## Instalasi

Proyek ini merupakan website statis, sehingga tidak memerlukan proses *build*, kompilasi, atau instalasi *dependency* yang rumit. 

1. Lakukan *clone* repositori ini ke komputer Anda menggunakan Git:
   ```bash
   git clone https://github.com/Strioadjie/RENTALin.git
   ```
2. Masuk ke dalam direktori proyek:
   ```bash
   cd RENTALin
   ```

## Cara Penggunaan

1. **Penggunaan Standar:** Buka file `index.html` langsung menggunakan *web browser* pilihan Anda (seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge).
2. **Penggunaan untuk Developer:** Jika Anda menggunakan teks editor seperti Visual Studio Code, sangat disarankan untuk membuka proyek ini menggunakan ekstensi **Live Server**. Ini memungkinkan halaman dimuat ulang secara otomatis setiap kali Anda menyimpan perubahan pada kode.
3. **Navigasi Halaman:** Anda dapat mengklik menu "Game List" pada navigasi bar atas, atau langsung membuka file `gamelist.html` untuk melihat fitur filter dan pencarian game.

## Struktur Proyek

```text
RENTALin/
├── css/
│   └── style.css       # Pengaturan gaya (CSS) khusus
├── js/
│   ├── main.js         # Konfigurasi slider dan script global
│   └── gamelist.js     # Logika pencarian, filter, dan modal untuk halaman Game List
├── photo/              # Direktori penyimpanan seluruh aset gambar
├── index.html          # Halaman utama (Landing Page)
└── gamelist.html       # Halaman katalog game
```
