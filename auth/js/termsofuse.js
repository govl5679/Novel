// 다국어 지원
const translations = {
    ko: {
        site_name: '북북노벨',
        current_lang: '한국어',
        terms_title: '약관 동의',
        terms_subtitle: '서비스 이용을 위해 약관에 동의해주세요',
        agree_all: '전체 약관에 동의합니다',
        terms_of_service: '서비스 이용약관',
        privacy_policy: '개인정보 처리방침',
        age_confirm: '만 14세 이상입니다',
        marketing_consent: '마케팅 정보 수신 동의',
        event_consent: '이벤트 및 혜택 알림 수신',
        required: '필수',
        optional: '선택',
        view_details: '자세히 보기',
        agree_and_continue: '약관 동의',
        already_have_account: '이미 계정이 있으신가요?',
        sign_in: '로그인',
        close: '닫기',
        error_required_terms: '필수 약관에 모두 동의해주세요',
        agreement_complete: '약관 동의가 완료되었습니다',
        redirecting: '페이지로 이동 중입니다...'
    },
    ja: {
        site_name: '북북노벨',
        current_lang: '日本語',
        terms_title: '利用規約同意',
        terms_subtitle: 'サービス利用のため利用規約に同意してください',
        agree_all: '全ての利用規約に同意します',
        terms_of_service: 'サービス利用規約',
        privacy_policy: 'プライバシーポリシー',
        age_confirm: '14歳以上です',
        marketing_consent: 'マーケティング情報受信同意',
        event_consent: 'イベント及び特典お知らせ受信',
        required: '必須',
        optional: '選択',
        view_details: '詳細を見る',
        agree_and_continue: '規約同意',
        already_have_account: 'すでにアカウントをお持ちですか？',
        sign_in: 'ログイン',
        close: '閉じる',
        error_required_terms: '必須規約に全て同意してください',
        agreement_complete: '規約同意が完了しました',
        redirecting: 'ページに移動中です...'
    },
    en: {
        site_name: '북북노벨',
        current_lang: 'English',
        terms_title: 'Terms Agreement',
        terms_subtitle: 'Please agree to the terms to use our services',
        agree_all: 'I agree to all terms and conditions',
        terms_of_service: 'Terms of Service',
        privacy_policy: 'Privacy Policy',
        age_confirm: 'I am 14 years or older',
        marketing_consent: 'Marketing Information Consent',
        event_consent: 'Event and Benefits Notifications',
        required: 'Required',
        optional: 'Optional',
        view_details: 'View Details',
        agree_and_continue: 'Agree to Terms',
        already_have_account: 'Already have an account?',
        sign_in: 'Sign In',
        close: 'Close',
        error_required_terms: 'Please agree to all required terms',
        agreement_complete: 'Terms agreement completed',
        redirecting: 'Redirecting to page...'
    }
};

// 약관 내용
const termsContent = {
    service: {
        ko: `
            <h3>제1조 (목적)</h3>
            <p>이 약관은 북북노벨(이하 "회사")가 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

            <h3>제2조 (정의)</h3>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ul>
                <li>서비스: 회사가 제공하는 모든 서비스를 의미합니다.</li>
                <li>회원: 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
                <li>아이디(ID): 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</li>
            </ul>

            <h3>제3조 (약관의 효력 및 변경)</h3>
            <p>이 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다. 회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지됩니다.</p>

            <h3>제4조 (서비스의 제공 및 변경)</h3>
            <p>회사는 다음과 같은 업무를 수행합니다:</p>
            <ul>
                <li>서비스에 대한 정보 제공 및 이용계약의 체결</li>
                <li>이용계약이 체결된 서비스의 제공</li>
                <li>기타 회사가 정하는 업무</li>
            </ul>
        `,
        ja: `
            <h3>第1条（目的）</h3>
            <p>本規約は、북북노벨（以下「会社」）が提供するサービスの利用条件及び手続き、会社と会員間の権利、義務及び責任事項を規定することを目的とします。</p>

            <h3>第2条（定義）</h3>
            <p>本規約で使用する用語の定義は以下の通りです：</p>
            <ul>
                <li>サービス：会社が提供するすべてのサービスを意味します。</li>
                <li>会員：会社とサービス利用契約を締結し、会社が提供するサービスを利用する顧客を指します。</li>
                <li>ID：会員の識別とサービス利用のために会員が決定し、会社が承認する文字と数字の組み合わせを意味します。</li>
            </ul>

            <h3>第3条（規約の効力及び変更）</h3>
            <p>本規約は、サービスを利用しようとするすべての会員に対してその効力を発生します。会社は合理的な事由が発生した場合、本規約を変更することができ、変更された規約はサービス内お知らせを通じて公知されます。</p>
        `,
        en: `
            <h3>Article 1 (Purpose)</h3>
            <p>These Terms of Service aim to define the terms and procedures for using the services provided by 북북노벨 (hereinafter "Company"), as well as the rights, obligations, and responsibilities between the Company and its members.</p>

            <h3>Article 2 (Definitions)</h3>
            <p>The definitions of terms used in these Terms are as follows:</p>
            <ul>
                <li>Service: All services provided by the Company.</li>
                <li>Member: A customer who has entered into a service agreement with the Company and uses the services provided by the Company.</li>
                <li>ID: A combination of letters and numbers determined by the member and approved by the Company for member identification and service use.</li>
            </ul>

            <h3>Article 3 (Effectiveness and Amendment of Terms)</h3>
            <p>These Terms become effective for all members who wish to use the Service. The Company may amend these Terms when reasonable grounds arise, and amended Terms will be announced through in-service notifications.</p>
        `
    },
    privacy: {
        ko: `
            <h3>개인정보 수집 및 이용 목적</h3>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
            <ul>
                <li>회원 가입 의사의 확인, 회원제 서비스 제공에 따른 본인 식별·인증</li>
                <li>서비스 제공을 위한 연락이나 안내</li>
                <li>법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치</li>
                <li>서비스의 개선 및 새로운 서비스 개발</li>
            </ul>

            <h3>수집하는 개인정보 항목</h3>
            <p>회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다:</p>
            <ul>
                <li>필수항목: 이름, 아이디, 비밀번호, 이메일 주소, 휴대전화번호, 생년월일</li>
                <li>선택항목: 마케팅 수신 동의, 이벤트 정보 수신 동의</li>
            </ul>

            <h3>개인정보의 보유 및 이용기간</h3>
            <p>회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 의해 보관이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>
        `,
        ja: `
            <h3>個人情報の収集及び利用目的</h3>
            <p>会社は以下の目的のために個人情報を処理します：</p>
            <ul>
                <li>会員登録意思の確認、会員制サービス提供に伴う本人識別・認証</li>
                <li>サービス提供のための連絡や案内</li>
                <li>法令及び利用規約に違反する会員に対する利用制限措置</li>
                <li>サービスの改善及び新しいサービス開発</li>
            </ul>

            <h3>収集する個人情報項目</h3>
            <p>会社は会員登録、相談、サービス申請等のために以下のような個人情報を収集しています：</p>
            <ul>
                <li>必須項目：氏名、ID、パスワード、メールアドレス、携帯電話番号、生年月日</li>
                <li>選択項目：マーケティング受信同意、イベント情報受信同意</li>
            </ul>
        `,
        en: `
            <h3>Purpose of Personal Information Collection and Use</h3>
            <p>The Company processes personal information for the following purposes:</p>
            <ul>
                <li>Confirmation of membership registration intent, identity verification for membership services</li>
                <li>Contact and guidance for service provision</li>
                <li>Usage restriction measures for members who violate laws and terms of service</li>
                <li>Service improvement and new service development</li>
            </ul>

            <h3>Personal Information Items Collected</h3>
            <p>The Company collects the following personal information for membership registration, consultation, and service applications:</p>
            <ul>
                <li>Required items: Name, ID, password, email address, mobile phone number, date of birth</li>
                <li>Optional items: Marketing consent, event information consent</li>
            </ul>
        `
    },
    marketing: {
        ko: `
            <h3>마케팅 정보 수신 동의</h3>
            <p>회사는 회원에게 다음과 같은 마케팅 정보를 제공할 수 있습니다:</p>
            <ul>
                <li>새로운 서비스 및 기능 안내</li>
                <li>할인 혜택 및 프로모션 정보</li>
                <li>설문조사 및 이벤트 참여 안내</li>
                <li>맞춤형 광고 및 콘텐츠 제공</li>
            </ul>

            <h3>발송 방법</h3>
            <p>마케팅 정보는 이메일, SMS, 앱 푸시 알림 등의 방법으로 발송됩니다.</p>

            <h3>수신 거부</h3>
            <p>회원은 언제든지 마케팅 정보 수신을 거부할 수 있으며, 수신 거부 시에도 서비스 이용에는 제한이 없습니다.</p>
        `,
        ja: `
            <h3>マーケティング情報受信同意</h3>
            <p>会社は会員に以下のようなマーケティング情報を提供することができます：</p>
            <ul>
                <li>新しいサービス及び機能案内</li>
                <li>割引特典及びプロモーション情報</li>
                <li>アンケート及びイベント参加案内</li>
                <li>カスタマイズ広告及びコンテンツ提供</li>
            </ul>
        `,
        en: `
            <h3>Marketing Information Consent</h3>
            <p>The Company may provide members with the following marketing information:</p>
            <ul>
                <li>New service and feature announcements</li>
                <li>Discount benefits and promotional information</li>
                <li>Survey and event participation invitations</li>
                <li>Personalized advertisements and content</li>
            </ul>
        `
    },
    event: {
        ko: `
            <h3>이벤트 및 혜택 알림</h3>
            <p>회사는 회원에게 다음과 같은 이벤트 및 혜택 정보를 알려드립니다:</p>
            <ul>
                <li>기간 한정 이벤트 및 프로모션</li>
                <li>회원 등급별 특별 혜택</li>
                <li>생일 및 기념일 축하 이벤트</li>
                <li>포인트 적립 및 사용 안내</li>
            </ul>

            <h3>알림 방법</h3>
            <p>이벤트 정보는 이메일, SMS, 앱 내 알림 등으로 제공됩니다.</p>
        `,
        ja: `
            <h3>イベント及び特典お知らせ</h3>
            <p>会社は会員に以下のようなイベント及び特典情報をお知らせします：</p>
            <ul>
                <li>期間限定イベント及びプロモーション</li>
                <li>会員等級別特別特典</li>
                <li>誕生日及び記念日お祝いイベント</li>
                <li>ポイント積立及び使用案内</li>
            </ul>
        `,
        en: `
            <h3>Event and Benefits Notifications</h3>
            <p>The Company notifies members of the following event and benefit information:</p>
            <ul>
                <li>Limited-time events and promotions</li>
                <li>Special benefits by membership level</li>
                <li>Birthday and anniversary celebration events</li>
                <li>Point accumulation and usage guidance</li>
            </ul>
        `
    }
};

// 전역 변수
let currentLang = localStorage.getItem('preferred_language') || 'ko';
let currentTheme = localStorage.getItem('preferred_theme') || 'light';

// 페이지 이동 설정 - 여기서 원하는 URL을 설정하세요!
const REDIRECT_CONFIG = {
    url: 'register.html',        // 이동할 페이지 URL
    delay: 1500,                 // 토스트 메시지 표시 후 이동 대기 시간 (ms)
    openInNewTab: false          // 새 탭에서 열지 여부
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeTerms();
});

// 약관 초기화
function initializeTerms() {
    const agreeAllCheckbox = document.getElementById('agreeAll');
    const individualCheckboxes = document.querySelectorAll('.terms-item input[type="checkbox"]');
    const agreeBtn = document.getElementById('agreeBtn');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // 전체 동의 체크박스 이벤트
    agreeAllCheckbox.addEventListener('change', function() {
        const isChecked = this.checked;

        individualCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            updateTermsItemStyle(checkbox);
        });

        updateAllTermsStyle();
        updateAgreeButton();
    });

    // 개별 체크박스 이벤트
    individualCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateTermsItemStyle(this);
            updateAllTermsCheckbox();
            updateAgreeButton();
        });
    });

    // 약관 상세보기 버튼 이벤트
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const termsType = this.getAttribute('data-terms');
            showTermsModal(termsType);
        });
    });

    // 약관 동의 버튼 이벤트
    agreeBtn.addEventListener('click', handleTermsAgreement);

    // 초기 상태 업데이트
    updateAgreeButton();
}

function updateTermsItemStyle(checkbox) {
    const termsItem = checkbox.closest('.terms-item');
    if (checkbox.checked) {
        termsItem.classList.add('checked');
    } else {
        termsItem.classList.remove('checked');
    }
}

function updateAllTermsCheckbox() {
    const agreeAllCheckbox = document.getElementById('agreeAll');
    const individualCheckboxes = document.querySelectorAll('.terms-item input[type="checkbox"]');
    const totalCheckboxes = individualCheckboxes.length;
    const checkedCheckboxes = document.querySelectorAll('.terms-item input[type="checkbox"]:checked').length;

    agreeAllCheckbox.checked = totalCheckboxes === checkedCheckboxes;
    updateAllTermsStyle();
}

function updateAllTermsStyle() {
    const allTermsCheck = document.getElementById('allTermsCheck');
    const agreeAllCheckbox = document.getElementById('agreeAll');

    if (agreeAllCheckbox.checked) {
        allTermsCheck.classList.add('checked');
    } else {
        allTermsCheck.classList.remove('checked');
    }
}

function updateAgreeButton() {
    const agreeBtn = document.getElementById('agreeBtn');
    const requiredCheckboxes = document.querySelectorAll('.terms-item[data-required="true"] input[type="checkbox"]');
    const checkedRequiredCheckboxes = document.querySelectorAll('.terms-item[data-required="true"] input[type="checkbox"]:checked');

    agreeBtn.disabled = requiredCheckboxes.length !== checkedRequiredCheckboxes.length;
}

function showTermsModal(termsType) {
    const modal = new bootstrap.Modal(document.getElementById('termsModal'));
    const modalTitle = document.getElementById('termsModalLabel');
    const modalContent = document.getElementById('termsContent');

    const titles = {
        service: translations[currentLang].terms_of_service,
        privacy: translations[currentLang].privacy_policy,
        marketing: translations[currentLang].marketing_consent,
        event: translations[currentLang].event_consent
    };

    modalTitle.textContent = titles[termsType] || '약관 상세';
    modalContent.innerHTML = termsContent[termsType][currentLang] || '약관 내용을 불러올 수 없습니다.';

    modal.show();
}

function handleTermsAgreement() {
    const requiredCheckboxes = document.querySelectorAll('.terms-item[data-required="true"] input[type="checkbox"]');
    const checkedRequiredCheckboxes = document.querySelectorAll('.terms-item[data-required="true"] input[type="checkbox"]:checked');

    if (requiredCheckboxes.length !== checkedRequiredCheckboxes.length) {
        showToast(translations[currentLang].error_required_terms, 'error');
        return;
    }

    // 동의 정보 저장
    const agreementData = {
        termsOfService: document.getElementById('termsOfService').checked,
        privacyPolicy: document.getElementById('privacyPolicy').checked,
        ageConfirm: document.getElementById('ageConfirm').checked,
        marketingConsent: document.getElementById('marketingConsent').checked,
        eventConsent: document.getElementById('eventConsent').checked,
        agreedAt: new Date().toISOString()
    };

    localStorage.setItem('terms_agreement', JSON.stringify(agreementData));

    // 성공 토스트 메시지 표시
    showToast(translations[currentLang].agreement_complete, 'success');

    // 약관 동의 버튼 비활성화 (중복 클릭 방지)
    const agreeBtn = document.getElementById('agreeBtn');
    agreeBtn.disabled = true;
    agreeBtn.textContent = translations[currentLang].redirecting;

    // 지정된 시간 후 페이지 이동
    setTimeout(() => {
        redirectToNextPage();
    }, REDIRECT_CONFIG.delay);
}

// 페이지 이동 함수
function redirectToNextPage() {
    try {
        if (REDIRECT_CONFIG.openInNewTab) {
            // 새 탭에서 열기
            window.open(REDIRECT_CONFIG.url, '_blank');
        } else {
            // 현재 탭에서 이동
            window.location.href = "./../auth/register_page.html";
        }
    } catch (error) {
        console.error('페이지 이동 중 오류 발생:', error);
        showToast('페이지 이동 중 오류가 발생했습니다.', 'error');

        // 버튼 상태 복구
        const agreeBtn = document.getElementById('agreeBtn');
        agreeBtn.disabled = false;
        agreeBtn.textContent = translations[currentLang].agree_and_continue;
    }
}

// 페이지 이동 설정 변경 함수 (필요시 사용)
function updateRedirectConfig(newConfig) {
    Object.assign(REDIRECT_CONFIG, newConfig);
    console.log('페이지 이동 설정이 업데이트되었습니다:', REDIRECT_CONFIG);
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

// 페이지 네비게이션 (레거시 함수 - 호환성 유지)
function navigateToPage(page) {
    console.log(`Navigate to: ${page}.html`);
    updateRedirectConfig({ url: `${page}.html` });
    redirectToNextPage();
}