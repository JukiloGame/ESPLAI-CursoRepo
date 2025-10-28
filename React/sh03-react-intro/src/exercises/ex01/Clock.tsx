import { useEffect, useState } from "react";


function Clock() {
const [time, setTime] = useState(new Date().toLocaleTimeString());

useEffect(() => {
	const intervalId = setInterval(() => {
		setTime(new Date().toLocaleTimeString());
		}, 1000);
	return () => clearInterval(intervalId);
	}, [])

	return <h3>{time}</h3>
}

export default Clock;