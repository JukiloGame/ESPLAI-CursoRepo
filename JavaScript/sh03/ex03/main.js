const data = [1, [2, 3], [[4], 5]];

function flatAll(arr) {
	return arr.flatMap(x => x).flat(Infinity);
}

console.log(flatAll(data));
console.log(data);