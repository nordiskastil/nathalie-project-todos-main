import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import moment from 'moment';
import Draggable from 'react-draggable';

const TodoList = () => {
  const { filteredTasks, toggleTask, removeTask } = useContext(TodoContext);

  if (filteredTasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {filteredTasks.map((task) => {
        const isOverdue =
          task.dueDate && !task.completed && moment(task.dueDate).isBefore(moment(), 'day');

        return (
          <Draggable key={task.id}>
            <div className={`todo ${task.completed ? 'done' : ''} ${isOverdue ? 'overdue' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <div>
                  <h3>{task.title}</h3>
                  {task.description && <p>{task.description}</p>}
                  <p style={{ fontSize: '0.9rem', color: '#777' }}>
                    Created: {moment(task.createdAt).format('MMM D, YYYY')}
                  </p>
                  {task.dueDate && (
                    <p style={{ fontSize: '0.9rem', color: isOverdue ? '#ff5e5e' : '#888' }}>
                      Due: {moment(task.dueDate).format('MMM D, YYYY')}
                    </p>
                  )}
                  {task.category && <span>📁 {task.category}</span>}
                  {task.project && <span> | 📌 {task.project}</span>}
                </div>
              </div>

              <button onClick={() => removeTask(task.id)} style={{ marginTop: '0.5rem' }}>
                Remove
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default TodoList;
