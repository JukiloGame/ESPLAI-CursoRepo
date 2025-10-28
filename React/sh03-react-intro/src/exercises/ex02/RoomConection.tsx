import { useEffect, useState } from "react";


function App() {
	const [room, setRoom] = useState("Hall");

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	setRoom(e.target.value);
	}
	return (
		<form>	
			<h3>Seleccione habitación</h3>
			<select value={room} onChange={handleChange}>
				<option value="general"> General </option>
				<option value="support"> Soporte </option>
				<option value="random"> Random </option>
			</select>
			<RoomStatus roomId={room}/>	
		</form>
	)
}


function RoomStatus({roomId} : {roomId: string}) {
	const [message, setMessage] = useState("")
	const [isDisconnected, setIsDisconnected] = useState(false);

	useEffect(() => {
		console.log(`Conecting to room: ${roomId} ...`)
		setMessage(`Conecting to room: ${roomId} ...`)

		const timeoutId = setTimeout(() => {		
			console.log("Connected to room: " + roomId)
			setMessage("Connected to room: " + roomId)
			setIsDisconnected(false)
		}, 2000);

		return () => {
      	clearTimeout(timeoutId);
     		console.log(`Disconnected from room: ${roomId}`);
			setIsDisconnected(true)
    	};
	},[roomId])

	return (
		<form>	
			{message && <p>{message}</p>}
			{/* {isDisconnected ? <p>Disconnected from room: {roomId}</p> : ""}  */}
		</form>
	)
}

export default App;