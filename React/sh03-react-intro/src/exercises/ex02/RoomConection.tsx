import { useEffect, useState } from "react";

function RoomStatus({roomId} : {roomId: string}) {
	const [room, setRoom] = useState(roomId);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRoom(e.target.value);
	}
	useEffect(() => {
		console.log(`Conecting to room: ${room} ...`)
		const timeoutId = setTimeout(() => {
			
		console.log("Connected to room: " + room)
		}, 2000);

		return () => {
      	clearTimeout(timeoutId);
     		console.log(`Disconnected from room: ${room}`);
    	};
	},[room])

	return (
		<form>	
			<h3>Seleccione habitación</h3>
			<select value={room} onChange={handleChange}>
				<option value="kitchen"> Cocina </option>
				<option value="Hall"> Salón </option>
				<option value="Bath"> Baño </option>
			</select>
		</form>
	)
}

export default RoomStatus;