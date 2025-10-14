function sumatory(base = 0, ... nums) {
	let total = base;
	for (let num of nums) {
		if(typeof num === "number") {
			total+=num;
		}
	}
	return total;
}

function maxOf(lista = []) {
	let higherNum = 0;
	for (let num of lista) {
		num > higherNum ? higherNum = num : higherNum;
	}
	return higherNum
}

function taging(text='N/A', prefix=`TS-${Date.now()}`) {
	return `${prefix}:${text}`
}

console.log(sumatory(10, 1, 2, '3', 4));
console.log(maxOf([1,9,3]));
console.log(/^TS-\d+:N\/A$/.test(taging()));

console.log(taging("Probando el texto con etiqueta"))


