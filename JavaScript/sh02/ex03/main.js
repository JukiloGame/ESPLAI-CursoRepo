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


function tagIndex(value, index) {
	return `#${index}:${value}`
}
const listUpper = process(base, myToUpperCase);
const listTaged = process(base, tagIndex);
console.log(listUpper.join(','));
console.log(listTaged.join(','));
console.log(base.join(','));