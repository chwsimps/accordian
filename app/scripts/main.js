$('.head1').click(function() {
  $('.div1').addClass('open').removeClass('close');
  $('.div2').addClass('close').removeClass('open');
  $('.div3').addClass('close').removeClass('open');
});

$('.head2').click(function() {
  $('.div1').addClass('close').removeClass('open');
  $('.div2').addClass('open').removeClass('close');
  $('.div3').addClass('close').removeClass('open');
});

$('.head3').click(function() {
  $('.div1').addClass('close').removeClass('open');
  $('.div2').addClass('close').removeClass('open');
  $('.div3').removeClass('close').addClass('open');
});
