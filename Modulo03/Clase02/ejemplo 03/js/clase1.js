// Comentario de 1 línea
/*
Comentario de
2 o más
líneas
https://docs.google.com/presentation/d/1_v-97naRqUxbfr2NmGvnZKwiqZZKujmhXKOchpL9ubw/edit?usp=sharing
*/
/*
// Paso 1: Declarar variables
var nombre;
// Paso 2: Lectura de datos / Asignación de valor
nombre  = "Diego";
// Paso 3: Proceso de calculo

// Paso 4: Salida de resultados
document.write("Mi nombre es " + nombre);
*/
/*
// Problema: Saludar al usuario
var nombre_usuario;
nombre_usuario = prompt("¿Cómo te llamas?");
document.write("<p>Tú nombre es <strong>" + nombre_usuario + 
	"</strong></p>");
*/
// Problema: Saludar al usuario desde la web
function saludarUsuario(){
	var nombre;
	// permite acceder al elemento atravez del elemento name (form)
	nombre = document.prueba.nombre.value;
	alert("Hola, " + nombre + "\n¿Cómo te va?");
}
function saludarOtroUsuario(){
	var nombre;
	nombre = document.prueba.nombre.value;
	// innerHtml iserta texto
	document.getElementById("mensaje").innerHTML = 
					"Hola <em>" + nombre + "</em>";
	document.getElementById("frmPrueba").innerHTML = "";
}
function mayorEdad(){
	var nombre, edad;
	nombre = document.prueba.nombre.value;
	edad = document.prueba.edad.value;
	if ( edad >= 18 ){
		alert(nombre + " es mayor de edad");
	} else {
		alert(nombre + " es menor de edad");
	}
}
function validar(){
	var nombre, edad;
	nombre = document.prueba.nombre.value;
	edad = document.prueba.edad.value;

	if ( nombre == "" ){
		alert("Por favor, complete sus datos");
		document.prueba.nombre.focus();
	} else if ( nombre.length < 2 ){
		alert("Por favor, indique un nombre correcto");
		document.prueba.nombre.focus();
	} else if ( edad == ""){
		alert("Por favor, indique su edad");
		document.prueba.edad.focus();
	} else {
		// Llamando a otras funciones
		saludarOtroUsuario();
		mayorEdad();
	}

}
// vacio: nombre == ""