"use stric"
export default function sum(a, b) { if(isFinite(a) && isFinite(b)) return a + b; }

export const PI = 3.14
export function squareArea(r) { if(isFinite(r)) return r * PI * 2; }
export function average(...nums) {
	const list = [...nums]
	let total = 0;
	for (let num of list) {
		if(isFinite(num))
			total += num;
	}
	return total / list.length;
}
