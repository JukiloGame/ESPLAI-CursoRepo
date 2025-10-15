"use strict"

let timer = {
	name: "",
	init(ms) {
		// MÉTODO BIND
		// setTimeout(function(){
		// 	console.log(`Listo ${this.name}`);
		// }.bind(this), ms);

	 	// MÉTODO FLECHA
		setTimeout(() => { 
	 		console.log(`Listo ${this.name}`);
	 	}, ms);
	}

}

// Comenta/descomenta cada versión
const t = Object.create(timer); t.name='Tarea X'; t.init(2000);
// Esperado (alguna de las dos versiones): "Listo: Tarea X"