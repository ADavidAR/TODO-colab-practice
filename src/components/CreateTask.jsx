import { useState } from "react";
import Card from "./Card";

export default function CreateTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) { setError("El título no puede estar vacío."); return; }
    setLoading(true); setError("");
    try {
      // FUTURO → POST /api/tasks · body: { title: trimmed, status: "unassigned" }
      await new Promise((r) => setTimeout(r, 300));
      onAddTask({ id: Date.now(), title: trimmed, status: "unassigned", assignedTo: null });
      setTitle("");
    } catch (err) {
      setError(err.message || "Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Crear Tarea">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        {error && <p className="msg-error">{error}</p>}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Creando…" : "Crear Tarea"}
        </button>
      </form>
    </Card>
  );
}
