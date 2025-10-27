import Greeting from "./Greet";
import RoomStatus from "./RoomConection";

type level = "basic" | "advanced";

function Ex02({ nivel }: { nivel: level }) {
  return (
    <div className="ex01">
      <h1>
        Ejercicio 01 - Nivel <em>{nivel}</em>
      </h1>
      <div className={`ex01-content ex01-content--${nivel}`}>
        {nivel === "basic" ? <Greeting /> : <RoomStatus />}
      </div>
    </div>
  );
}

export default Ex02;
