function myscroll() {
  console.log("Click");
  $('html, body').animate({
    scrollTop: $("#bottomtext").offset().top
  }, 1000);
}

/*$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.btn-success, .slogan').css({
        'opacity': ((height - scrollTop) / height)
    });
});*/
