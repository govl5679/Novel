// 다국어 지원
const translations = {
    ko: {
        site_name: '북북노벨',
        current_lang: '한국어',
        login_title: '로그인',
        login_subtitle: '계정에 로그인하여 서비스를 이용하세요',
        username_label: '아이디',
        password_label: '비밀번호',
        username_placeholder: '아이디를 입력해주세요',
        password_placeholder: '비밀번호를 입력해주세요',
        remember_me: '로그인 유지',
        login_button: '로그인',
        find_username: '아이디 찾기',
        find_password: '비밀번호 찾기',
        sign_up: '회원가입',
        error_empty_username: '아이디를 입력해주세요',
        error_empty_password: '비밀번호를 입력해주세요',
        error_invalid_username: '올바르지 않은 아이디입니다',
        error_invalid_password: '올바르지 않은 비밀번호입니다',
        error_account_locked: '로그인 시도 횟수를 초과했습니다. 5분 후 다시 시도해주세요',
        success_login: '로그인 성공!',
        remaining_time: '남은 시간: '
    },
    ja: {
        site_name: '북북노벨',
        current_lang: '日本語',
        login_title: 'ログイン',
        login_subtitle: 'アカウントにログインしてサービスをご利用ください',
        username_label: 'ユーザーID',
        password_label: 'パスワード',
        username_placeholder: 'ユーザーIDを入力してください',
        password_placeholder: 'パスワードを入力してください',
        remember_me: 'ログイン状態を保持',
        login_button: 'ログイン',
        find_username: 'ID検索',
        find_password: 'パスワード検索',
        sign_up: '会員登録',
        error_empty_username: 'ユーザーIDを入力してください',
        error_empty_password: 'パスワードを入力してください',
        error_invalid_username: '正しくないユーザーIDです',
        error_invalid_password: '正しくないパスワードです',
        error_account_locked: 'ログイン試行回数を超過しました。5分後に再試行してください',
        success_login: 'ログイン成功！',
        remaining_time: '残り時間: '
    },
    en: {
        site_name: '북북노벨',
        current_lang: 'English',
        login_title: 'Sign In',
        login_subtitle: 'Sign in to your account to use our services',
        username_label: 'Username',
        password_label: 'Password',
        username_placeholder: 'Enter your username',
        password_placeholder: 'Enter your password',
        remember_me: 'Remember me',
        login_button: 'Sign In',
        find_username: 'Find Username',
        find_password: 'Find Password',
        sign_up: 'Sign Up',
        error_empty_username: 'Please enter your username',
        error_empty_password: 'Please enter your password',
        error_invalid_username: 'Invalid username',
        error_invalid_password: 'Invalid password',
        error_account_locked: 'Too many login attempts. Please try again in 5 minutes',
        success_login: 'Login successful!',
        remaining_time: 'Time remaining: '
    }
};

// 전역 변수
let currentLang = localStorage.getItem('preferred_language') || 'ko';
let currentTheme = localStorage.getItem('preferred_theme') || 'light';
let loginAttempts = parseInt(localStorage.getItem('login_attempts') || '0');
let lockoutTime = parseInt(localStorage.getItem('lockout_time') || '0');
let lockoutTimer = null;

// 초기화
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeLanguage();
    initializeLoginForm();
    checkLockoutStatus();
    restorePasswordToggleState();
});

// 테마 초기화
function initializeTheme() {
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('preferred_theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    icon.className = currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// 다국어 초기화
function initializeLanguage() {
    updateLanguageText();
    document.querySelectorAll('[data-lang-code]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const langCode = this.getAttribute('data-lang-code');
            changeLanguage(langCode);
        });
    });
}

function changeLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('preferred_language', langCode);
    updateLanguageText();
}

function updateLanguageText() {
    const texts = translations[currentLang];
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (texts[key]) {
            element.textContent = texts[key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (texts[key]) {
            element.placeholder = texts[key];
        }
    });
}

// 로그인 폼 초기화
function initializeLoginForm() {
    const form = document.getElementById('loginForm');
    const passwordToggle = document.querySelector('.password-toggle');
    const passwordInput = document.getElementById('password');

    // 비밀번호 토글 기능
    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.querySelector('i').className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
        localStorage.setItem('password_visible', type === 'text');
    });

    // 엔터 키 처리
    form.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.querySelector('button[type="submit"]').click();
        }
    });

    // 폼 제출 처리
    form.addEventListener('submit', handleLogin);

    // 실시간 유효성 검사
    document.getElementById('userId').addEventListener('input', clearFieldError);
    document.getElementById('password').addEventListener('input', clearFieldError);
}

function restorePasswordToggleState() {
    const isVisible = localStorage.getItem('password_visible') === 'true';
    if (isVisible) {
        const passwordInput = document.getElementById('password');
        const passwordToggle = document.querySelector('.password-toggle');
        passwordInput.type = 'text';
        passwordToggle.querySelector('i').className = 'fas fa-eye-slash';
    }
}

// 잠금 상태 확인
function checkLockoutStatus() {
    if (lockoutTime > Date.now()) {
        startLockoutTimer();
    } else {
        localStorage.removeItem('login_attempts');
        localStorage.removeItem('lockout_time');
        loginAttempts = 0;
        lockoutTime = 0;
    }
}

function startLockoutTimer() {
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('.btn-text');

    loginBtn.disabled = true;

    function updateTimer() {
        const remaining = Math.ceil((lockoutTime - Date.now()) / 1000);
        if (remaining <= 0) {
            loginBtn.disabled = false;
            btnText.textContent = translations[currentLang].login_button;
            localStorage.removeItem('login_attempts');
            localStorage.removeItem('lockout_time');
            loginAttempts = 0;
            lockoutTime = 0;
            clearInterval(lockoutTimer);
        } else {
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            btnText.textContent = `${translations[currentLang].remaining_time}${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    updateTimer();
    lockoutTimer = setInterval(updateTimer, 1000);
}

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();

    if (lockoutTime > Date.now()) {
        return;
    }

    const formData = new FormData(e.target);
    const userId = formData.get('userId').trim();
    const password = formData.get('password').trim();

    // 유효성 검사
    let isValid = true;

    if (!userId) {
        showFieldError('userId', translations[currentLang].error_empty_username);
        isValid = false;
    }

    if (!password) {
        showFieldError('password', translations[currentLang].error_empty_password);
        isValid = false;
    }

    if (!isValid) return;

    // 로딩 상태 표시
    showLoading(true);

    // 실제 로그인 검증 (더미 로직)
    setTimeout(() => {
        if (userId === 'admin' && password === 'password123') {
            // 로그인 성공
            loginAttempts = 0;
            localStorage.removeItem('login_attempts');
            localStorage.removeItem('lockout_time');

            showToast(translations[currentLang].success_login, 'success');

            // 로그인 유지 체크박스 처리
            if (formData.get('rememberMe')) {
                localStorage.setItem('remember_login', 'true');
            }

            setTimeout(() => {
                // 실제 애플리케이션에서는 대시보드로 리다이렉트
                console.log('로그인 성공 - 메인 페이지로 이동');
            }, 1500);

        } else {
            // 로그인 실패
            loginAttempts++;
            localStorage.setItem('login_attempts', loginAttempts.toString());

            if (loginAttempts >= 5) {
                // 계정 잠금
                lockoutTime = Date.now() + (5 * 60 * 1000); // 5분
                localStorage.setItem('lockout_time', lockoutTime.toString());
                showToast(translations[currentLang].error_account_locked, 'error');
                startLockoutTimer();
            } else {
                // 일반적인 로그인 실패
                if (userId !== 'admin') {
                    showFieldError('userId', translations[currentLang].error_invalid_username);
                } else {
                    showFieldError('password', translations[currentLang].error_invalid_password);
                }
            }
        }
        showLoading(false);
    }, 1000);
}

function showLoading(show) {
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('.btn-text');
    const spinner = loginBtn.querySelector('.loading-spinner');

    if (show) {
        loginBtn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
    } else {
        loginBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    field.classList.add('is-invalid');
    feedback.textContent = message;
}

function clearFieldError() {
    this.classList.remove('is-invalid');
    const feedback = this.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = '';
    }
}

// 토스트 메시지
function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.innerHTML = `
        <div class="toast-body d-flex align-items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-exclamation-triangle'} me-2"></i>
            ${message}
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// 페이지 네비게이션 (더미 함수)
function navigateToPage(page) {
    console.log(`Maps to: ${page}.html`);
    showToast(`${page} 페이지로 이동합니다`, 'info');
}