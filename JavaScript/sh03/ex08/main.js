const user = { id: 7, profile: { email: 'x@y.com' } };
const user2 = { id: 8 };

const {id, profile: prof = '(sin email)'} = user;
const { email: mail = '(sin email)' } = prof;

console.log(id);
console.log(prof);
console.log(mail);

