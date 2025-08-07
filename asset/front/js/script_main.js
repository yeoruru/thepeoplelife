'use strict';
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//sideBar
  var scrollTop =0;  
  sideBar();
  
   $(window).on('scroll' ,function (){
      sideBar();
   });  
  function sideBar() {
     scrollTop = $(document).scrollTop();   
    $('.sideBar').addClass('on');
    if (scrollTop < 120) {
        $('.sideBar').removeClass('on');
    }
  }  

//gnb
$(function() {
	$('.gnb > li > a').on('mouseenter focus', function(){
		var index = $('.gnb > li > a').index($(this));
		$('.gnb .inner').removeClass('on');
		$('#layer-mask').remove();
		$('.gnb .inner:eq(' + index + ')').addClass('on');
		$('header').before('<div id="layer-mask"></div>').attr({'tabIndex': 0}).css({'display': 'block'});
	});
	$('header').on('mouseleave', function() {
		$('.gnb .inner').removeClass('on');
		$('#layer-mask').remove();
	});
});
