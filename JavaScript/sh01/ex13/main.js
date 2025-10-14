
function test() {
	console.log("Dentro de la función");
	let localLet = "local con let";
	var globalVar = "global con var";
	console.log(localLet);
	console.log(globalVar); 
}

test();
console.log("Fuera de la función");
console.log(globalVar); 
console.log(localLet);


// Si una variable se declara dentro de una función, va a ser local tanto si es Var como si es Let