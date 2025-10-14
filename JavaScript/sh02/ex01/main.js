function formatearA(name, surname) { 
	if (!name || !surname) {
		throw new TypeError("Name y surname deben tener valor");
	}
	return `${surname}, ${name}`
}

const formatearB = function(name, surname) { 
	if (!name || !surname) {
		throw new TypeError("Name y surname deben tener valor");
	}
	return `${surname}, ${name}`
}

const formatearC = (name, surname) => { if (!name || !surname) throw new TypeError("Name y surname deben tener valor"); return `${surname}, ${name}` }


console.log(formatearA('Ana', 'López'));
console.log(formatearB('Luis', 'Pérez')); 
console.log(formatearC('Érika', 'Suárez'));

try { formatearA('', 'X'); } catch(e){ console.log(e instanceof TypeError); }
try { formatearB('', 'X'); } catch(e){ console.log(e instanceof TypeError); }
try { formatearC('', 'X'); } catch(e){ console.log(e instanceof TypeError); }




