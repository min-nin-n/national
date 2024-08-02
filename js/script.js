$(function () {
    var num = 0; // 현재슬라이드번호
    var slideCount = 8; // 슬라이드 총 개수
    var $slideWrapper = $('.slide-wrapper'); // 슬라이드 래퍼
    var $buttons = $('.buttons .btn'); // 모든버튼
    var slideInterval = 3000; // 2초 - 전환간격
    var slideWidth = 1200; // 슬라이드의 너비

    // 슬라이드 좌우 이동함수
    function slideMove() {
        var nextNum = (num + 1) % slideCount;
        $slideWrapper.animate({
            left: -nextNum * slideWidth + 'px'
        }, 700);
        $buttons.removeClass('active'); // 모든 버튼에 액티브 클래스 제거
        $buttons.eq(nextNum).addClass('active'); // 클릭한 버튼에 액티브 클래스 추가
        num = nextNum; // 업데이트 - num 변수에 다음 슬라이드 순서 저장하여 업데이트
    }

    // 슬라이드 이동 타이머 설정
    var timer = setInterval(slideMove, slideInterval);

    // 버튼 클릭 이벤트
    $buttons.click(function (event) {
        event.preventDefault(); // 클릭시 링크전환, 폼제출 등을 차단
        clearInterval(timer); // 기본 동작 (타이머) 중단
        var newSlide = $(this).data('slide'); // 클릭된 버튼의 슬라이드 번호

        if (newSlide !== num) {
            $slideWrapper.animate({
                left: -newSlide * slideWidth + 'px'
            }, 700);
            $buttons.removeClass('active'); // 모든버튼액티브제거
            $buttons.eq(newSlide).addClass('active'); // 클릭된 버튼에 액티브추가
            num = newSlide; // 현재 슬라이드 번호 업데이트
            // 슬라이드 이동 타이머 재설정
            timer = setInterval(slideMove, slideInterval);
        }
    });
});