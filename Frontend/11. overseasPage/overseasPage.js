//해더 스크롤 함수
$(function() {
  $(window).scroll(function() {
    let top = $(window).scrollTop();

    if (top > 0)
      $('#header').addClass('inverted');
    else
      $('#header').removeClass('inverted');
  });

  $(window).trigger('scroll');
  //스크롤 이벤트를 임의로 발생시켜 스크롤 오류를 방지
  //스크롤을 내린 상태에서 새로 고침 했을때 addClass가 적용되어 있지 않을 수 있기 때문
})