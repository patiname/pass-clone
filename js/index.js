$(document).ready(function () {
  $(window).scroll(function () {
    const sec_2_h = $(".section_2").offset().top;
    const sct = $(window).scrollTop();
    console.log(sec_2_h);

    if (sct > 0) {
      $("header").css({
        backgroundColor: "#fff",
        borderBottom: "1px solid #dbdbdb",
      });
    } else {
      $("header").css({
        backgroundColor: "transprent",
        borderBottom: "none",
      });
    }
    /* header event */

    if (sct >= sec_2_h) {
      $(".con_3 .title_wrap").addClass("title_active");
      $(".img_wrap_3").addClass("img_wrap_3_active");
    }
  });
}); //end
