import Greet from "../ex01/Saludo";
const users: string[] = ["Ana", "Luis", "Marta"];

function Composition({users}: {users: string[]}) {
	return (
		<section>
			{users.map((u) => (
				<div key={u}><Greet name={u}/></div>)
			)}
		</section>
	)
}


export default Composition;
export {users}