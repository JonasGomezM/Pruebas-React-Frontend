import { useState } from "react";
import "./Memo.scss";
import React from "react";

const UserCard = React.memo(({ name }: { name: string }) => {
  console.log("el memo se renderiso a:", name);

  return (
    <div className="user-card">
      <p>Nombre: {name}</p>
      <p>Edad: 25</p>
    </div>
  );
});

const UserCard2 = ({ name }: { name: string }) => {
  console.log("este siempre se ejecuta ", name);

  return (
    <div className="user-card">
      <p>Nombre: {name}</p>
      <p>Edad: 25</p>
    </div>
  );
};

export const Memo = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
    // console.log("Esto esta incrementandose");
  };

  return (
    <div className="memo">
      <UserCard name="wendy" />
      <UserCard2 name="pedro" />

      <button
        className="button"
        onClick={() => {
          incrementar();
        }}
      >
        Incrementar {count}
      </button>
    </div>
  );
};