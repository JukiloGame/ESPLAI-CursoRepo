import { useState, useEffect } from "react";

interface User {
	id: number,
	name: string,
}

function UserList({url} : {url:string}) {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		setError(false);
		(async () => {
			try {
				const resp = await fetch(url)
				if(!resp.ok) throw new Error ("Error de carga")
				setUsers(await resp.json());
				setIsLoading(false);
			} catch (err) {
				console.error(err);
				setError(true);
			} finally {

			}
		})()

	},[]);

	return (
		<>
			{isLoading && <p>Cargando...</p>}
			{error && <p>Error de carga</p>}
			{users?.map(({name, id}) => {
				return (
					<>
						<p> {id} : {name}</p>
					</>
				)
			})}
		</>
	)

}
export default UserList;