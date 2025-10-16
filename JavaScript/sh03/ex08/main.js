const user = { id: 7, profile: { email: 'x@y.com' } };
const user2 = { id: 8 };

const {id, profile: prof = '(sin email)'} = user;
const { email: mail = '(sin email)' } = prof;

console.log(id);
console.log(prof);
console.log(mail);

function connect({ host, port = 443, secure = true }) {
	console.log(host, port, secure); 
 }

connect({host: "mario"})
connect({host: "maría", port: 80})
connect({host: "carlos", secure: false})