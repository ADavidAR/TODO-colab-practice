import Card from "./Card";

export default function UnassignedTasks({ tasks }) {
  return (
    <Card title="Tareas sin asignar">
      {tasks.length === 0 ? (
        <p className="empty-msg">No hay tareas pendientes de asignación.</p>
      ) : (
        <>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span className="task-dot" />
                {task.title}
              </li>
            ))}
          </ul>
          <p className="task-count">
            {tasks.length} {tasks.length === 1 ? "tarea pendiente" : "tareas pendientes"}
          </p>
        </>
      )}
    </Card>
  );
}
