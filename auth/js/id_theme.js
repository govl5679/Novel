class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('preferred_theme') || 'light';
        this.initialize();
    }

    initialize() {
        document.body.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();

        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('preferred_theme', this.currentTheme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('preferred_theme', this.currentTheme);
        this.updateThemeIcon();
    }
}

// 전역으로 사용할 수 있도록 내보내기
window.ThemeManager = ThemeManager;