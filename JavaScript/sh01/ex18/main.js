console.log(0 == "0");
console.log(0 == []);
console.log("0" == []);

// 1: JS intenta convertir el string a número para la comparativa ==, con lo que termina siente (0 == 0)
// 2: En el caso del array [], js convierte el array a un string cuando se le hace una comparativa ==, luego detecta que está comparándose con un número 
// asi que lo vuelve a convertir, y al estar el string vacio, este es igual a cero | (0 == []) => (0 == "") => (0 == 0); true
// 3: entendiendo lo anterior, este devuelve falso, ya que primero lo convierte a string, y al detectar que ambos lo son, realiza la comparativa
// entre 2 strings que no son iguales | (0 == []) =>("0" == ""); false