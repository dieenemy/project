$(function(){
	khoisp = $('.nhieumon').isotope({
  itemSelector: '.motmon',
  layoutMode: 'masonry'
});
	khoisp.imagesLoaded().progress(function(){
		khoisp.isotope('layout');
	});

	$('.tenbrand a').click(function(event) {
		dulieu = $(this).data('sp');
		console.log(dulieu);

		khoisp.isotope({filter:dulieu});

		return false;
	});
	           
	              new WOW().init();

	  	$('.anhnho li').click(function(event) {
 		

 			x = $(this).index();
 			x = x+2;
 			console.log("vi tri cua phan tu duoc click la:" +x);

 			//cho noi dung tuong ung hien thi
 			$('.noidungchitiet ul li').removeClass('hienlen');

 			$('.noidungchitiet ul li:nth-child('+x+')').addClass('hienlen');
 		});

 		

	  if($(".top ").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".top ").show()
			} else {
				$(".top ").hide()
			}
		});
		$(".top ").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}	
}); 
 