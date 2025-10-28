import { useEffect, useState } from "react";
function RoomStatus({roomId} : {roomId: string}) {
	const [message, setMessage] = useState("")
	const [prevConnection, setPrevConnection] = useState("");
	const [isDisconnected, setIsDisconnected] = useState(false);

	useEffect(() => {
		setMessage(`Conecting to room: ${roomId} ...`)

		const timeoutId = setTimeout(() => {		
			setMessage("Connected to room: " + roomId)
			setIsDisconnected(false)
		}, 2000);

		return () => {
      	clearTimeout(timeoutId);
			setIsDisconnected(true)
			setPrevConnection(roomId);
    	};
	},[roomId])

	return (
		<form>	
			{message && <p>{message}</p>}
			{isDisconnected && <p>Disconnected from room: {prevConnection}</p>}
		</form>
	)
}

export default RoomStatus;