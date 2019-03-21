function myscroll() {
  console.log("Click");
  $('html, body').animate({
    scrollTop: $("#bottomtext").offset().top
  }, 1000);
}
