const usuario = { nombre: "Lucía", edad: 27, activo: true };

for (const userInfo in usuario) {
	console.log(`Propiedad ${userInfo}: --> Valor: ${usuario[userInfo]}`);
}