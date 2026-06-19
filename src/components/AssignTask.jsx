import { useState } from "react";
import Card from "./Card";

export default function AssignTask({ users, unassignedTasks, onAssign }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAssign = async () => {
    if (!selectedUser || !selectedTask) { setError("Selecciona un usuario y una tarea."); return; }
    setLoading(true); setError(""); setSuccess("");
    try {
      // FUTURO → PATCH /api/tasks/:taskId/assign · body: { userId: Number(selectedUser) }
      await new Promise((r) => setTimeout(r, 300));
      onAssign(Number(selectedTask), Number(selectedUser));
      setSuccess("Tarea asignada correctamente.");
      setSelectedUser(""); setSelectedTask("");
    } catch (err) {
      setError(err.message || "Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = users.length === 0 || unassignedTasks.length === 0;

  return (
    <Card title="Asignar Tarea">
      <div className="form">
        <select
          className="select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          disabled={loading || users.length === 0}
        >
          <option value="">
            {users.length === 0 ? "Sin usuarios registrados" : "Seleccionar usuario"}
          </option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>

        <select
          className="select"
          value={selectedTask}
          onChange={(e) => setSelectedTask(e.target.value)}
          disabled={loading || unassignedTasks.length === 0}
        >
          <option value="">
            {unassignedTasks.length === 0 ? "Sin tareas disponibles" : "Seleccionar tarea"}
          </option>
          {unassignedTasks.map((t) => (
            <option key={t.id} value={t.id}>{t.title}</option>
          ))}
        </select>

        {error && <p className="msg-error">{error}</p>}
        {success && <p className="msg-success">{success}</p>}

        <button
          className="btn btn-primary"
          onClick={handleAssign}
          disabled={loading || isEmpty}
        >
          {loading ? "Asignando…" : "Asignar"}
        </button>
      </div>
    </Card>
  );
}
