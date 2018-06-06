$(function(){

	//鼠标经过导航时放大效果
	$(".navBox .icon").hover(function(){
		$(this).stop().animate({
			width:'35%',
		},500);
	},function(){
		$(this).stop().animate({
			width:'25%',
		},500);
	});

	//鼠标经过照片时放大效果
	$(".sectionBox img").hover(function(){
		$(this).stop().animate({
			width: '120%',
			height: '120%',
			left: '-12%',
			top: '-10%'
		},500);
	},function(){
		$(this).stop().animate({
			width:'100%',
			height:'100%',
			left: 0,
			top: 0
		},500);
	});

	//鼠标点击照片时放大效果
	$(".sectionBox img").click( function () { 
		
	});

});
