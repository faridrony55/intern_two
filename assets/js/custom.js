/*
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	
});
*/
 $(window).scroll(function() { 
   			 $(".mainmenu_area").removeClass("menutop");
			    var scroll = $(window).scrollTop();
			    if (scroll > 50) {
					$(".mainmenu_area").addClass("menutop");
				}
		});
	

$('#nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 2000
});
	
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
 

 ( function( $ ) {
/* Preloader */
/**************************************/
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(100).fadeOut("slow");
	jQuery("body").css('overflow-y','visible');

});

 
	/***************** Animation ******************/
	var wow = new WOW(
	{
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: false, // trigger animations on mobile devices (default is true)
	live: true // act on asynchronously loaded content (default is true)
	}
	);
	
	wow.init();
		
		
 
 
 

jQuery('.counter').countTo({
	speed: 4000,
	refreshInterval: 2
});
} )( jQuery );		





/*=================================
Active Slick slider for clint Logo area  
==================================*/ 
$(document).ready(function(){
$('.logo_slide').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 1500,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

/*==================================================
js for mainmenu stick in top
=====================================================*/ 
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
		//This is for when div in top
	     jQuery(".header_bottom").css({"padding": "14px 0 14px",});	
	     jQuery(".search_box_full").css({"bottom": "6px",});	
	     jQuery(".search_box").css({"top": "31%",});	


		  
    } else {
        $('#sticky').removeClass('stick');
		//This is for when div in not top

		  	     jQuery(".header_bottom").css({"padding": "37px 0",});
				 jQuery(".search_box_full").css({"bottom": "26px",});
				 jQuery(".search_box").css({"top": "38%",});
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
	

/*=================================
Active nav menu displayed 
==================================*/

// Cache selectors
var lastId,
    topMenu = $("#nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
/*=================================
Js code for search box 
==================================*/
  $(document).ready(function(){
		 $("#first_click").click(function(){
			 $("#first_click").hide();
			 $("#second_click").css('display','block');
			 $(".header_bottom").addClass("sohag_box");
		 });
		 $("#second_click").click(function(){
			 $("#second_click").hide();
			 $("#first_click").css('display','block');
			  $(".header_bottom").removeClass("sohag_box");
		 });
		 //This code for Mobile Nav menu
		 $("#first_click_menu").click(function(){
			 $("#first_click_menu").hide();
			 $("#second_click_minus").css('display','block');
			 $(".header_bottom").addClass("sohag_box_nav_menu");
		 });
		 $("#second_click_minus").click(function(){
			 $("#second_click_minus").hide();
			 $("#first_click_menu").css('display','block');
			  $(".header_bottom").removeClass("sohag_box_nav_menu");
		 });
		 
	 });
	 
	 
/*=================================
Active Mobile Nav Menu 
==================================*/
		$(document).ready(function(){
			$(".nav-button").click(function(){
				$(".mainmenu").slideToggle(400, function(){
					$(this).toggleClass("menu-block").css("display","");
				});
			});
		});	
/*=================================
Active Slider and define Slider Item
==================================*/			
        $(function()
        {
            $(".anim-slider").animateSlider(
				{
					autoplay    :   true,   //starts the autoplay 
					interval    :   7000,   //time between slides if autoplay is true
					animations  :           //specify the animations for each element of the slide 
					{
						0   :   //Slide No1
						{
							".fist_slide_img"   :
							{
							   show   	  : "bounceIn",
							   hide 	  : "flipOutX",
							   delayShow : "delay2s"
							},
							".first_slide_h2"   :
							{
							   show   	  : "bounceIn",
							   hide 	  : "flipOutX",
							   delayShow : "delay1s"								
							},
							".first_slide_h3"   :
							{
							   show 	  : "fadeInUpBig",
							   hide 	  : "fadeOutDownBig",
							   delayShow : "delay1-5s"
							},
							".first_slide_h4"   :
							{
								show   	  : "bounceInRight",
								hide 	  : "fadeOutRightBig",
								delayShow : "delay1-5s"
							},
							".first_slide_button_one"   :
							{
							   show         :   "rotateInUpLeft",
							   hide         :   "bounceOut",
							   delayShow : "delay1-5s"
							},
							".first_slide_button_two"   :
							{
							   show         :   "rotateInUpRight",
							   hide         :   "bounceOut",
							   delayShow : "delay1-5s"
							},
						},
						1   :   //Slide No2
						{
							".second_slide_img"   :
							{
							   show         :   "bounceIn",
							   hide         :   "bounceOut",
							   delayShow    :   "delay1s"
							},
							".second_slide_h2"   :
							{
							   show         :   "lightSpeedIn",
							   hide         :   "flipOutX",
							   delayShow : "delay1s"
							},
							".second_slide_h3"   :
							{
							   show         :   "flipInX",
							   hide         :   "flipOutX",
							   delayShow : "delay2s"
							},
							".second_slide_h4"   :
							{
							   show         :   "fadeInUpBig",
							   hide         :   "flipOutX",
							   delayShow : "delay1-5s"
							},
							".second_slide_button_one"   :
							{
							   show         :   "rotateInUpRight ",
							   hide         :   "flipOutY",
							   delayShow : "delay2s"
							},
							".second_slide_button_two"   :
							{
							   show         :   "rotateInUpLeft ",
							   hide         :   "flipOutY",
							   delayShow : "delay2s"
							},
						},
						2   :   //Slide No3
						{
							".third_slide_img"   :
							{
							   show         :   "bounceIn",
							   hide         :   "bounceOut",
							   delayShow    :   "delay1s"
							},
							".third_slide_h2"   :
							{
							   show         :   "flipInX",
							   hide         :   "flipOutX",
							   delayShow    :   "delay1s"
							},
							".third_slide_h3"   :
							{
							   show         :   "flipInX",
							   hide         :   "flipOutX",
							   delayShow    :   "delay1s"
							},
							".third_slide_h4"   :
							{
							   show         :   "bounceIn",
							   hide         :   "hinge",
							   delayShow    :   "delay1s"
							},
							".third_slide_button_one"   :
							{
							   show         :   "rotateInUpLeft",
							   hide         :   "bounceOut",
							   delayShow : "delay2s"
							},
							".third_slide_button_two"   :
							{
							   show         :   "rotateInUpRight",
							   hide         :   "bounceOut",
							   delayShow : "delay2s"
							},
						}
					}     
				}
			);
        });	 





        
/*=================================
Active wow js 
==================================*/	 
             
			  
			  

			  
