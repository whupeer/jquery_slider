(function($){     
$.fn.zep_slider = function(options){  
	     	var wh_slider = $(this);
		var counts = wh_slider.children('li').size();
		var l_width = -($(this).width()+100);
	
		var arr_li = new Array();
		var nav_arr_li = new Array();

		var new_index = 900;
		//当前滚动li索引
		var cur_index = 0;		
	
		var final_left = l_width;
		var final_right = -l_width;


		for(var i=0;i<counts;i++) {
		arr_li[i] = wh_slider.children('li').eq(i);				

		nav_arr_li[i] = wh_slider.children('#navigation').children('li').eq(i);				

		arr_li[i].css('z-index',new_index);
		new_index -= 50;
		}


		arr_li[0].addClass('cur');
		nav_arr_li[0].addClass('current');
			

		//控制切换的函数
		function focus() {
			
		 cur_index = wh_slider.children('li.cur').index();
		 if( cur_index == counts-1) {
			arr_li[cur_index].css('z-index',1000);

			wh_slider.children('li').css('left','0px');
			arr_li[cur_index].css('left','0px').removeClass('cur');
				arr_li[counts-1].css({'z-index':50,'left':0});
		
			nav_arr_li[cur_index].removeClass('current');

			cur_index = 0;	
			arr_li[0].addClass('cur');
			nav_arr_li[0].addClass('current');
			


		
		} else {
		
		arr_li[cur_index].animate({left:l_width+'px'},600,function(){

		alert(23112);
		
		}).removeClass('cur');
		
	

		nav_arr_li[cur_index].removeClass('current');
	
		arr_li[cur_index+1].addClass('cur');
		nav_arr_li[cur_index+1].addClass('current');
		
		}
		
				}

		function go_next() {
		window.clearInterval(inter);
		focus();
		window.setTimeout(function(){
		inter = setInterval(function(){
			focus();						
				},1500);   
		
		},1000);		
		
		}



		var inter = setInterval(function(){
			focus();				
							
				},2000);   

		$('#next').bind('click',function(){
		go_next();
		
		});
}     
  
})(jQuery);    

