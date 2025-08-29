// 다국어 지원
const translations = {
    ko: {
        site_name: '북북노벨',
        current_lang: '한국어',
        register_title: '회원가입',
        register_subtitle: '새 계정을 만들어 서비스를 시작하세요',
        username_label: '아이디',
        password_label: '비밀번호',
        password_confirm_label: '비밀번호 확인',
        name_label: '이름',
        email_label: '이메일 주소',
        phone_label: '전화번호',
        birth_date_label: '생년월일',
        username_placeholder: '아이디',
        password_placeholder: '비밀번호',
        password_confirm_placeholder: '비밀번호 확인',
        name_placeholder: '이름',
        email_placeholder: '이메일 주소',
        phone_placeholder: '전화번호',
        birth_date_placeholder: '생년월일 8자리',
        check_duplicate: '중복확인',
        register_button: '계정 생성',
        already_have_account: '이미 계정이 있으신가요?',
        sign_in: '로그인',
        password_strength: '비밀번호 강도',
        strength_weak: '약함',
        strength_medium: '보통',
        strength_strong: '강함',
        error_required: '은 필수 정보입니다',
        error_invalid_email: '올바른 이메일 주소를 입력해주세요',
        error_invalid_phone: '올바른 전화번호를 입력해주세요',
        error_invalid_birth: '올바른 생년월일을 입력해주세요',
        error_too_young: '만 14세 이상만 가입 가능합니다',
        error_password_mismatch: '비밀번호가 일치하지 않습니다',
        error_username_exists: '이미 사용 중인 아이디입니다',
        error_email_exists: '이미 사용 중인 이메일입니다',
        success_username_available: '사용 가능한 아이디입니다',
        success_email_available: '사용 가능한 이메일입니다',
        success_password_match: '비밀번호가 일치합니다',
        success_register: '회원가입이 완료되었습니다!'
    },
    ja: {
        site_name: '북북노벨',
        current_lang: '日本語',
        register_title: '会員登録',
        register_subtitle: '新しいアカウントを作成してサービスを開始',
        username_label: 'ユーザーID',
        password_label: 'パスワード',
        password_confirm_label: 'パスワード確認',
        name_label: '名前',
        email_label: 'メールアドレス',
        phone_label: '電話番号',
        birth_date_label: '生年月日',
        username_placeholder: 'ユーザーID',
        password_placeholder: 'パスワード',
        password_confirm_placeholder: 'パスワード確認',
        name_placeholder: '名前',
        email_placeholder: 'メールアドレス',
        phone_placeholder: '電話番号',
        birth_date_placeholder: '生年月日8桁',
        check_duplicate: '重複確認',
        register_button: 'アカウント作成',
        already_have_account: 'すでにアカウントをお持ちですか？',
        sign_in: 'ログイン',
        password_strength: 'パスワード強度',
        strength_weak: '弱',
        strength_medium: '中',
        strength_strong: '強',
        error_required: 'は必須項目です',
        error_invalid_email: '正しいメールアドレスを入力してください',
        error_invalid_phone: '正しい電話番号を入力してください',
        error_invalid_birth: '正しい生年月日を入力してください',
        error_too_young: '14歳以上のみ登録可能です',
        error_password_mismatch: 'パスワードが一致しません',
        error_username_exists: 'すでに使用されているユーザーIDです',
        error_email_exists: 'すでに使用されているメールです',
        success_username_available: '利用可能なユーザーIDです',
        success_email_available: '利用可能なメールです',
        success_password_match: 'パスワードが一致します',
        success_register: '会員登録が完了しました！'
    },
    en: {
        site_name: '북북노벨',
        current_lang: 'English',
        register_title: 'Sign Up',
        register_subtitle: 'Create a new account to get started',
        username_label: 'Username',
        password_label: 'Password',
        password_confirm_label: 'Confirm Password',
        name_label: 'Full Name',
        email_label: 'Email Address',
        phone_label: 'Phone Number',
        birth_date_label: 'Date of Birth',
        username_placeholder: 'Username',
        password_placeholder: 'Password',
        password_confirm_placeholder: 'Confirm Password',
        name_placeholder: 'Full Name',
        email_placeholder: 'Email Address',
        phone_placeholder: 'Phone Number',
        birth_date_placeholder: 'YYYYMMDD',
        check_duplicate: 'Check',
        register_button: 'Create Account',
        already_have_account: 'Already have an account?',
        sign_in: 'Sign In',
        password_strength: 'Password Strength',
        strength_weak: 'Weak',
        strength_medium: 'Medium',
        strength_strong: 'Strong',
        error_required: ' is required',
        error_invalid_email: 'Please enter a valid email address',
        error_invalid_phone: 'Please enter a valid phone number',
        error_invalid_birth: 'Please enter a valid date of birth',
        error_too_young: 'Must be 14 years or older to register',
        error_password_mismatch: 'Passwords do not match',
        error_username_exists: 'Username is already taken',
        error_email_exists: 'Email is already in use',
        success_username_available: 'Username is available',
        success_email_available: 'Email is available',
        success_password_match: 'Passwords match',
        success_register: 'Registration completed successfully!'
    }
};

// 전역 변수
let currentLang = localStorage.getItem('preferred_language') || 'ko';
let currentTheme = localStorage.getItem('preferred_theme') || 'light';
let formData = JSON.parse(localStorage.getItem('register_form_data') || '{}');
let validationState = {
    userId: false,
    password: false,
    passwordConfirm: false,
    fullName: false,
    email: false,
    phone: false,
    birthDate: false
};

// 초기화
document.addEventListener('DOMContentLoaded', function () {
    initializeForm();
    restoreFormData();
});

// 폼 관련 함수
function initializeForm() {
    const form = document.getElementById('registerForm');

    // 비밀번호 토글 기능
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function () {
            const input = this.closest('.input-group').querySelector('input');
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            this.querySelector('i').className = type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash-fill';
        });
    });

    // 중복 확인 버튼
    document.getElementById('checkUserId').addEventListener('click', checkUserIdDuplicate);
    document.getElementById('checkEmail').addEventListener('click', checkEmailDuplicate);

    // 실시간 유효성 검사
    document.getElementById('userId').addEventListener('input', validateUserId);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('passwordConfirm').addEventListener('input', validatePasswordConfirm);
    document.getElementById('fullName').addEventListener('input', validateFullName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', formatAndValidatePhone);
    document.getElementById('birthDate').addEventListener('input', formatAndValidateBirthDate);

    // 폼 데이터 자동 저장
    form.addEventListener('input', saveFormData);

    // 폼 제출
    form.addEventListener('submit', handleRegister);
}

function restoreFormData() {
    Object.keys(formData).forEach(key => {
        const input = document.getElementById(key);
        if (input && formData[key]) {
            input.value = formData[key];
            // 복원 후 유효성 검사 실행
            input.dispatchEvent(new Event('input'));
        }
    });
}

function saveFormData() {
    const form = document.getElementById('registerForm');
    const data = new FormData(form);
    const savedData = {};

    for (let [key, value] of data.entries()) {
        savedData[key] = value;
    }

    localStorage.setItem('register_form_data', JSON.stringify(savedData));
}

// 유효성 검사 함수들
function validateUserId() {
    const input = document.getElementById('userId');
    const value = input.value.trim();

    if (!value) {
        showFieldError('userId', translations[currentLang].username_label + translations[currentLang].error_required);
        validationState.userId = false;
        return false;
    }

    if (value.length < 4 || value.length > 20) {
        showFieldError('userId', '아이디는 4-20자 사이여야 합니다');
        validationState.userId = false;
        return false;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        showFieldError('userId', '아이디는 영문, 숫자, 언더스코어만 사용 가능합니다');
        validationState.userId = false;
        return false;
    }

    clearFieldError('userId');
    return true;
}

function validatePassword() {
    const input = document.getElementById('password');
    const value = input.value;

    if (!value) {
        showFieldError('password', translations[currentLang].password_label + translations[currentLang].error_required);
        updatePasswordStrength('none');
        validationState.password = false;
        return false;
    }

    const strength = calculatePasswordStrength(value);
    updatePasswordStrength(strength);

    if (strength === 'weak') {
        showFieldError('password', '비밀번호가 너무 약합니다');
        validationState.password = false;
        return false;
    }

    clearFieldError('password');
    validationState.password = true;

    // 비밀번호 확인 재검사
    if (document.getElementById('passwordConfirm').value) {
        validatePasswordConfirm();
    }

    return true;
}

function validatePasswordConfirm() {
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    if (!passwordConfirm) {
        showFieldError('passwordConfirm', translations[currentLang].password_confirm_label + translations[currentLang].error_required);
        validationState.passwordConfirm = false;
        return false;
    }

    if (password !== passwordConfirm) {
        showFieldError('passwordConfirm', translations[currentLang].error_password_mismatch);
        validationState.passwordConfirm = false;
        return false;
    }

    showFieldSuccess('passwordConfirm', translations[currentLang].success_password_match);
    validationState.passwordConfirm = true;
    return true;
}

function validateFullName() {
    const input = document.getElementById('fullName');
    const value = input.value.trim();

    if (!value) {
        showFieldError('fullName', translations[currentLang].name_label + translations[currentLang].error_required);
        validationState.fullName = false;
        return false;
    }

    if (value.length < 2) {
        showFieldError('fullName', '이름은 2글자 이상이어야 합니다');
        validationState.fullName = false;
        return false;
    }

    clearFieldError('fullName');
    validationState.fullName = true;
    return true;
}

function validateEmail() {
    const input = document.getElementById('email');
    const value = input.value.trim();

    if (!value) {
        showFieldError('email', translations[currentLang].email_label + translations[currentLang].error_required);
        validationState.email = false;
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        showFieldError('email', translations[currentLang].error_invalid_email);
        validationState.email = false;
        return false;
    }

    clearFieldError('email');
    return true;
}

function formatAndValidatePhone() {
    const input = document.getElementById('phone');
    let value = input.value.replace(/\D/g, '');

    // 자동 하이픈 추가
    if (value.length > 3 && value.length <= 7) {
        value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (value.length > 7) {
        value = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
    }

    input.value = value;

    const numbers = value.replace(/\D/g, '');

    if (!numbers) {
        showFieldError('phone', translations[currentLang].phone_label + translations[currentLang].error_required);
        validationState.phone = false;
        return false;
    }

    if (numbers.length !== 10 && numbers.length !== 11) {
        showFieldError('phone', translations[currentLang].error_invalid_phone);
        validationState.phone = false;
        return false;
    }

    clearFieldError('phone');
    validationState.phone = true;
    return true;
}

function formatAndValidateBirthDate() {
    const input = document.getElementById('birthDate');
    let value = input.value.replace(/\D/g, '');

    // 자동 포맷 (YYYY-MM-DD)
    if (value.length > 4 && value.length <= 6) {
        value = value.replace(/(\d{4})(\d+)/, '$1-$2');
    } else if (value.length > 6) {
        value = value.replace(/(\d{4})(\d{2})(\d+)/, '$1-$2-$3');
    }

    input.value = value;

    const numbers = value.replace(/\D/g, '');

    if (!numbers) {
        showFieldError('birthDate', translations[currentLang].birth_date_label + translations[currentLang].error_required);
        validationState.birthDate = false;
        return false;
    }

    if (numbers.length !== 8) {
        showFieldError('birthDate', translations[currentLang].error_invalid_birth);
        validationState.birthDate = false;
        return false;
    }

    // 나이 계산 (14세 미만 차단)
    const year = parseInt(numbers.substr(0, 4));
    const month = parseInt(numbers.substr(4, 2));
    const day = parseInt(numbers.substr(6, 2));

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 14) {
        showFieldError('birthDate', translations[currentLang].error_too_young);
        validationState.birthDate = false;
        return false;
    }

    clearFieldError('birthDate');
    validationState.birthDate = true;
    return true;
}

// 비밀번호 강도 관련 함수
function calculatePasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return 'weak';
    if (score <= 3) return 'medium';
    return 'strong';
}

function updatePasswordStrength(strength) {
    const strengthBar = document.querySelector('.password-strength');
    const strengthText = strengthBar.querySelector('.strength-text');
    const texts = translations[currentLang];

    strengthBar.className = 'password-strength';

    if (strength === 'weak') {
        strengthBar.classList.add('strength-weak');
        strengthText.textContent = texts.strength_weak;
    } else if (strength === 'medium') {
        strengthBar.classList.add('strength-medium');
        strengthText.textContent = texts.strength_medium;
    } else if (strength === 'strong') {
        strengthBar.classList.add('strength-strong');
        strengthText.textContent = texts.strength_strong;
    } else {
        strengthText.textContent = texts.password_strength;
    }
}

// 중복 확인 함수들
function checkUserIdDuplicate() {
    const input = document.getElementById('userId');
    const value = input.value.trim();

    if (!validateUserId()) return;

    const button = document.getElementById('checkUserId');
    button.disabled = true;
    button.textContent = '확인중...';

    // 더미 중복 확인 (실제로는 서버 API 호출)
    setTimeout(() => {
        // 'admin', 'test' 등은 이미 사용중으로 처리
        const existingUsers = ['admin', 'test', 'user', 'demo'];

        if (existingUsers.includes(value.toLowerCase())) {
            showFieldError('userId', translations[currentLang].error_username_exists);
            validationState.userId = false;
        } else {
            showFieldSuccess('userId', translations[currentLang].success_username_available);
            validationState.userId = true;
        }

        button.disabled = false;
        button.textContent = translations[currentLang].check_duplicate;
    }, 1000);
}

function checkEmailDuplicate() {
    const input = document.getElementById('email');
    const value = input.value.trim();

    if (!validateEmail()) return;

    const button = document.getElementById('checkEmail');
    button.disabled = true;
    button.textContent = '확인중...';

    // 더미 중복 확인
    setTimeout(() => {
        const existingEmails = ['admin@test.com', 'test@test.com', 'user@example.com'];

        if (existingEmails.includes(value.toLowerCase())) {
            showFieldError('email', translations[currentLang].error_email_exists);
            validationState.email = false;
        } else {
            showFieldSuccess('email', translations[currentLang].success_email_available);
            validationState.email = true;
        }

        button.disabled = false;
        button.textContent = translations[currentLang].check_duplicate;
    }, 1000);
}

// 회원가입 처리
function handleRegister(e) {
    e.preventDefault();

    // 모든 필드 유효성 검사
    const isValid = validateUserId() &&
        validatePassword() &&
        validatePasswordConfirm() &&
        validateFullName() &&
        validateEmail() &&
        formatAndValidatePhone() &&
        formatAndValidateBirthDate();

    // 중복 확인 여부 체크
    if (!validationState.userId || !validationState.email) {
        showToast('아이디와 이메일 중복확인을 완료해주세요', 'warning');
        return;
    }

    if (!isValid) {
        showToast('입력 정보를 다시 확인해주세요', 'error');
        return;
    }

    // 로딩 상태 표시
    showLoading(true);

    // 회원가입 처리 (더미)
    setTimeout(() => {
        // 성공
        showToast(translations[currentLang].success_register, 'success');

        // 저장된 폼 데이터 삭제
        localStorage.removeItem('register_form_data');

        setTimeout(() => {
            console.log('회원가입 성공 - 로그인 페이지로 이동');
            navigateToPage('login');
        }, 1500);

        showLoading(false);
    }, 2000);
}

// UI 유틸리티 함수들
function showLoading(show) {
    const registerBtn = document.getElementById('registerBtn');
    const btnText = registerBtn.querySelector('.btn-text');
    const spinner = registerBtn.querySelector('.loading-spinner');

    if (show) {
        registerBtn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
    } else {
        registerBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const feedback = field.parentNode.querySelector('.invalid-feedback');

    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
    if (feedback) {
        feedback.textContent = message;
    }
}

function showFieldSuccess(fieldId, message) {
    const field = document.getElementById(fieldId);
    const feedback = field.parentNode.querySelector('.valid-feedback');

    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    if (feedback) {
        feedback.textContent = message;
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const invalidFeedback = field.parentNode.querySelector('.invalid-feedback');
    const validFeedback = field.parentNode.querySelector('.valid-feedback');

    field.classList.remove('is-invalid', 'is-valid');
    if (invalidFeedback) invalidFeedback.textContent = '';
    if (validFeedback) validFeedback.textContent = '';
}

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
    console.log(`Navigate to: ${page}.html`);
    showToast(`${page} 페이지로 이동합니다`, 'info');
}