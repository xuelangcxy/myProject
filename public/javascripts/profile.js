$(document).ready(function() {
	var clickMenu = $('#profile a');
	clickMenu.css({'color': '#50B4E6'});
	$('.nav li').hover(function() {
		$(this).children('a').css({'color': '#50B4E6'});
	},function() {
		$(this).children('a').css({'color': '#333'});
		clickMenu.css({'color': '#50B4E6'});
	});

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		var height,imgWidth,navTop,imgTop,opacity;
		if (top <= 100) {
			height = 140 - (top / 100) * 80;
			imgWidth = 250 - (top/100)*115;
			navTop = 22 - (top/100)*30;
			imgTop = 18 - (top/100)*18;
			opacity = 0.9;
		} else {
			height = 50;
			imgWidth = 135;
			navTop = -8;
			imgTop = 0;
		};
		if (top > 100 && top <= 200) {
			opacity = 0.9 + ((top-100)/100)*0.1;
		};
		if (top>80) {
			$('.nav li a span').hide();
		} else {
			$('.nav li a span').show();
		}
		$('#headnav').css({
			'height': height
		});
		$('.hd_logo').css({
			'top': imgTop
		});
		$('.hd_logo img').css({
			'width': imgWidth
		});
		$('.nav').css({
			'top': navTop
		});
		$('#headnav').css({
			'opacity': opacity
		});
	})
})