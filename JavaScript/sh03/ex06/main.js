const text = 'hola hola adios HOLA';

function calculateFrequency(list) {
	let map = new Map();
	let words = list.toLowerCase().match(/\b[a-z]+/gi);

	for (const item of words) {
		map.set(item, (map.get(item) || 0 ) +1)
	}
	return map;
}

let map = calculateFrequency(text);
console.log(map);

