$(function(){

	              new WOW().init();



	  	$('.anhnho li').click(function(event) {
 		

 			x = $(this).index();
 			x = x+2;
 			console.log("vi tri cua phan tu duoc click la:" +x);

 			//cho noi dung tuong ung hien thi
 			$('.noidungchitiet a').removeClass('hienlen');

 			$('.noidungchitiet a:nth-child('+x+')').addClass('hienlen');
 						

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

	
	
})  
 