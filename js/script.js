$(document).ready(function(){

	/* слайдер */

	$('.baner').slick({
		dots: true,
		arrows: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="baner__arrow baner__arrow--prev"></button>',
		nextArrow: '<button type="button" class="baner__arrow baner__arrow--next"></button>',
		dotsClass: 'baner__dots'
	});


	$('.slider-bonus--top').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		initialSlide: 0,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		responsive: [
  		{
  			breakpoint: 1279,
  			settings: {
  				slidesToShow: 6,
  				slidesToScroll: 1
  			}
  		},
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
		]
	});

	$('.slider-bonus--footer').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 1000,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 813,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 638,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 462,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
		]
	});



	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"></button>',
		responsive: [
  		{
  			breakpoint: 1279,
  			settings: {
  				slidesToShow: 4,
  				slidesToScroll: 1
  			}
  		},
      {
        breakpoint: 937,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
		]
	});

	$(".footer-bonus__show").click(function () {
		if (!($(".footer-bonus").hasClass("footer-bonus--opened"))) {
			$(".footer-bonus").addClass("footer-bonus--opened");
			$(this).text("Свернуть");
			return false;
		}else{
			$(".footer-bonus").removeClass("footer-bonus--opened");
			$(this).text("Показать");
			$('.slider-bonus--footer').slick('reinit');
			return false;
		}
		
	});
	$(".footer-map__show-btn").click(function () {
		$(".yandex-map").addClass("yandex-map--opened");
		$(this).hide();
		$(".footer-map__hide-btn").show();
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	$(".footer-map__hide-btn").click(function () {
		$(".yandex-map").removeClass("yandex-map--opened");
		$(this).hide();
		$(".footer-map__show-btn").show();
		return false;
	});


  /* плавающее главное меню */
  
	var $menu = $(".float-menu");

   $(window).scroll(function(){
       if ( $(this).scrollTop() > 150 && $menu.hasClass("float-menu--default") ){
           $menu.removeClass("float-menu--default").addClass("float-menu--fixed");
       } else if($(this).scrollTop() <= 150 && $menu.hasClass("float-menu--fixed")) {
           $menu.removeClass("float-menu--fixed").addClass("float-menu--default");
       }
   });

  /* аккордеон */


  $('.catalog-item__header').click(function() {	
  	if ($(this).hasClass('noslide')) {
  		return true;
  	}
  	$(this).toggleClass('active');		
  	$(this).next('div').slideToggle(200);
  });


  $('.filter__legend').click(function() {	
  	$(this).toggleClass('active');		
  	$(this).next('div').slideToggle(200);	
  });

  /* Fancybox */


  if ($('.login__lnk.lnk-fancybox').length){
  	$('.login__lnk.lnk-fancybox').fancybox({
  		wrapCSS: "login--fancy-popup",
  		helpers: {
  			overlay: {
  				locked: false
  			}
  		}
  	});
  }; 
  
  if ($('.popup-goods.lnk-fancybox').length){
  	$('.popup-goods.lnk-fancybox').fancybox({
  		wrapCSS: "goods--fancy-popup",
  		helpers: {
  			overlay: {
  				locked: false
  			}
  		},
  		afterShow: function () {
				$('.slick-slider').slick('reinit');
			}
  	});
  }; 
  


  /* range */ 

  $( ".filter__range" ).slider({
  	range: true,
  	min: 0,
  	max: 5000,
  	values: [ 1000, 4000 ],
  	slide: function( event, ui ) {
  		$( "#amountMin" ).val( ui.values[ 0 ]);
  		$( "#amountMax" ).val( ui.values[ 1 ]);
  	}
  });
  $( "#amountMin" ).val($( ".filter__range" ).slider( "values", 0 ));
  $( "#amountMax" ).val($( ".filter__range" ).slider( "values", 1 ));


  /* детальный просмотр */


  $('.goods-detail__img-big').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.goods-detail__img-preview'
  });

  $('.goods-detail__img-preview').slick({    
    swipe: true,
  	asNavFor: '.goods-detail__img-big',
  	dots: false,
  	arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  	centerMode: false,
  	focusOnSelect: true,
    prevArrow: '<button type="button" class="goods-detail__slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="goods-detail__slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  	responsive: [
  	{
  		breakpoint: 913,
  		settings: {
  			slidesToShow: 4,
  			slidesToScroll: 1
  		}
  	},
    {
      breakpoint: 741,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  	]
  });  


  $('.goods-detail__count-minus').click(function () {
  	var $input = $(this).parent().find('input');
  	var count = parseInt($input.val()) - 1;
  	count = count < 1 ? 1 : count;
  	$input.val(count);
  	$input.change();
  	return false;
  });
  $('.goods-detail__count-plus').click(function () {
  	var $input = $(this).parent().find('input');
  	$input.val(parseInt($input.val()) + 1);
  	$input.change();
  	return false;
  });

  /* спойлер в таблице */
  
  $('.table__goods-item').each(function(indx){  	
  	if ($(this).children().length > 3) {
  		$(this).append("<a class='table__more-lnk'>Еще 5 товаров +</a>");
  	}
	});
	
	$(".table__more-lnk").click(function () {
  	$(this).closest('.table__goods-item').toggleClass('opened');
  	$(this).remove();
  });
	
	$(".history-bonus__title").click(function () {
		$(".table-hide").slideToggle();
	})

  /* select */
	$('.slct').click(function(){		
		var dropBlock = $(this).parent().find('.drop');
		
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();
			$(this).addClass('active');			
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		return false;
	});
  
  $('.drop').find('li').click(function(){
      
      var selectResult = $(this).find('a').data('value');
      
      $(this).parent().parent().find('input').val(selectResult);
     
      $(this).parent().parent().find('.slct').text($(this).text());
      $(this).parent().parent().find('.slct').removeClass('active');
     
      $(this).parents('.drop').slideUp();
      $(this).parent().parent().find('input').change();
  });

  /* треугольник в фильтре */

  $(".filter-top__sort-item").click(function () {
  	$(this).toggleClass("angle-down");
  	return false;
  });

  /* показать товары в фильтре*/


	$('.filter__check input[type=checkbox]').change(function() {
    if ($(this).prop('checked')) {
    	$(this).parent(".filter__check").find(".filter__show-remain").addClass("show");  
    } else {
    	$(this).parent(".filter__check").find(".filter__show-remain").removeClass("show");  
    }  
	});

  /*  меню */

  $(".nav-main__item").click(function () {
    if ($(this).hasClass('noslide')) {
      return true;
    }else{
      $(this).parent().addClass("droping");
      return false;
    }
  });


  /* меню адаптив */

  $(".btn-responsive-menu").click(function () {
    $(".nav-top__list").addClass("opened");
    $("body").addClass("overlay");
  });

  $(".btn-responsive-menu--close").click(function () {
    $(".nav-top__list").removeClass("opened");
    $(".menu-catalog-responsive").removeClass("opened");
    $("body").removeClass("overlay");
  });

  $(".nav-main-responsive").click(function () {
    $(".menu-catalog-responsive").addClass("opened");
    $("body").addClass("overlay");
  });

  $(".sublist__item--title").click(function () {
    $(this).parent().toggleClass("opened");
  });
 

  function window_resize() {
    var page_w = $(window).width();

    if (page_w <= 1350) {
      $(".search__btn").text("");
    }
    if (page_w <= 1198) {
      $(".float-menu").removeClass("float-menu--default");
      $(".show-left-filter").click(function () {
        $("form.filter").slideToggle(300);
      })
    }
    if (page_w <= 445) {
      $(".nav-main-responsive").text("Каталог");
      $(".login__lnk").text("");
      $(".footer-bonus__show").text("");
    }
  }

  window_resize();


});
