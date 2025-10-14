const age = "18";

// 2 formas de plantearlo 

// Si queremos que sea puramente numérico
if(typeof age !== "number") { // primero comprueba si la variable está declarada correctamente
	console.log("Edad no especificada");
} else if(age >= 18) { // Si es mayor o igual a 18
	console.log("Eres mayor de edad");
} else if(age < 18) { // Si es menor a 18
	console.log("Eres menor de edad");
}

// Si permitimos que pueda ser cualquier cosa, pero tiene que ser una edad lógica (no neganivo)
if(age >= 18) { // Si es mayor o igual a 18
	console.log("Eres mayor de edad");
} else if(age < 18 && age >= 0) { 
	console.log("Eres menor de edad");
} else { 
	console.log("Edad no especificada");
}