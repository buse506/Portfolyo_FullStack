// --- YILBAŞI MENÜSÜ AÇMA/KAPAMA ---

const menuBtn = document.getElementById('christmasMenuBtn');
const menuLinks = document.getElementById('menuLinks');

// Butona tıklama olayını dinle
menuBtn.addEventListener('click', () => {
    // 'active' sınıfını menüye ekle veya çıkar (toggle)
    menuLinks.classList.toggle('active');
});

// (İsteğe bağlı) Menü dışına tıklanınca menüyü kapat
document.addEventListener('click', (event) => {
    // Eğer tıklanan yer menü butonu veya menünün kendisi değilse
    if (!menuBtn.contains(event.target) && !menuLinks.contains(event.target)) {
        menuLinks.classList.remove('active');
    }
});