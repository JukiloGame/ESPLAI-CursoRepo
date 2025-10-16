const a = [3,1,2];

// Completa con comentarios:
a.sort(); // Mutable, ya que reordena el array modificando el original
const b = a.slice(0, 2); // Inmutable, Extrae datos, sin destruir el original
const c = b.toReversed(); // Inmutable, versión no destructiva de reverse(), copiando los datos
const d = a.with(0, 99); // Inmutable, copia el array y reemplaza el dato


console.log("Reordenar array --> " + a);
console.log("Extraer datos de index 0 y 2 --> " + b);
console.log("Reordenar en reverso --> " + c);
console.log("Remplazar dato de indice 0 --> " +d);