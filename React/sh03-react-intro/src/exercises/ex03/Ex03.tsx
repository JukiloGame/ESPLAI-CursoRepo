import { useState } from "react";
import UserList from "./Users";


type level = "basic" | "advanced";

function Ex03({ nivel }: { nivel: level }) {
  return (
    <div className="ex03">
      <h1>
        Ejercicio 03 - Nivel <em>{nivel}</em>
      </h1>
      <div className={`ex03-content ex03-content--${nivel}`}>
        {nivel === "basic" ? 
        <><UserList url="https://jsonplaceholder.typicode.com/users"/></>
        : 
        <><h3>InProggres</h3></>
      }
      </div>
    </div>
  );
}

export default Ex03;