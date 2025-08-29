class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferred_language') || 'ko';
        this.initialize();
    }

    initialize() {
        this.updateLanguageText();
        this.bindLanguageEvents();
    }

    bindLanguageEvents() {
        document.querySelectorAll('[data-lang-code]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const langCode = item.getAttribute('data-lang-code');
                this.changeLanguage(langCode);
            });
        });
    }

    changeLanguage(langCode) {
        // 이제부터 window.translations 사전을 보도록 수정
        if (window.translations && window.translations[langCode]) {
            this.currentLang = langCode;
            localStorage.setItem('preferred_language', langCode);
            this.updateLanguageText();
        }
    }

    updateLanguageText() {
        // window.translations 사전이 있는지 확인
        if (!window.translations) return;
        const texts = window.translations[this.currentLang];

        if (!texts) {
            console.error(`Translation not found for language: ${this.currentLang}`);
            return;
        }

        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (texts[key]) {
                if (texts[key].includes('<br>')) {
                    element.innerHTML = texts[key];
                } else {
                    element.textContent = texts[key];
                }
            }
        });

        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (texts[key]) {
                element.placeholder = texts[key];
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    setLanguage(langCode) {
        this.changeLanguage(langCode);
    }

    getTranslation(key) {
        if (!window.translations) return key;
        const texts = window.translations[this.currentLang];
        return texts && texts[key] ? texts[key] : key;
    }
}

// 전역으로 사용할 수 있도록 내보내기
window.LanguageManager = LanguageManager;