
(() =>{
const SECRET = 42;
function getSecret() { return SECRET };
globalThis.getSecret = getSecret;
})();

console.log(typeof SECRET === 'undefined');
console.log(globalThis.getSecret());