import { useState } from "react";

function TaskList({ tasks, deleteTask, editTask }) {
  const [editableId, setEditableId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEdit = (task) => {
    setEditableId(task.id);
    setEditedTitle(task.title);
    setEditedDate(task.date);
  };

  const saveEdit = (id) => {
    editTask(id, { id, title: editedTitle, date: editedDate });
    setEditableId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editableId === task.id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
              <button onClick={() => saveEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{task.title} - {task.date}</span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
