// JavaScript Document
$(document).ready(function(){
	
//	show curtain 1
	$("#menu1").hover(function(){
		$(".curtain-2").hide();
		$(".curtain-3").hide();
		$(".curtain-4").hide();
		$(".curtain").show();
	});
		
//	show curtain 2
	$("#menu2").hover(function(){
		$(".curtain").hide();
		$(".curtain-3").hide();
		$(".curtain-4").hide();
		$(".curtain-2").show();
	});
		
//	show curtain 3
	$("#menu3").hover(function(){
		$(".curtain-2").hide();
		$(".curtain").hide();
		$(".curtain-4").hide();
		$(".curtain-3").show();
	});
		
//	show curtain 4
	$("#menu4").hover(function(){
		$(".curtain-2").hide();
		$(".curtain-3").hide();
		$(".curtain").hide();
		$(".curtain-4").show();
	});
	
	
	$(document).mousemove(function(event) { 
    if(!$(event.target).closest('nav').length) {
        if($('.curtain, .curtain-2, .curtain-3, .curtain-4').is(":visible")) {
            $('.curtain, .curtain-2, .curtain-3, .curtain-4').hide();
        }
    }        
	});
	
	
//menu hover effect	
	$(".menu ul li").mouseenter(function(){
		$(this).css("font-weight", "700");
		$(this).css( 'cursor', 'pointer' );
	});
	$(".menu ul li").mouseout(function(){
		$(this).css("font-weight", "normal");
		$(this).css( 'cursor', 'auto' );
	});
	
// mouse hover effect	
	$(".curtain .submenu ul li, .curtain-2 .submenu ul li, .curtain-3 .submenu ul li, .curtain-4 .submenu ul li").mouseenter(function(event){	
		$(this).find("i").toggleClass("fa-chevron-right fa-spinner fa-pulse fa-3x fa-fw");
		$(this).find("i").css("font-size", "95%");		
		$(this).css("font-weight", "700");
		$(this).css("font-size", "90%");
		$(this).css( 'cursor', 'default' );
	});
		
// mouse out effect
	$(".curtain .submenu ul li, .curtain-2 .submenu ul li, .curtain-3 .submenu ul li, .curtain-4 .submenu ul li").mouseout(function(event){
		$(this).find("i").removeClass("fa-spinner fa-pulse fa-3x fa-fw");
		$(this).find("i").css("font-size", "90%");
		$(this).find("i").css("color", "#083B2E");
		$(this).css("color", "#083B2E");
		$(this).css("font-weight", "normal");		
		$(this).css("font-size", "85%");
		$(this).css( 'cursor', 'auto' );
		$(this).find("i").addClass("fa-chevron-right");
	});
			
});