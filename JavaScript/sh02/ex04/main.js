function createCounter(start, step) {
	return function() {
		start += step; 
		console.log(start); 
		return start;
	};
}

function memorize(fn) {
	const cache = {};
	return function (...args) {
		const key = JSON.stringify(args)
		if (cache[key]) {
			return cache[key];
		}
		const result = fn(...args)
		cache[key] = result;
		return result;
	}
}

const inc = createCounter(5,2); inc(); inc();

const contarLlamadas = () => {
	let n=0;
	const f = (x)=>{ n++; return x*x; };
	const llamadas = () => n;
	return { f, llamadas };
};
const { f, llamadas } = contarLlamadas();
const mf = memorize(f); mf(5); mf(5);

console.log(llamadas()); // 1