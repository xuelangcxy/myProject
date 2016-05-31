$(document).ready(function() {
	var clickMenu = $('li.a a');
	clickMenu.css({
		'color': '#50B4E6'
	});
	$('.nav li').hover(function() {
		$(this).children('a').css({
			'color': '#50B4E6'
		});
	}, function() {
		$(this).children('a').css({
			'color': '#333'
		});
		clickMenu.css({
			'color': '#50B4E6'
		});
	});
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		var height, imgWidth, navTop, imgTop, opacity;
		if (top <= 100) {
			height = 140 - (top / 100) * 80;
			imgWidth = 250 - (top / 100) * 115;
			navTop = 22 - (top / 100) * 30;
			imgTop = 18 - (top / 100) * 18;
			opacity = 0.9;
		} else {
			height = 50;
			imgWidth = 135;
			navTop = -8;
			imgTop = 0;
		};
		if (top > 100 && top <= 200) {
			opacity = 0.9 + ((top - 100) / 100) * 0.1;
		} else {
			opacity = 1;
		};
		if (top > 80) {
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

	$('a.more').hover(function() {
			$(this).css({
				'background-position': 'bottom'
			})
		},
		function() {
			$(this).css({
				'background-position': 'top'
			})
		})
	/*e.pageX和e.pageY都是相对于父元素的值，所以应该加减对应父元素的值*/
	$(".fore4").bind("mouseenter mouseleave",
            function(e) {
            	var x0 = $('.team_frame').offset().left;
            	/*console.log('x0:' + x0);*/
            	var y0 = $('.team_frame').offset().top;
            	/*console.log('y0:' + y0);*/
                var w = $(this).width();
                var h = $(this).height();
                var x = (e.pageX - this.offsetLeft - x0 - (w / 2)) * (w > h ? (h / w) : 1);
                /*console.log('e.pageX:' + e.pageX);
                console.log('this.offsetLeft:' + this.offsetLeft);
                console.log('x:' + x);*/
                var y = (e.pageY - this.offsetTop - y0 - (h / 2)) * (h > w ? (w / h) : 1);
                /*console.log('e.pageY:' + e.pageY);
                console.log('this.offsetTop:' + this.offsetTop);
                console.log('y:' + y);*/
                var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                var eventType = e.type;
                var dirName = new Array('上方', '右侧', '下方', '左侧');
                /*console.log(eventType + direction);*/
                if (e.type == 'mouseenter') {
                    switch (direction) {
                    	/*console.log(dirName[direction] + '进入');*/
                        case 0:
                        //console.log('上方' + '进入');
                            $(this).find('img').css({
                                'transform-origin': '50% 0px 0px',
                                'transform': 'rotateX(-90deg)'
                            });
                            break;
                        case 1:
                        //console.log('右侧' + '进入');
                            $(this).find('img').css({
                                'transform-origin': '100% 50% 0px',
                                'transform': 'rotateY(90deg)'
                            });
                            break;
                        case 2:
                        //console.log('下方' + '进入');
                            $(this).find('img').css({
                                'transform-origin': '50% 100% 0px',
                                'transform': 'rotateX(-90deg)'
                            });
                            break;
                        case 3:
                        //console.log('左侧' + '进入');
                            $(this).find('img').css({
                                'transform-origin': '0px 50% 0px',
                                'transform': 'rotateY(90deg)',
                            });
                            break;
                    }
                } else {
                    switch (direction) {
                    	/*console.log(dirName[direction] + '离开');*/
                        case 0:
                        //console.log('上方' + '离开');
                            $(this).find('img').css({
                                'transform-origin': '50% 0px 0px',
                                'transform': 'rotateX(0deg)'
                            });
                            break;
                        case 1:
                        //console.log('右侧' + '离开');
                            $(this).find('img').css({
                                'transform-origin': '100% 50% 0px',
                                'transform': 'rotateY(0deg)'
                            });
                            break;
                        case 2:
                        //console.log('下方' + '离开');
                            $(this).find('img').css({
                                'transform-origin': '50% 100% 0px',
                                'transform': 'rotateX(0deg)'
                            });
                            break;
                        case 3:
                        //console.log('左侧' + '离开');
                            $(this).find('img').css({
                                'transform-origin': '0px 50% 0px',
                                'transform': 'rotateY(0deg)'
                            });
                            break;
                    }
                }
            });
	
	$(".little_img").bind("mouseenter mouseleave",
            function(e) {
            	var x0 = $('.right_pflow').offset().left;
            	/*console.log('x0:' + x0);*/
            	var y0 = $('.right_pflow').offset().top;
            	/*console.log('y0:' + y0);*/
                var w = $(this).width();
                var h = $(this).height();
                var x = (e.pageX - this.offsetLeft - x0 - (w / 2)) * (w > h ? (h / w) : 1);
                /*console.log('e.pageX:' + e.pageX);
                console.log('this.offsetLeft:' + this.offsetLeft);
                console.log('x:' + x);*/
                var y = (e.pageY - this.offsetTop - y0 - (h / 2)) * (h > w ? (w / h) : 1);
                 /*console.log('e.pageY:' + e.pageY);
                console.log('this.offsetTop:' + this.offsetTop);
                console.log('y:' + y);*/
                var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                var eventType = e.type;
                var dirName = new Array('上方', '右侧', '下方', '左侧');
                if (e.type == 'mouseenter') {
                    switch (direction) {
                        case 0:
                        /*console.log('上方' + '进入');*/
                            $(this).find('img').css({
                                'transform-origin': '50% 0px 0px',
                                'transform': 'rotateX(-90deg)'
                            });
                            break;
                        case 1:
                        /*console.log('右侧' + '进入');*/
                            $(this).find('img').css({
                                'transform-origin': '100% 50% 0px',
                                'transform': 'rotateY(90deg)'
                            });
                            break;
                        case 2:
                        /*console.log('下方' + '进入');*/
                            $(this).find('img').css({
                                'transform-origin': '50% 100% 0px',
                                'transform': 'rotateX(-90deg)'
                            });
                            break;
                        case 3:
                        /*console.log('左侧' + '进入');*/
                            $(this).find('img').css({
                                'transform-origin': '0px 50% 0px',
                                'transform': 'rotateY(90deg)',
                            });
                            break;
                    }
                } else {
                    switch (direction) {
                    	/*console.log(dirName[direction] + '离开');*/
                        case 0:
                        /*console.log('上方' + '离开');*/
                            $(this).find('img').css({
                                'transform-origin': '50% 0px 0px',
                                'transform': 'rotateX(0deg)'
                            });
                            break;
                        case 1:
                        /*console.log('右侧' + '离开');*/
                            $(this).find('img').css({
                                'transform-origin': '100% 50% 0px',
                                'transform': 'rotateY(0deg)'
                            });
                            break;
                        case 2:
                        /*console.log('下方' + '离开');*/
                            $(this).find('img').css({
                                'transform-origin': '50% 100% 0px',
                                'transform': 'rotateX(0deg)'
                            });
                            break;
                        case 3:
                        /*console.log('左侧' + '离开');*/
                            $(this).find('img').css({
                                'transform-origin': '0px 50% 0px',
                                'transform': 'rotateY(0deg)'
                            });
                            break;
                    }
                }
            });
	$('.sort .active').css({
		'color': '#50b4e6',
		'border-bottom': '3px solid #50b4e6'
	});
	$('.sort p').hover(function() {
		$(this).css({
			'color': '#50b4e6',
			'border-bottom': '3px solid #50b4e6'
		})
	}, function() {
		$(this).css({
			'color': '#333333',
			'border-bottom': '0px'
		});
		$('.sort .active').css({
			'color': '#50b4e6',
			'border-bottom': '3px solid #50b4e6'
		});
	});

	/*$('.about_frame li').hover(function() {
		$(this).find('img').css({
			'width': 0,
			'height': 0
		});
	}, function() {
		$(this).find('img').css({
			'width': '320px',
			'height': '170px'
		});
	})*/

	$(".about_frame li").hover(function() {
		var foo = Math.floor(Math.random() * 3);
		switch (foo) {
			case 0:
				$(this).find('img').css({
					'transform': 'scale(0,0)'
				})
				break;
			case 1:
				$(this).find('img').css({
					'transform': 'scale(0,1)'
				})
				break;
			case 2:
				$(this).find('img').css({
					'transform': 'scale(1,0)'
				})
				break;
			default:
				$(this).find('img').css({
					'transform': 'scale(0,0)'
				})
				break;
		}
	}, function() {
		$(this).find('img').css({
			'transform': 'scale(1,1)'
		})
	})

	$('.profile_li li').hover(function() {
		$(this).find('.mask').css({
			'opacity': '0.7'
		})
	}, function() {
		$(this).find('.mask').css({
			'opacity': '0'
		})
	});

})