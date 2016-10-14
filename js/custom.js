$(function(){

$('.side_link').click(function(){
		var link_num = $(this).attr('home_link');
		$('.home_li').css('display', 'none');
		$('.side_link').removeClass('side_link_active');
		$('#home_li_' + link_num).css('display', 'block');
		$(this).addClass('side_link_active');
	});
	
	});