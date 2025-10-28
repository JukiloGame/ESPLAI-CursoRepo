import { useState } from "react";
import Greeting from "./Greet";
import RoomStatus from "./RoomConection.tsx";

type level = "basic" | "advanced";

function Ex02({ nivel }: { nivel: level }) {
    const [room, setRoom] = useState("Hall");
  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoom(e.target.value);
    }
  return (
    <div className="ex02">
      <h1>
        Ejercicio 02 - Nivel <em>{nivel}</em>
      </h1>
      <div className={`ex02-content ex02-content--${nivel}`}>
        {nivel === "basic" ? 
        <Greeting propName="Pepe" /> 
        : 
        <form>	
          <h3>Seleccione habitación</h3>
          <select value={room} onChange={handleChange}>
            <option value="general"> General </option>
            <option value="support"> Soporte </option>
            <option value="random"> Random </option>
          </select>
          <RoomStatus roomId={room}/>	
        </form>
      }
      </div>
    </div>
  );
}

export default Ex02;
