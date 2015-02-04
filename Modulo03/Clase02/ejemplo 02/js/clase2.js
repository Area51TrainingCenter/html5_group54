function listarDias(){
	for (var i = 1; i <= 31; i++) {
/*
		if ( i < 10 ){
			document.write("<option value='" + i + "'>0" + i + "</option>");
		} else {
			document.write("<option value='" + i + "'>" + i + "</option>");
		}
*/
		var d = ( i < 10 ) ? "0" + i : i ;
		document.write("<option value='" + i + "'>" + d + "</option>");
		//				--------------	------ ---- ----- -----------
		//					Cadena		Variable	Cadena Variable Cadena
	}
	// i
	// 1
	// 2
	// 31
	// 32 - *_*
}
function listarMeses(){
	var contador;
	contador = 1;
	while( contador <= 12 ){
		document.write("<option value='" + contador + "'>" + contador + "</option>");
		contador++;
	}
}
function listarAnios(){
	var i;
	i = getAnio() - 80;
	while( i <= getAnio() -18 ){
		document.write("<option value='" + i + "'>" + i + "</option>");
		i++;
	}
/*
	getAnio()	-	i	- (getAnio() - 18)
	2014		- 1934	- 1996
	2014		- 1935	- 1996
	2014		- 1996	- 1996
	2014		- 1997	- 1996	_-_

*/
}
function getAnio(){
	var anio, fecha;
	fecha = new Date();
	anio = fecha.getFullYear();
	return anio;
}
function getMes(mes){
/*
	switch( mes ){
		case "M1":
			return "Enero";
		case "M2":
			return "Febrero";
//		...
		case 10:
			return "Noviembre";
		default:
			return "Diciembre";
	}
*/
	var meses;
	//meses = new Array("Enero","Febrero","Marzo","Abril");
	meses = Array();
	meses[0] = "Enero";
	meses[1] = "Febrero";
	meses[2] = "Marzo";
	meses[3] = "Abril";

	return meses[mes];
}

fecha = new Date();
anio = fecha.getFullYear();
console.log("Fecha: " + fecha);
console.log("Día de la semana " + fecha.getDay());
console.log("Día " + fecha.getDate());
console.log("Mes " + getMes(fecha.getMonth()));
console.log("Año " + fecha.getFullYear());
console.log("Hora " + fecha.getHours());
console.log("Minutos " + fecha.getMinutes());
console.log("Segundos " + fecha.getSeconds());


function saludar(){
	alert("Hola! Te estoy saludando chico malo");
}
function contarCaracteres(){
	var campo;
	campo = document.prueba.comentario.value;
	document.getElementById("caracteres").innerHTML = "<strong>" + (campo.length) + " caracteres</strong>";
	return (campo.length);
}
function validarCaracteres(){
	if ( contarCaracteres() >= 4 ){
		if ( window.event.keyCode == 8 ){
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}
function dimeLetra(elEvento) {
  var evento = window.event || elEvento;
 
  var mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);
 
  console.log(mensaje);
}

/*
S1: Intro 1 JS
	Introducción a la programación general (Algoritmos)
S2: Intro 2 JS
S3: Intro jQuery 1
	Eventos, Efectos, AJAX, JSON, Dominio DOM
S4: Intro jQuery 2
S5: HTML5 APIs
	Drag & Drop, NO-SQL (BD Locales), Manejo de Archivos, Geo Localización, Canvas
S6: jQuery Plugins
	Lightbox, Carrusel (Slider), Pags. Horizontales y Verticales, Parallax
S7: jQuery Varios
S8: Repaso general, Examen, Tips finales


*/