// translation.js

async function setLanguage(lang) {
    try {
        const response = await fetch(`./locales/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Dil dosyası yüklenemedi: ${response.status} ${response.statusText}`);
        }
        const translations = await response.json();

        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[key] !== undefined) {
                if (key === 'copyrightText') {
                    element.innerHTML = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });

        const langToggleButton = document.getElementById('lang-toggle');
        if (langToggleButton) {
            langToggleButton.textContent = lang === 'tr' ? '  DE  ' : '  TR  '; 
            langToggleButton.setAttribute('data-current-lang', lang);
        }
        localStorage.setItem('selectedLanguage', lang);

    } catch (error) {
        console.error('Çeviri hatası:', error);
    }
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'de'; 
    const newLang = currentLang === 'de' ? 'tr' : 'de';
    setLanguage(newLang);
}


function initTranslation() {
    const langToggleButton = document.getElementById('lang-toggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleLanguage();
        });
    }

    const initialLang = localStorage.getItem('selectedLanguage') || 'de';
    setLanguage(initialLang);
}

// If DOMContentLoaded already fired, run init immediately; otherwise wait for it.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTranslation);
} else {
    initTranslation();
}
