import Greeting from "./Greet";
import RoomStatus from "./RoomConection.tsx";

type level = "basic" | "advanced";

function Ex02({ nivel }: { nivel: level }) {
  return (
    <div className="ex02">
      <h1>
        Ejercicio 02 - Nivel <em>{nivel}</em>
      </h1>
      <div className={`ex02-content ex02-content--${nivel}`}>
        {nivel === "basic" ? <Greeting propName="Pepe" /> : <RoomStatus />}
      </div>
    </div>
  );
}

export default Ex02;
