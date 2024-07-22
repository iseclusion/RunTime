$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left_arrow"></img></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg" alt="right_arrow"></img></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
