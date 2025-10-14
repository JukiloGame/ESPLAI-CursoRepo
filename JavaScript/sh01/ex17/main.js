console.log(globalThis);
console.log(this === window);

// NAVEGADOR:
// this, apunta al objeto global (el contenedor principal de JavaScript)
// también se puede acceder a el con window
// NODE.JS
// this, apunta al módulo actual (este script)
// aqui se llama global, por eso nos sale error de que window no está definido



// globalThis, es igual para ambos, define el objeto global con lo que podriamos concluir que:

// Window: globalThis === window
// Node.js: globalThis === global