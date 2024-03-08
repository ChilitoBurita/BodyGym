
// JavaScript Document



$('#Banner').owlCarousel({
    loop:true,
    margin:10,
    /*nav:true,*/
	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    /*nav:true,*/
	

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#Banner2').owlCarousel({
    loop:true,
    margin:10,
    /*nav:true,*/
	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:3000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

 $(window).scroll(function() {
            if ($(this).scrollTop() > 600) {
                $(".scrollup").fadeIn();
            } else {
                $(".scrollup").fadeOut();
            }
        })

        $(".scrollup").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        })
$('#Subject').owlCarousel({
    loop:true,
    margin:10,
    /*nav:true,*/
	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


  function myFunction() {
  document.getElementById("YogaInfo").style.visibility = "visible";
}
  function Invi() {
  document.getElementById("YogaInfo").style.visibility = "hidden";
  }
function Visible(a,b) {
  document.getElementById(a).style.visibility = b;
}



function OffInfo() {
   document.getElementById("YogaInfo").style.visibility = "hidden";}
