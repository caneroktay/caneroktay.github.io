// translation.js

const translations = {
    'tr': {
        navLink1: 'Ana Sayfa',
        navLink2: 'Hakkımda',
        navLink3: 'Projeler',
        contactLink: 'İletişim',
        heroTitle: 'Yapım Aşamasında!...',
        heroMetaText: 'Yakında tamamlanır sanırım. Tamamlanınca içinde neler olacak acaba?',
        authorName: 'Eylül Oktay',
        authorTag: 'Eş / Takipçi',
        articleTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        articleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        moreArticlesButton: 'Daha Fazla Makale',
        footerLink1: 'Ana Sayfa',
        footerLink2: 'Hakkımda',
        footerLink3: 'Projeler',
        footerLink4: 'İletişim',
        copyrightText: '&copy <a href="">caneroktay.com</a> Tüm Hakları Saklıdır.',
        kontaktTitle: 'Bana Yaz!',
        kontaktName: 'İsim',
        kontaktEmail: 'E-posta',
        kontaktMessage: 'Mesajınız',
        kontaktSubmit: 'Gönder'
    },
    'de': {
        navLink1: 'Startseite',
        navLink2: 'Über mich',
        navLink3: 'Projekte',
        contactLink: 'Kontakt',
        heroTitle: 'Im Aufbau!...',
        heroMetaText: 'Ich denke, es wird bald fertig sein. Was wird es wohl enthalten, wenn es fertig ist?',
        authorName: 'Eylül Oktay',
        authorTag: 'Ehefrau / Follower',
        articleTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        articleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        moreArticlesButton: 'Weitere Artikel',
        footerLink1: 'Startseite',
        footerLink2: 'Über mich',
        footerLink3: 'Projekte',
        footerLink4: 'Kontakt',
        copyrightText: '&copy <a href="">caneroktay.com</a> Alle Rechte vorbehalten.',
        kontaktTitle: 'Schreib mir!',
        kontaktName: 'Name',
        kontaktEmail: 'E-Mail',
        kontaktMessage: 'Ihre Nachricht',
        kontaktSubmit: 'Abschicken'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'copyrightText') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Buton metnini güncelleyin
    const langToggleButton = document.getElementById('lang-toggle');
    if (langToggleButton) {
        langToggleButton.textContent = lang === 'tr' ? 'DE / TR' : 'TR / DE'; // Mevcut dil TR ise butonda DE/TR yazsın (DE'ye geçiş için), DE ise TR/DE yazsın (TR'ye geçiş için)
        langToggleButton.setAttribute('data-current-lang', lang);
    }
    localStorage.setItem('selectedLanguage', lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'tr'; // Varsayılan olarak Türkçe
    const newLang = currentLang === 'tr' ? 'de' : 'tr';
    setLanguage(newLang);
}

// Dil değiştirme butonu için olay dinleyicisi
document.addEventListener('DOMContentLoaded', () => {
    const langToggleButton = document.getElementById('lang-toggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', (event) => {
            event.preventDefault(); // Varsayılan bağlantı davranışını engelle
            toggleLanguage();
        });
    }

    // Sayfa yüklendiğinde başlangıç dilini ayarla
    const initialLang = localStorage.getItem('selectedLanguage') || 'de';
    setLanguage(initialLang);
});
