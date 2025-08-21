class FindUsernameApp {
    constructor() {
        this.themeManager = null;
        this.languageManager = null;
        this.toastManager = null;
        this.formManager = null;

        this.initialize();
    }

    initialize() {
        // DOM이 로드된 후 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeManagers());
        } else {
            this.initializeManagers();
        }
    }

    initializeManagers() {
        try {
            // 각 매니저 인스턴스 생성
            this.themeManager = new ThemeManager();
            this.languageManager = new LanguageManager();
            this.toastManager = new ToastManager();
            this.formManager = new FormManager(this.languageManager, this.toastManager);

            console.log('Find Username App initialized successfully');
        } catch (error) {
            console.error('Error initializing Find Username App:', error);
        }
    }

    // 외부에서 접근할 수 있는 메서드들
    resetForm() {
        if (this.formManager) {
            this.formManager.resetForm();
        }
    }

    navigateToPage(page) {
        if (this.formManager) {
            this.formManager.navigateToPage(page);
        }
    }

    showToast(message, type = 'success') {
        if (this.toastManager) {
            this.toastManager.show(message, type);
        }
    }

    changeTheme(theme) {
        if (this.themeManager) {
            this.themeManager.setTheme(theme);
        }
    }

    changeLanguage(langCode) {
        if (this.languageManager) {
            this.languageManager.setLanguage(langCode);
        }
    }

    // 현재 상태 정보 조회
    getCurrentTheme() {
        return this.themeManager ? this.themeManager.getCurrentTheme() : 'light';
    }

    getCurrentLanguage() {
        return this.languageManager ? this.languageManager.getCurrentLanguage() : 'ko';
    }

    // 앱 정보
    getAppInfo() {
        return {
            name: 'Find Username App',
            version: '1.0.0',
            theme: this.getCurrentTheme(),
            language: this.getCurrentLanguage()
        };
    }
}

// 전역 앱 인스턴스 생성
const app = new FindUsernameApp();

// 전역으로 접근 가능하도록 설정
window.app = app;

// 하위 호환성을 위한 전역 함수들
window.resetForm = () => app.resetForm();
window.navigateToPage = (page) => app.navigateToPage(page);
window.showToast = (message, type) => app.showToast(message, type);