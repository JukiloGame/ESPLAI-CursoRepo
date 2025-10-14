function formatearA(name, surname) { 

	return `${surname}, ${name}`
}

const formatearB = function(name, surname) { 

	return `${surname}, ${name}`
}

const formatearC = (name, surname) => { return `${surname}, ${name}` }


console.log(formatearA('Ana', 'López'));
console.log(formatearB('Luis', 'Pérez')); 
console.log(formatearC('Érika', 'Suárez'));




