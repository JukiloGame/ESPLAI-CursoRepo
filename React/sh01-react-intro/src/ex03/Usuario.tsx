interface UserProps {
	name:string,
	age?:number
}

const ShowUser: React.FC<UserProps> = ({name, age}) => <h1>Nombre: {name} ({age})</h1>

export default ShowUser