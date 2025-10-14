function sumatorio(base = 0, ... nums) {
	let total = base;
	for (let num of nums) {
		if(typeof num === "number") {
			total+=num;
		}
	}
	return total;
}

function maximoDe(lista = []) {
	let higherNum = 0;
	for (let num of lista) {
		num > higherNum ? higherNum = num : higherNum;
	}
	return higherNum
}

console.log(sumatorio(10, 1, 2, '3', 4));
console.log(maximoDe([1,9,3]));


