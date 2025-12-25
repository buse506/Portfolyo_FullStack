// script.js

const menuBtn = document.getElementById('christmasMenuBtn');
const menuLinks = document.getElementById('menuLinks');

// Eğer sayfada bu elementler varsa çalıştır (Hata almamak için önemli)
if (menuBtn && menuLinks) {
    menuBtn.addEventListener('click', (e) => {
        // Tıklamanın dışarıya yayılmasını engelle (document click ile çakışmasın)
        e.stopPropagation(); 
        menuLinks.classList.toggle('active');
    });

    // Menü dışına tıklanınca kapatma mantığı
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuLinks.contains(event.target);
        const isClickOnButton = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            menuLinks.classList.remove('active');
        }
    });
}