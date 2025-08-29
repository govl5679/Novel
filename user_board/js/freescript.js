// user_board/js/freescript.js
// free_list.html 전용 스크립트

$(document).ready(function () {
                // 게시물 데이터 (실제로는 서버에서 가져올 데이터)
                let allPosts = [
                    {
                        id: 1,
                        title: "쟤내 회사 망했데 ㅋㅋ",
                        author: "zㅣ존멸망",
                        date: "25.07.04",
                        dateValue: new Date("2025-07-04"),
                        likes: 20,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 2,
                        title: "사실 뻥임",
                        author: "뻥장수",
                        date: "25.07.04",
                        dateValue: new Date("2025-07-04"),
                        likes: 2,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 3,
                        title: "너나렙 리뷰",
                        author: "날씨조아",
                        date: "25.07.05",
                        dateValue: new Date("2025-07-05"),
                        likes: 18,
                        category: "review",
                        link: "../user_board/review.html"
                    },
                    {
                        id: 4,
                        title: "살죽헌",
                        author: "배고파요",
                        date: "25.07.05",
                        dateValue: new Date("2025-07-05"),
                        likes: 3,
                        category: "free",
                        link: "../user_board/review.html"
                    },
                    {
                        id: 5,
                        title: "전작시 작품 홍보",
                        author: "개발자123",
                        date: "25.07.06",
                        dateValue: new Date("2025-07-06"),
                        likes: 25,
                        category: "promotion",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 6,
                        title: "픽업",
                        author: "주말러버",
                        date: "25.07.06",
                        dateValue: new Date("2025-07-06"),
                        likes: 4,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 7,
                        title: "만렙회귀 리뷰",
                        author: "카페인중독",
                        date: "25.07.07",
                        dateValue: new Date("2025-07-07"),
                        likes: 16,
                        category: "review",
                        link: "../user_board/review.html"
                    },
                    {
                        id: 8,
                        title: "웹소설 top10",
                        author: "영화매니아",
                        date: "25.07.07",
                        dateValue: new Date("2025-07-07"),
                        likes: 12,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 9,
                        title: "웹소설 추천 부탁드려요",
                        author: "독서왕",
                        date: "25.07.08",
                        dateValue: new Date("2025-07-08"),
                        likes: 7,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 10,
                        title: "노벨띠아 이대로 괜찮은가",
                        author: "헬스초보",
                        date: "25.07.08",
                        dateValue: new Date("2025-07-08"),
                        likes: 9,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 11,
                        title: "일본vs한국 웹소설",
                        author: "여행러",
                        date: "25.07.09",
                        dateValue: new Date("2025-07-09"),
                        likes: 11,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 12,
                        title: "저는 러브코미디가 좋아요",
                        author: "취미탐험가",
                        date: "25.07.09",
                        dateValue: new Date("2025-07-09"),
                        likes: 3,
                        category: "free",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 13,
                        title: "신작 홍보합니다!",
                        author: "신인작가",
                        date: "25.07.10",
                        dateValue: new Date("2025-07-10"),
                        likes: 22,
                        category: "promotion",
                        link: "../user_board/free.html"
                    },
                    {
                        id: 14,
                        title: "최고의 판타지 소설 리뷰",
                        author: "리뷰어",
                        date: "25.07.11",
                        dateValue: new Date("2025-07-11"),
                        likes: 30,
                        category: "review",
                        link: "../user_board/review.html"
                    }
                ];

                let filteredPosts = [...allPosts]; // 필터링된 게시물 배열
                let currentPage = 1; // 현재 페이지
                let itemsPerPage = 10; // 페이지당 아이템 수
                let currentTab = "all"; // 현재 선택된 탭
                let currentSort = "date"; // 현재 정렬 방식 (date 또는 likes)
                let showBestOnly = false; // 베스트글만 보기 여부

                // 베스트 게시물 판별 함수 (추천수 15 이상)
                function isBestPost(post) {
                    return post.likes >= 15;
                }

                /// 테이블 행 HTML 생성 함수
                function createRowHTML(post) {
                    // 전체 탭에서 추천수 15 이상일 때 베스트 배지 표시
                    const bestBadge = isBestPost(post) ?
                        '<span class="best-badge">베스트</span>' : '';

                    // 말머리 설정
                    let prefix = '';
                    if (post.category === 'review') {
                        prefix = "<span class='badge-review'>[작품리뷰] </span>";
                    } else if (post.category === 'promotion') {
                        prefix = "<span class='badge-promotion'>[작품홍보] </span>";
                    }

                    return `
                    <tr class="post-row" data-id="${post.id}" data-title="${post.title.toLowerCase()}" data-author="${post.author.toLowerCase()}" data-category="${post.category}">
                    <td class="text-center">${post.id}</td>
                    <td class="px-4 py-4 post-title">
                    ${bestBadge}<span class="title-text">${prefix}${post.title}</span>
                    </td>
                    <td class="text-center post-author">${post.author}</td>
                    <td class="text-center">${post.date}</td>
                    <td class="text-center">${post.likes}</td>
                     </tr> `;
                }

                // 탭별 게시물 필터링
                function filterByTab(tab) {
                    currentTab = tab;

                    if (tab === "all") {
                        filteredPosts = [...allPosts];
                    } else {
                        filteredPosts = allPosts.filter(post => post.category === tab);
                    }

                    // 베스트글 필터가 활성화되어 있다면 추가 필터링
                    if (showBestOnly) {
                        applyBestFilter();
                    }

                    // 검색어가 있다면 추가로 필터링
                    const searchTerm = $('#search-term').val().trim();
                    if (searchTerm) {
                        applySearch();
                    } else {
                        sortPosts();
                        renderAllPosts();
                    }
                }

                // 베스트글 필터 적용
                function applyBestFilter() {
                    if (showBestOnly) {
                        // 현재 필터된 게시물 중에서 베스트 게시물만 필터링
                        filteredPosts = filteredPosts.filter(post => isBestPost(post));
                    }
                }

                // 정렬 적용
                function sortPosts() {
                    if (currentSort === "likes") {
                        filteredPosts.sort((a, b) => b.likes - a.likes);
                    } else {
                        // 베스트글 버튼이 꺼진 상태에서는 번호 내림차순
                        filteredPosts.sort((a, b) => {
                            if (b.dateValue - a.dateValue !== 0) {
                                return b.dateValue - a.dateValue;
                            }
                            if (!showBestOnly) {
                                return b.id - a.id; // 번호 내림차순
                            }
                            return a.id - b.id; // 베스트글 필터가 켜진 경우 기존대로 오름차순
                        });
                    }
                }

                // 모든 게시물 렌더링
                function renderAllPosts() {
                    const postList = $('#postList');
                    postList.empty();

                    filteredPosts.forEach(post => {
                        const rowHTML = createRowHTML(post);
                        postList.append(rowHTML);
                    });

                    // 행 클릭 이벤트 추가
                    $('.post-row').click(function () {
                        const postId = $(this).data('id');
                        const post = allPosts.find(p => p.id === postId);
                        if (post && post.link) {
                            location.href = post.link;
                        }
                    });

                    updateResultInfo();
                    renderPagination();
                    showPage(1);
                }

                // 페이지네이션 렌더링
                function renderPagination() {
                    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
                    const pagination = $('#pagination');
                    pagination.empty();

                    if (totalPages <= 1) {
                        pagination.hide();
                        return;
                    }

                    pagination.show();

                    // 처음 페이지 버튼
                    pagination.append(`
                    <li class="page-item ${currentPage <= 1 ? 'disabled' : ''}">
                        <a class="page-link" href="#" id="first-page" aria-label="First">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                `);

                    // 이전 페이지 버튼
                    pagination.append(`
                    <li class="page-item ${currentPage <= 1 ? 'disabled' : ''}">
                        <a class="page-link" href="#" id="prev-page" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                        </a>
                    </li>
                `);

                    // 페이지 번호 버튼들
                    const startPage = Math.max(1, currentPage - 2);
                    const endPage = Math.min(totalPages, currentPage + 2);

                    for (let i = startPage; i <= endPage; i++) {
                        const activeClass = i === currentPage ? 'active' : '';
                        pagination.append(`
                        <li class="page-item ${activeClass}">
                            <a class="page-link page-num" href="#" data-page="${i}">${i}</a>
                        </li>
                    `);
                    }

                    // 다음 페이지 버튼
                    pagination.append(`
                    <li class="page-item ${currentPage >= totalPages ? 'disabled' : ''}">
                        <a class="page-link" href="#" id="next-page" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                        </a>
                    </li>
                `);

                    // 마지막 페이지 버튼
                    pagination.append(`
                    <li class="page-item ${currentPage >= totalPages ? 'disabled' : ''}">
                        <a class="page-link" href="#" id="last-page" aria-label="Last">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                `);

                    // 페이지 정보 업데이트
                    $('#current-page-info').text(currentPage);
                    $('#total-page-info').text(totalPages);
                }

                // 특정 페이지 표시
                function showPage(page) {
                    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
                    currentPage = Math.max(1, Math.min(page, totalPages));

                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;

                    // 모든 행 숨기기
                    $('.post-row').addClass('hidden');

                    // 현재 페이지의 게시물들만 표시
                    const currentPosts = filteredPosts.slice(startIndex, endIndex);
                    currentPosts.forEach(post => {
                        $(`.post-row[data-id="${post.id}"]`).removeClass('hidden');
                    });

                    // 결과 없음 메시지 처리
                    if (filteredPosts.length === 0) {
                        $('#no-results').show();
                        $('.table').hide();
                    } else {
                        $('#no-results').hide();
                        $('.table').show();
                    }

                    renderPagination();

                    // 페이지 이동 시에만 스크롤을 테이블 맨 위로
                    if (page !== 1) {
                        $('html, body').animate({
                            scrollTop: $('.table').offset().top - 100
                        }, 300);
                    }
                }

                // 검색 결과 정보 업데이트
                function updateResultInfo() {
                    const searchTerm = $('#search-term').val().trim();
                    let infoText = '';

                    if (showBestOnly && searchTerm) {
                        infoText = `'<strong>${searchTerm}</strong>' 베스트글 검색 결과: <span id="total-count">${filteredPosts.length}</span>개`;
                    } else if (showBestOnly) {
                        infoText = `베스트글: <span id="total-count">${filteredPosts.length}</span>개`;
                    } else if (searchTerm) {
                        infoText = `'<strong>${searchTerm}</strong>' 검색 결과: <span id="total-count">${filteredPosts.length}</span>개`;
                    } else {
                        infoText = `전체 <span id="total-count">${filteredPosts.length}</span>개의 게시물이 있습니다.`;
                    }

                    $('#result-info').html(infoText);
                }

                // 검색 적용
                function applySearch() {
                    const searchTerm = $('#search-term').val().trim().toLowerCase();
                    const category = $('#category').val();

                    // 먼저 탭별로 필터링
                    let tabFilteredPosts;
                    if (currentTab === "all") {
                        tabFilteredPosts = [...allPosts];
                    } else {
                        tabFilteredPosts = allPosts.filter(post => post.category === currentTab);
                    }

                    // 베스트글 필터가 활성화되어 있다면 베스트 게시물만 필터링
                    if (showBestOnly) {
                        tabFilteredPosts = tabFilteredPosts.filter(post => isBestPost(post));
                    }

                    // 검색어가 있으면 추가 필터링
                    if (!searchTerm) {
                        filteredPosts = tabFilteredPosts;
                    } else {
                        filteredPosts = tabFilteredPosts.filter(post => {
                            if (category === 'title') {
                                return post.title.toLowerCase().includes(searchTerm);
                            } else if (category === 'author') {
                                return post.author.toLowerCase().includes(searchTerm);
                            } else if (category === 'comment') {
                                return post.title.toLowerCase().includes(searchTerm) ||
                                    post.author.toLowerCase().includes(searchTerm);
                            }
                            return false;
                        });
                    }

                    sortPosts();
                }

                // 검색 기능
                function performSearch() {
                    applySearch();

                    // 검색 결과 하이라이트
                    const searchTerm = $('#search-term').val().trim();
                    if (searchTerm) {
                        setTimeout(() => {
                            highlightSearchTerm(searchTerm);
                        }, 100);
                    }

                    renderAllPosts();

                    // 토스트 메시지
                    $.toast({
                        heading: '검색 완료',
                        text: `${filteredPosts.length}개의 결과를 찾았습니다.`,
                        icon: 'info',
                        position: 'top-right',
                        hideAfter: 2000
                    });
                }

                // 검색어 하이라이트
                function highlightSearchTerm(term) {
                    if (!term) return;

                    $('.title-text, .post-author').each(function () {
                        const $this = $(this);
                        const text = $this.text();
                        const regex = new RegExp(`(${term})`, 'gi');
                        const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
                        $this.html(highlightedText);
                    });
                }

                // 하이라이트 제거
                function removeHighlight() {
                    $('.search-highlight').each(function () {
                        const $this = $(this);
                        $this.replaceWith($this.text());
                    });
                }

                // 검색 초기화
                function resetSearch() {
                    $('#search-term').val('');
                    $('#category').val('title');
                    removeHighlight();

                    // 베스트글 필터도 초기화
                    showBestOnly = false;
                    $('#filter-best').removeClass('btn-secondary').addClass('btn-outline-secondary');

                    filterByTab(currentTab); // 현재 탭에 맞게 다시 필터링

                    $.toast({
                        heading: '검색 초기화',
                        text: '검색이 초기화되었습니다.',
                        icon: 'success',
                        position: 'top-right',
                        hideAfter: 2000
                    });
                }

                // 베스트글 필터 토글
                function toggleBestFilter() {
                    showBestOnly = !showBestOnly;

                    if (showBestOnly) {
                        $('#filter-best').removeClass('btn-outline-secondary').addClass('btn-secondary');
                    } else {
                        $('#filter-best').removeClass('btn-secondary').addClass('btn-outline-secondary');
                    }

                    // 현재 탭과 검색 조건을 유지하면서 베스트글 필터 적용
                    filterByTab(currentTab);

                    const message = showBestOnly ? '베스트글만 표시합니다.' : '전체 게시글을 표시합니다.';
                    $.toast({
                        heading: '필터 변경',
                        text: message,
                        icon: 'info',
                        position: 'top-right',
                        hideAfter: 1500
                    });
                }

                // 탭 클릭 이벤트
                $('.nav-tabs button').click(function (e) {
                    e.preventDefault();

                    // 탭 활성화 상태 변경
                    $('.nav-tabs button').removeClass('active');
                    $(this).addClass('active');

                    // 탭별 필터링
                    const tab = $(this).data('tab');
                    filterByTab(tab);
                });

                // 정렬 버튼 이벤트
                $('#sort-likes').click(function () {
                    currentSort = "likes";
                    $('.sort-buttons .btn:not(#filter-best)').removeClass('btn-secondary').addClass('btn-outline-secondary');
                    $(this).removeClass('btn-outline-secondary').addClass('btn-secondary');

                    sortPosts();
                    renderAllPosts();

                    $.toast({
                        heading: '정렬 변경',
                        text: '추천수 순으로 정렬되었습니다.',
                        icon: 'info',
                        position: 'top-right',
                        hideAfter: 1500
                    });
                });

                $('#sort-date').click(function () {
                    currentSort = "date";
                    $('.sort-buttons .btn:not(#filter-best)').removeClass('btn-secondary').addClass('btn-outline-secondary');
                    $(this).removeClass('btn-outline-secondary').addClass('btn-secondary');

                    sortPosts();
                    renderAllPosts();

                    $.toast({
                        heading: '정렬 변경',
                        text: '등록일 순으로 정렬되었습니다.',
                        icon: 'info',
                        position: 'top-right',
                        hideAfter: 1500
                    });
                });

                // 베스트글 필터 버튼 이벤트
                $('#filter-best').click(function () {
                    toggleBestFilter();
                });

                // 이벤트 핸들러들
                $('#search-btn').click(function (e) {
                    e.preventDefault();
                    performSearch();
                });

                $('#reset-btn').click(function (e) {
                    e.preventDefault();
                    resetSearch();
                });

                // Enter 키로 검색
                $('#search-term').keypress(function (e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        performSearch();
                    }
                });

                // 페이지네이션 이벤트 (이벤트 위임 사용)
                $(document).on('click', '#first-page', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().hasClass('disabled')) {
                        showPage(1);
                    }
                });

                $(document).on('click', '#last-page', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().hasClass('disabled')) {
                        const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
                        showPage(totalPages);
                    }
                });

                $(document).on('click', '#prev-page', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().hasClass('disabled')) {
                        showPage(currentPage - 1);
                    }
                });

                $(document).on('click', '#next-page', function (e) {
                    e.preventDefault();
                    if (!$(this).parent().hasClass('disabled')) {
                        showPage(currentPage + 1);
                    }
                });

                $(document).on('click', '.page-num', function (e) {
                    e.preventDefault();
                    const page = parseInt($(this).data('page'));
                    showPage(page);
                });

                // 초기 설정 및 렌더링
                currentSort = "date"; // 기본값을 등록일 순으로 설정
                $('#sort-date').removeClass('btn-outline-secondary').addClass('btn-secondary');
                filterByTab("all"); // 전체 탭으로 시작
            });

            // 다크 모드 전환
            $('#dark-mode-toggle').on('click', function (e) {
                e.preventDefault();
                const htmlElement = $('html');
                const currentTheme = htmlElement.attr('data-bs-theme');

                if (currentTheme === 'dark') {
                    htmlElement.attr('data-bs-theme', 'light');
                    $(this).text('다크모드');
                } else {
                    htmlElement.attr('data-bs-theme', 'dark');
                    $(this).text('라이트모드');
                }
            });