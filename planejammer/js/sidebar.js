var minimized = true;

$(document).ready(function() {
  $('.minmaxer').click(function() {
    if (!minimized) {
      $('.sidebar').css('width','100px');
      $('.minmaxer').html('+');
      $('.sidebar-contents').css('display','none');
      $('.content').css('width','85%');
      $('.content').css('left','10%');
      minimized = true;
    } else {
      $('.sidebar').css('width','390px');
      $('.sidebar-contents').css('display','block');
      $('.minmaxer').html('-');
      $('.content').css('width','60%');
      $('.content').css('left','35%');
      minimized = false;
    };
  });
});
