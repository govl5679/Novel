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
        if (translations[langCode]) {
            this.currentLang = langCode;
            localStorage.setItem('preferred_language', langCode);
            this.updateLanguageText();
        }
    }

    updateLanguageText() {
        const texts = translations[this.currentLang];

        if (!texts) {
            console.error(`Translation not found for language: ${this.currentLang}`);
            return;
        }

        // data-lang 속성을 가진 요소들 업데이트
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (texts[key]) {
                // HTML이 포함된 텍스트 처리
                if (texts[key].includes('<br>')) {
                    element.innerHTML = texts[key];
                } else {
                    element.textContent = texts[key];
                }
            }
        });

        // placeholder 속성 업데이트
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
        const texts = translations[this.currentLang];
        return texts && texts[key] ? texts[key] : key;
    }
}

// 전역으로 사용할 수 있도록 내보내기
window.LanguageManager = LanguageManager;