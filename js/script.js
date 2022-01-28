$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/programs/icons/left_arrow.png" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/programs/icons/right_arrow.png" alt=""> </button>',
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  });

  let   burger = document.querySelector('.header__navbar-burger'),
        menu = document.querySelector('.menu'),
        body = document.querySelector('body');

    function ToggleMenu() {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('fixed');
    }



    burger.addEventListener('click', () => {
        ToggleMenu();
    });