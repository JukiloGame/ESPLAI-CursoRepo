const products = [
{ sku: 'A1', stock: 5, price: 10 },
{ sku: 'B2', stock: 0, price: 20 },
{ sku: 'C3', stock: 2, price: 15 },
];

function stockControl(data) {
	const firstNoStock = data.find(n => n.stock == 0)
	const isSomeFree = data.some(n => n.price == 0)
	const isAllPriced = data.every(n => n.price > 0)

	return [firstNoStock, isSomeFree, isAllPriced]
}
const result = stockControl(products);
console.log(`${result[0].sku} has no stock | Is Some Free?: ${result[1]} | isAllPriced?: ${result[2]}`)