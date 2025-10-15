"use strict"

function greet(city){
	console.log(`Soy ${this.name} de ${city}`); 
}


function invokeCon(ctx, fn, ...args)  {
	const boundFN = fn.bind(ctx)
	boundFN(...args);
}

const person={name:'Lucía'};
greet.call(person, 'Madrid');
greet.apply(person, ['Sevilla']);
const greetLuis = greet.bind({name:'Luis'});
greetLuis('Valencia');
invokeCon({name:'Ada'}, greet, 'Zaragoza');