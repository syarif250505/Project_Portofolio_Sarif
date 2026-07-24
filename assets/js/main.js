document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEK NAVBAR PADA SCROLL
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. HIGHLIGHT MENU NAVIGASI OTOMATIS SESUAI SCROLL
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar nav a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. EFEK INTERAKTIF KLIK PADA CARD
    const cardItems = document.querySelectorAll('.card-item');
    cardItems.forEach(card => {
        card.addEventListener('click', () => {
            const skillTitle = card.querySelector('h3').innerText;
            const skillDesc = card.querySelector('p').innerText;
            alert(`Keahlian: ${skillTitle}\nDetail: ${skillDesc}`);
        });
    });

    console.log("Portofolio Sarif: JS Loaded Successfully!");
});

// FUNGSI SWITCH TAB PROFIL
function openTab(tabName) {
    // Sembunyikan semua tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active-content');
    });

    // Matikan status active pada semua tombol tab
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Tampilkan tab yang dipilih & beri status active pada tombolnya
    document.getElementById(tabName).classList.add('active-content');
    event.currentTarget.classList.add('active');
}