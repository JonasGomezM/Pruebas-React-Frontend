// sin memo
import  { useState, } from "react";
import "./Memo.scss";

// Componente memorizado (React.memo)
const UserList = ({ users, onSelect }: { users: string[], onSelect: (name: string) => void }) => {
  console.log("🧠 UserList renderizado");

  return (
    <div>
      <h3>Usuarios:</h3>
      <ul>
        {users.map((user) => (
          <li key={user} onClick={() => onSelect(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Memo = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const users = ["juan", "ana", "luis", "maria", "pedro", "carlos", "sofia"];

  // useMemo para evitar recalcular el filtro en cada render
  const filteredUsers = () => {
    console.log("⚙️ Filtrando usuarios...");
    // Simular cálculo costoso
    const now = performance.now();
    while (performance.now() - now < 300) {} // Delay artificial
    return users.filter((u) => u.includes(filter));
  };

  // useCallback para no redefinir la función cada vez
  const handleSelect = (name: string) => {
    alert(`Seleccionaste: ${name}`);
  };

  return (
    <div className="memo" style={{ padding: "1rem" }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>➕ Sumar</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Filtrar usuarios"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <UserList users={filteredUsers()} onSelect={handleSelect} />
    </div>
  );
};
