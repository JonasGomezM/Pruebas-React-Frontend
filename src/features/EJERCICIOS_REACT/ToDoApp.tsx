import { useState } from "react";

interface ListaFrutas {
  frutas: string[];
//   comprador: string;
}

const TodoApp = ({ frutas }: ListaFrutas) => {

    const [Listfrutas, setFrutas] = useState<string[]>([...frutas]);
    const [NuevaFruta, setNuevaFruta] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNuevaFruta(event.target.value);
    }

    const handleAddFruta = () => {
      setFrutas([...Listfrutas, NuevaFruta]);
      setNuevaFruta("");
    }


  return (
    <>
      <h1 className="title">Frutas</h1>
      <input
        style={{ border: "1px solid gray", padding: "0.5rem", borderRadius: "0.5rem" }}
        type="text"
        value={NuevaFruta}
        onChange={handleInputChange}
        placeholder="Nueva fruta"
      />
      <button style={{marginLeft: "0.5rem", marginTop: "0.5rem", marginBottom: "0.5rem", width: "100px", border: "1px solid gray", padding: "0.5rem", borderRadius: "0.5rem" }}
      onClick={handleAddFruta}>
        Agregar
      </button>

      <section className="Task">
        <ul className="TaskList">
          {Listfrutas.map((fruta) => (
            <li key={fruta}>{fruta}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoApp;
