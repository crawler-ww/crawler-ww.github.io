// JavaScript Document
$(".search-input").mouseover(function(){
	$(".search-form").addClass("focus");
}).mouseout(function(){
	$(".search-form").removeClass("focus");
}).focusin(function(){
	$(this).attr("placeholder", "");
	$(".search-form").removeClass("focus");
	$(".search-form").addClass("input");
}).focusout(function(){
	$(".search-form").removeClass("input");
	$(this).attr("placeholder", "Search");
});