var winheight = $(window).height();
var winwidth = $(window).width();
/* focus */
function Focus(){
  $('#content').css("height",winheight - 60);
  if($.browser.msie && 9 > $.browser.version){
    $('#content').css("height",winheight);
  }
  if (winwidth <= 800) {
    $('#content').css("height",winwidth);
  }
}

/* countdown */
function countdown() {
  var second = 5;
  var numCount;
  $('#count').text(second + 's');
  numCount = setInterval(timedCount, 1000);
  function timedCount(){
      second--;
      $('#count').text(second + 's');
      if(second <= 0){
          clearInterval(numCount);
          $(".mask-box").hide();
      }
  }
  $('.mask p').show();
  $('.mask p').on('click', function(){
      clearInterval(numCount);
      $(".mask-box").hide();
  });
}
if (winwidth >= 800) {
  $('.mask-box').show();
  countdown();
}