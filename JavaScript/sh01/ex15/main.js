// ANTIGUO CÓDIGO:
// var n=10;
// for(i=0;i<n;i++){
// if(i==5){console.log("Mitad");}
// else{console.log(i);}
// }

const targetNumber = 10;
for (let currentNumPosition = 0; currentNumPosition <= targetNumber; currentNumPosition++) {
	if (currentNumPosition === targetNumber / 2) {
		console.log("Mitad");
	} else {
		console.log(currentNumPosition);
	}
}

// Ahora verdaderamente llega a la mitad del número
// También forzamos el let en la declaración de la variable local
// Respetamos la indentación y establecemos nombres descriptivos para su uso