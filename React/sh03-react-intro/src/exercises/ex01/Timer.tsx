import { useEffect, useState } from "react";

function Timer() {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() =>{
			setTimer(prev => prev +1);
		},1000);
		return () => clearInterval(intervalID);
	}, []);

	return (
		<div>
			<h3>Tiempo Transcurrido: {timer} Segundos</h3>
			<button onClick={() => setTimer(0)}> Reset </button>
		</div>
	) 
}

export default Timer;