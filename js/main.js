/* =========================================
   1. TRENDING GAMES SLIDER
   ========================================= */
const trendingSwiper = new Swiper('.trending-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true, /* Pastikan jumlah gambar di HTML minimal 6 agar loop lancar */
    
    // Autoplay: Geser sendiri kalau didiamkan
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 15,     /* Kemiringan (Jangan 50, 15 biar elegan) */
        stretch: 0,
        depth: 300,     /* Kedalaman 3D */
        modifier: 1,
        slideShadows: false, /* Matikan bayangan hitam yg bikin jelek */
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* =========================================
   2. ROOM SECTION SLIDER
   ========================================= */
const roomSwiper = new Swiper('.room-swiper', {
    loop: true,
    spaceBetween: 30, // Jarak antar kartu
    centeredSlides: true,
    
    autoplay: {
        delay: 4000, // Sedikit lebih lambat dari trending
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    /* Update Breakpoints agar responsif */
breakpoints: {
    // Layar HP Kecil (Portrait)
    0: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    // Layar Tablet/HP Tidur (Landscape)
    576: {
        slidesPerView: 1.5, // Bisa ngintip kartu sebelahnya dikit
        spaceBetween: 20,
    },
    // Layar Laptop/PC
    992: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
}
});