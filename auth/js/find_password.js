// 다국어 지원
const translations = {
    ko: {
        site_name: '북북노벨',
        current_lang: '한국어',
        find_password_title: '비밀번호 찾기',
        find_password_subtitle: '가입 시 사용한 아이디를 입력해주세요',
        username_label: '아이디',
        username_placeholder: '아이디',
        find_password_description: '계정에 연결된 이메일로 비밀번호 찾기',
        find_button: '확인',
        find_username: '아이디 찾기',
        back_to_login: '로그인으로 돌아가기',
        password_sent_title: '임시 비밀번호가 발급되었습니다',
        password_sent_description: '계정에 등록된 이메일 주소로<br>임시 비밀번호가 전송되었습니다.<br>로그인 후 반드시 비밀번호를 변경해주세요.',
        go_to_login: '로그인하기',
        try_again: '다시 시도',
        error_username_required: '아이디를 입력해주세요',
        error_username_not_found: '등록되지 않은 아이디입니다',
        toast_password_sent: '임시 비밀번호가 발급되어 이메일로 전송되었습니다',
        toast_password_reissued: '임시 비밀번호가 재발급되었습니다'
    },
    ja: {
        site_name: '북북노벨',
        current_lang: '日本語',
        find_password_title: 'パスワード検索',
        find_password_subtitle: '登録時に使用したユーザーIDを入力してください',
        username_label: 'ユーザーID',
        username_placeholder: 'ユーザーID',
        find_password_description: 'アカウントに連携されたメールでパスワード検索',
        find_button: '確認',
        find_username: 'ID検索',
        back_to_login: 'ログインに戻る',
        password_sent_title: '仮パスワードが発行されました',
        password_sent_description: 'アカウントに登録されたメールアドレスに<br>仮パスワードが送信されました。<br>ログイン後、必ずパスワードを変更してください。',
        go_to_login: 'ログインする',
        try_again: '再試行',
        error_username_required: 'ユーザーIDを入力してください',
        error_username_not_found: '登録されていないユーザーIDです',
        toast_password_sent: '仮パスワードが発行されメールで送信されました'
    },
    en: {
        site_name: '북북노벨',
        current_lang: 'English',
        find_password_title: 'Find Password',
        find_password_subtitle: 'Enter the username you used when signing up',
        username_label: 'Username',
        username_placeholder: 'Username',
        find_password_description: 'Find password using email linked to your account',
        find_button: 'Submit',
        find_username: 'Find Username',
        back_to_login: 'Back to Login',
        password_sent_title: 'Temporary password has been issued',
        password_sent_description: 'A temporary password has been sent to<br>the email address registered to your account.<br>Please change your password after logging in.',
        go_to_login: 'Go to Login',
        try_again: 'Try Again',
        error_username_required: 'Please enter your username',
        error_username_not_found: 'Username not found',
        toast_password_sent: 'Temporary password has been issued and sent via email'
    }
};

// 전역 변수
let currentLang = localStorage.getItem('preferred_language') || 'ko';
let currentTheme = localStorage.getItem('preferred_theme') || 'light';
let lastUserId = '';

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeForm();
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
    icon.className = currentTheme === 'light'
        ? 'bi bi-sun-fill'
        : 'bi bi-moon-fill';
}

// 다국어 초기화
function initializeLanguage() {
    updateLanguageText();

    document.querySelectorAll('[data-lang-code]').forEach(item => {
        item.addEventListener('click', function(e) {
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
            // HTML이 포함된 텍스트 처리
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

// 폼 초기화
function initializeForm() {
    const form = document.getElementById('findPasswordForm');
    const userIdInput = document.getElementById('userId');

    // 엔터 키 처리
    form.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.querySelector('button[type="submit"]').click();
        }
    });

    // 폼 제출 처리
    form.addEventListener('submit', handleFindPassword);

    // 실시간 유효성 검사
    userIdInput.addEventListener('input', clearFieldError);
}

// 비밀번호 찾기 처리
function handleFindPassword(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userId = formData.get('userId').trim();

    // 유효성 검사
    if (!userId) {
        showFieldError('userId', translations[currentLang].error_username_required);
        return;
    }

    // 로딩 상태 표시
    showLoading(true);

    // 비밀번호 찾기 처리 (더미 로직)
    setTimeout(() => {
        // 더미 등록된 사용자들
        const registeredUsers = [
            'admin',
            'user',
            'test',
            'demo'
        ];

        if (registeredUsers.includes(userId.toLowerCase())) {
            // 임시 비밀번호 전송 성공
            lastUserId = userId; // 사용자 ID 저장
            showToast(translations[currentLang].toast_password_sent, 'success');

            setTimeout(() => {
                showSuccessState();
            }, 1000);
        } else {
            // 등록되지 않은 아이디
            showFieldError('userId', translations[currentLang].error_username_not_found);
        }

        showLoading(false);
    }, 2000);
}

function showLoading(show) {
    const findBtn = document.getElementById('findBtn');
    const btnText = findBtn.querySelector('.btn-text');
    const spinner = findBtn.querySelector('.loading-spinner');

    if (show) {
        findBtn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
    } else {
        findBtn.disabled = false;
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

function showSuccessState() {
    const initialState = document.getElementById('initialState');
    const successState = document.getElementById('successState');

    initialState.classList.add('hidden');
    successState.classList.remove('hidden');
}

function resetForm() {
    const initialState = document.getElementById('initialState');
    const successState = document.getElementById('successState');
    const form = document.getElementById('findPasswordForm');

    // 상태 초기화
    successState.classList.add('hidden');
    initialState.classList.remove('hidden');

    // 폼 초기화
    form.reset();

    // 에러 상태 초기화
    const userIdInput = document.getElementById('userId');
    userIdInput.classList.remove('is-invalid');
    const feedback = userIdInput.parentNode.querySelector('.invalid-feedback');
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
            <i class="fas ${type === 'success' ? 'fa-check-circle' :
                            type === 'error' ? 'fa-exclamation-circle' :
                            type === 'warning' ? 'fa-exclamation-triangle' :
                            'fa-info-circle'} me-2"></i>
            ${message}
        </div>
    `;

    container.appendChild(toast);

    // 5초 후 페이드 아웃 애니메이션과 함께 제거
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 5000);
}

// 페이지 네비게이션
function navigateToPage(page) {
    window.location.href = `./${page}.html`;
}

// 다시 시도 처리
function handleRetry() {
    showLoading(true);

    // 비밀번호 찾기 재시도 (더미 로직)
    setTimeout(() => {
        showToast(translations[currentLang].toast_password_reissued, 'success');
        showLoading(false);
    }, 2000);
}

// 성공 상태의 버튼에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('#successState .btn-primary');
    const retryBtn = document.querySelector('#successState .btn-outline-primary');

    loginBtn.addEventListener('click', () => {
        // 로그인 페이지로 이동
        navigateToPage('login');
    });

    retryBtn.addEventListener('click', handleRetry);
});