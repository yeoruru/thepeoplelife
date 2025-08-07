'use strict';
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//gnbMo
  $(function() {
		var height = 0;
        $('.gnbMoOpen').on('click', function() {
            $('body').css({'overflow': 'hidden'});
            $('header .bg').css({'display': 'block'});
            $('.gnbMo').addClass('on');
            $('.gnbMo > ul > li > a').removeClass('on');
            $('.gnbMo > ul > li > a.op').addClass('on');
            $('.gnbMo > ul > li > .inner').css({'height': '0'});
            $('.gnbMo > ul > li > .inner.op').css({'height':'84px'});
		});
        $('.gnbMoClose, header .bg').on('click', function() {
            $('body').css({'overflow': 'auto'});
            $('header .bg').css({'display': 'none'});
            $('.gnbMo').removeClass('on');
		});
		$('.gnbMo > ul > li > a').on('click', function() {
			var height =0;
			$(this).next().find('li').each(function() {
				height += $(this).outerHeight(true);
			});
            $('.gnbMo > ul > li > a').removeClass('on');
            $(this).addClass('on');
			$('.gnbMo > ul > li > .inner').css({'height': '0'});
			$(this).next().css({'height':height + 'px'});
		});
	}); 

//전체동의
$(document).ready(function(){
    $("#checkall").click(function(){
        if($("#checkall").prop("checked")){
            $(".chk").prop("checked",true);
        }else{
            $(".chk").prop("checked",false);
        }
    });
});

