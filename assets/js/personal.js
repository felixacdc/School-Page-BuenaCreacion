$(document).ready(function(){

	$("#first").addClass("activeOption");
	$("#first a").click();

	
	
	$(".navbar-nav li").click(function(){
		$(".activeOption").removeClass("activeOption");
		$(this).addClass("activeOption");
	});	

});