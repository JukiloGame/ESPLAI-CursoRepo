interface User {
	name: string
}
const Greet: React.FC<User> = ({name})  => <h1> Hola {name} </h1>;

export default Greet