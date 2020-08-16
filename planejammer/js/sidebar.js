var minimized = true;

$(document).ready(function() {
  $('.minmaxer').click(function() {
    if (!minimized) {
      $('.sidebar').css('width','100px');
      $('.minmaxer').html('+');
      $('.sidebar-contents').css('display','none');
      minimized = true;
    } else {
      $('.sidebar').css('width','390px');
      $('.sidebar-contents').css('display','block');
      $('.minmaxer').html('-');
      minimized = false;
    };

  });
});
