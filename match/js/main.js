// JavaScript Document
$(".search-input").hover(function(){
	$(".search-form").addClass("form-hover");
}, function(){
	$(".search-form").removeClass("form-hover");
}).focusin(()=>{
	$(".search-form").removeClass("form-hover");
	$(".search-form").addClass("input-enter");
	$(".search-input").attr("placeholder", "");
}).focusout(()=>{
	$(".search-form").removeClass("input-enter");
	$(".search-input").attr("placeholder", "Search");
});
$(window).resize(()=>{
	$("#dropdown").collapse("hide");
});