function groupBy(arr, keyOrFn) {
	const grouped = arr.reduce((acc, word) => {
		const first = keyOrFn(word);
		if(!acc[first]) acc[first] = [];
		acc[first].push(word);
		return acc
	}, {});
	console.log(grouped)
	return grouped
}
groupBy(['peras','peral','manzana','madera'], s => s[0])
// => { p: ['peras','peral'], m: ['manzana','madera'] }

