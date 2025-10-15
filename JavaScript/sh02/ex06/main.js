"use strict"

function greet(city){
	console.log(`Soy ${this.name} de ${city}`); 
}


const person={name:'Lucía'};
greet.call(person, 'Madrid');
greet.apply(person, ['Sevilla']);
const saludarLuis = greet.bind({name:'Luis'});
saludarLuis('Valencia');
