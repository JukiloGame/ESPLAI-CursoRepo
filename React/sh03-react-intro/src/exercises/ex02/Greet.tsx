import { useEffect, useState } from "react";

function Greeting({propName}: {propName: string}) {
	const [name, setName] = useState(propName);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	}
	useEffect(() => {
		console.log("Actualizando nombre para: " + name)

	}, [name])
	return (
		<>
			<p>Nombre: <input type="Text" value={name} onChange={handleChange} /></p>
		</>
	)
}

export default Greeting;