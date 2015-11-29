/*=================== VARIABLES ==================*/
var ejecutar = true;
var verifyEmail = /^([a-zA-Z]+[a-zA-Z0-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
var verifyComment = /^[a-zA-Z0-9.,-\/\* ñáéíóú]*$/;
var url;
/*=================== END VARIABLES ==================*/

/*=================== FUNCTIONS ==================*/

function fnEmpty(){
	$("#inputEmail").val(" ");
	$("#inputEmail").val($("#inputEmail").val().trim());

	$("#textArea").val(" ");
	$("#textArea").val($("#textArea").val().trim());
}

function fnClean(){
	$('#inputEmail').val($('#inputEmail').val().trim());
	$("#textArea").val($("#textArea").val().trim());
}

function generalValidacion(element, sms){
	$(element).parent().parent().addClass("has-error has-feedback");
	$(element).parent().siblings('label').text(sms);
	$(element).parent().siblings('label').addClass("animated bounceIn retraso-2");
	$(element).parent().siblings('label').fadeIn();
	ejecutar = false;
}

function resetClass(){
	$('.control-label').removeClass('bounceOutLeft');
}

function fnValidate(){
	ejecutar = true;
	fnClean();
	resetClass()

	if ($('#inputEmail').val()==""){
		generalValidacion($('#inputEmail'),'Ingrese el correo electronico');
	} else if (!verifyEmail.test($('#inputEmail').val())){
		generalValidacion($('#inputEmail'),'Correo Electronico invalido');
	}

	if ($('#textArea').val()==""){
		generalValidacion($('#textArea'),'Ingrese un comentario');
	} else if (!verifyComment.test($('#textArea').val())){
		generalValidacion($('#textArea'),'Comentario contine caracteres no validos');
	}

	if (ejecutar){
		document.createElement('form').submit.call(document.getElementById('formSend'));
	}

}


function fnLoadStartup(){
	$("#first a").addClass("activeOption");
	$("#first a").click();
}

/*=================== END FUNCTIONS ==================*/

/*=================== BODY JS ==================*/

$(document).ready(function(){

	fnEmpty();
	fnLoadStartup();

	$('#buttonSend').click(fnValidate);


	$(".navbar-nav li a").click(function(){
		$(".activeOption").removeClass("activeOption");
		$(this).addClass("activeOption");
	});	

	$("#face").click(function(){
		url = "https://www.facebook.com/Colegio-Buena-Creaci%C3%B3n-250623778420782/";
		var win = window.open(url, '_blank');
  		win.focus();
	});

	$(document).delegate('input','focus',function(){
		$(this).parent().siblings('label').fadeOut().addClass('bounceOutLeft');
		$(this).parent().parent().removeClass('has-error has-feedback');
	});

	$(document).delegate('textarea','focus',function(){
		$(this).parent().siblings('label').fadeOut().addClass('bounceOutLeft');
		$(this).parent().parent().removeClass('has-error has-feedback');
	});

	$('.option').mouseenter(function() {
		var li = $(".navbar-nav li a");
		var id = '#' + $(this).attr('name');

		$(li).each(function(i, element) {
	        if (id == $(element).attr("href")) {
	        	$(".activeOption").removeClass("activeOption");
				$(element).addClass("activeOption");
	        }else{
	        	$(element).css('color','#999');
	        }
	     });

	});

});

/*=================== END BODY JS ==================*/


/*=================== FUNCIONALIDAD DE PERSONAL ==================*/

$(document).ready(function(){
   
    $('#Administrativo').hide();
    $('#Preprimaria').hide();
    $('#Primaria').hide();
    $('#Primaria1').hide();
    $('#Basico').hide();


    $('#Admin').click(function(event){
        event.preventDefault();
        $("#Administrativo").show("slow")
        $('#Principal').hide()
        $('#Preprimaria').hide()
        $('#Basico').hide()
        $('#Primaria').hide()
    	$('#Primaria1').hide()
 	});
 	$('#Prepri').click(function(event){
        event.preventDefault();
        $("#Preprimaria").show("slow")
        $('#Principal').hide()
        $('#Administrativo').hide()
        $('#Primaria').hide()
    	$('#Primaria1').hide()
    	$('#Basico').hide()
 	});
 	$('#Pri').click(function(event){
        event.preventDefault();
        $("#Primaria").show("slow")
        $("#Primaria1").show("slow")
        $('#Principal').hide()
        $('#Administrativo').hide()
        $('#Preprimaria').hide()
        $('#Basico').hide()
 	});
 	$('#Basic').click(function(event){
        event.preventDefault();
        $("#Basico").show("slow")
        $('#Principal').hide()
        $('#Administrativo').hide()
        $('#Preprimaria').hide()
        $('#Primaria').hide()
    	$('#Primaria1').hide()

 	});
});

/*=================== FIN DE FUNCIONALIDADPERSONAL ==================*/

