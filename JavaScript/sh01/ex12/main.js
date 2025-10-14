console.log(x);
var x = 5;
console.log(x);

// Ocurre que al ser un Var, este no fuciona como un let (que queda en una Temporal Dead Zone al inicio del script). 
// Asi que al inicio del script, la variable se declara antes de ejecutar el código, pero no se le da ningun valor, lo que permite que pueda ejecutarse sin petarse.