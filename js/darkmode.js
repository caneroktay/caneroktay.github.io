document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggleBtn.querySelector('i');
    const aboutImg = document.getElementById('aboutImage'); 

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            if (themeToggleIcon) themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
            if (aboutImg) aboutImg.src = "./img/my-about-img-dark.png"; 
        } else {
            if (aboutImg) aboutImg.src = "./img/my-about-img-light.png"; 
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (themeToggleIcon) themeToggleIcon.classList.replace('fa-sun', 'fa-moon');
                if (aboutImg) aboutImg.src = "./img/my-about-img-light.png"; 
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeToggleIcon) themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
                if (aboutImg) aboutImg.src = "./img/my-about-img-dark.png"; 
            }
        });
    }
});