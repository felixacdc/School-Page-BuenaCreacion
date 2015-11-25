var url;

function clean(){
	$("textarea").val(" ");
	$("textarea").val($("textarea").val().trim());

	$("input").val(" ");
	$("input").val($("textarea").val().trim());
}

$(document).ready(function(){

	clean();

	$("#first").addClass("activeOption");
	$("#first a").click();

	$(".navbar-nav li").click(function(){
		$(".activeOption").removeClass("activeOption");
		$(this).addClass("activeOption");
	});	

	$("#face").click(function(){
		url = "https://www.facebook.com/Colegio-Buena-Creaci%C3%B3n-250623778420782/";
		var win = window.open(url, '_blank');
  		win.focus();
	});

});