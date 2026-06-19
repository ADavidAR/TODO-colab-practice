import { useState } from "react";
import Card from "./Card";

export default function CreateUser({ onAddUser }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) { setError("El nombre no puede estar vacío."); return; }
    setLoading(true); setError("");
    try {
      // FUTURO → POST /api/users · body: { name: trimmed }
      await new Promise((r) => setTimeout(r, 300));
      onAddUser({ id: Date.now(), name: trimmed });
      setName("");
    } catch (err) {
      setError(err.message || "Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Crear Usuario">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Nombre del usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        {error && <p className="msg-error">{error}</p>}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Creando…" : "Crear Usuario"}
        </button>
      </form>
    </Card>
  );
}
