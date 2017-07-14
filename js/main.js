//TARIFAS
//HORARIO ALTO  $740
//HORARIO BAJO  $640
//HORARIO MEDIO $680
/*preguntas acordeon*/
$('.collapse').collapse()

/*******************/

//index.html validar form.
//Expresión para validar un correo electrónico expresiones regulares
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	// al hacer click en el btn-enviar, empezará a validar el formulario
	$("#btn-enviar").click(function(){
	//.val() obtenemos el contenido ingresado en el input correo.
	var correo = $("#correo").val();
	//.val() obtenemos el contenido ingresado en el input contraseña.
	var pwd = $("#pwd").val();
	//al realizar variables , el codigo se ve más limpio al momento de hacer validaciones largas.

	});
});
