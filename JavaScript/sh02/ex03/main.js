const base = ["a", "b"];

function process(lista, transformador) {
	let newList = [];
	let index = 0;
	for (let value of lista) {
		index++;
		newList.push(transformador(value, index));
	}
	return newList;
}

function myToUpperCase(value) {
	return value.toUpperCase();
}



const listUpper = process(base, myToUpperCase);

console.log(listUpper.join(','));

console.log(base.join(','));