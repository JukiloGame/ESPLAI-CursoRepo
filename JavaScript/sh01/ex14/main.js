let mensaje = "Hola mundo";

function ShowMessage() {
	let mensaje = "Adios mundo";
	console.log("Dentro de función:")
	console.log(mensaje);
}
ShowMessage();
console.log("Fuera de función:")
console.log(mensaje);

// Dentro de la función, se tiene en cuenta antes el valor local frente al global
// Fuera de la función, pilla la declaración global porque no puede acceder a la variable declarada en la función