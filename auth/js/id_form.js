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
            emailInput.addEventListener('input', (e) => this.clearFieldError(e));
        }
    }

    handleFindUserId(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const emailField = document.getElementById('email');

        // 이메일 필드의 에러 상태를 우선 초기화
        this.clearFieldError({ target: emailField });

        // 유효성 검사
        if (!email) {
            // showFieldError 대신 toastManager의 error 메소드 사용
            this.toastManager.error(this.languageManager.getTranslation('올바르지 않은 이메일입니다'));
            return;
        }

        if (!this.isValidEmail(email)) {
            // showFieldError 대신 toastManager의 error 메소드 사용
            this.toastManager.error(this.languageManager.getTranslation('올바르지 않은 이메일입니다'));
            return;
        }

        // 로딩 상태 표시
        this.showLoading(true);

        // 아이디 찾기 처리 (더미 로직)
        setTimeout(() => {
            if (this.registeredEmails.includes(email.toLowerCase())) {
                // 이메일 전송 성공
                this.toastManager.success(this.languageManager.getTranslation('계정에 연결된 이메일로 아이디를 보냈습니다'));

                setTimeout(() => {
                    this.showSuccessState();
                }, 1000);
            } else {
                // 등록되지 않은 이메일
                // showFieldError 대신 toastManager의 error 메소드 사용
                this.toastManager.error(this.languageManager.getTranslation('올바르지 않은 이메일입니다'));
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

    // 이 함수는 이제 사용하지 않지만, 다른 곳에서 쓸 수 있으니 남겨둘게.
    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;
        const feedback = field.parentNode.querySelector('.invalid-feedback');
        field.classList.add('is-invalid');
        if (feedback) {
            feedback.textContent = message;
        }
    }

    // 이 함수는 사용자가 다시 입력할 때 에러 표시를 지우기 위해 필요해.
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

        if (successState) successState.classList.add('hidden');
        if (initialState) initialState.classList.remove('hidden');
        if (form) form.reset();

        const emailInput = document.getElementById('email');
        if (emailInput) {
            this.clearFieldError({ target: emailInput });
        }
    }

    navigateToPage(page) {
        console.log(`Maps to: ${page}.html`);
        this.toastManager.info(`${page} 페이지로 이동합니다`);
    }
}

window.FormManager = FormManager;