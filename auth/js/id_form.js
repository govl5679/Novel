class FormManager {
    constructor(languageManager, toastManager) {
        this.languageManager = languageManager;
        this.toastManager = toastManager;
        this.registeredEmails = [
            'user@example.com',
            'test@test.com',
            'admin@북북노벨.com',
            'demo@demo.com'
        ];
        this.initialize();
    }

    initialize() {
        this.bindFormEvents();
    }

    bindFormEvents() {
        const form = document.getElementById('findUserIdForm');
        const emailInput = document.getElementById('email');

        if (form) {
            // 엔터 키 처리
            form.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    form.querySelector('button[type="submit"]').click();
                }
            });

            // 폼 제출 처리
            form.addEventListener('submit', (e) => this.handleFindUserId(e));
        }

        if (emailInput) {
            // 실시간 유효성 검사
            emailInput.addEventListener('input', this.clearFieldError);
        }
    }

    handleFindUserId(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();

        // 유효성 검사
        if (!email) {
            this.showFieldError('email', this.languageManager.getTranslation('error_email_required'));
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showFieldError('email', this.languageManager.getTranslation('error_email_invalid'));
            return;
        }

        // 로딩 상태 표시
        this.showLoading(true);

        // 아이디 찾기 처리 (더미 로직)
        setTimeout(() => {
            if (this.registeredEmails.includes(email.toLowerCase())) {
                // 이메일 전송 성공
                this.toastManager.success(this.languageManager.getTranslation('toast_email_sent'));

                setTimeout(() => {
                    this.showSuccessState();
                }, 1000);
            } else {
                // 등록되지 않은 이메일
                this.showFieldError('email', this.languageManager.getTranslation('error_email_not_found'));
            }

            this.showLoading(false);
        }, 2000);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showLoading(show) {
        const findBtn = document.getElementById('findBtn');
        if (!findBtn) return;

        const btnText = findBtn.querySelector('.btn-text');
        const spinner = findBtn.querySelector('.loading-spinner');

        if (show) {
            findBtn.disabled = true;
            if (btnText) btnText.classList.add('hidden');
            if (spinner) spinner.classList.remove('hidden');
        } else {
            findBtn.disabled = false;
            if (btnText) btnText.classList.remove('hidden');
            if (spinner) spinner.classList.add('hidden');
        }
    }

    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        const feedback = field.parentNode.querySelector('.invalid-feedback');

        field.classList.add('is-invalid');
        if (feedback) {
            feedback.textContent = message;
        }
    }

    clearFieldError(event) {
        const field = event.target;
        field.classList.remove('is-invalid');
        const feedback = field.parentNode.querySelector('.invalid-feedback');
        if (feedback) {
            feedback.textContent = '';
        }
    }

    showSuccessState() {
        const initialState = document.getElementById('initialState');
        const successState = document.getElementById('successState');

        if (initialState) initialState.classList.add('hidden');
        if (successState) successState.classList.remove('hidden');
    }

    resetForm() {
        const initialState = document.getElementById('initialState');
        const successState = document.getElementById('successState');
        const form = document.getElementById('findUserIdForm');

        // 상태 초기화
        if (successState) successState.classList.add('hidden');
        if (initialState) initialState.classList.remove('hidden');

        // 폼 초기화
        if (form) form.reset();

        // 에러 상태 초기화
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.classList.remove('is-invalid');
            const feedback = emailInput.parentNode.querySelector('.invalid-feedback');
            if (feedback) {
                feedback.textContent = '';
            }
        }
    }

    // 페이지 네비게이션 (더미 함수)
    navigateToPage(page) {
        console.log(`Navigate to: ${page}.html`);
        this.toastManager.info(`${page} 페이지로 이동합니다`);
    }
}

// 전역으로 사용할 수 있도록 내보내기
window.FormManager = FormManager;