import { useState } from 'react'
import CreateUser from './components/CreateUser'
import CreateTask from './components/CreateTask'
import AssignTask from './components/AssignTask'
import UnassignedTasks from './components/UnassignedTasks'

export default function App () {
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])

  const handleAddUser = (user) => setUsers((prev) => [...prev, user])
  const handleAddTask = (task) => setTasks((prev) => [...prev, task])

  const handleAssignTask = (taskId, userId) =>
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, assignedTo: userId, status: 'assigned' } : t
      )
    )

  const unassignedTasks = tasks.filter((t) => t.status === 'unassigned')

  return (
    <div>
      <main className='main'>
        <div className='grid'>
          <CreateUser onAddUser={handleAddUser} />
          <CreateTask onAddTask={handleAddTask} />
        </div>
        <div className='grid'>
          <AssignTask
            users={users}
            unassignedTasks={unassignedTasks}
            onAssign={handleAssignTask}
          />
          <UnassignedTasks tasks={unassignedTasks} />
        </div>
      </main>
    </div>
  )
}
