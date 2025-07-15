import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { addTask } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      title,
      description,
      dueDate: dueDate || null,
      category,
      project,
    });

    // Clear form
    setTitle('');
    setDescription('');
    setDueDate('');
    setCategory('');
    setProject('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Private">Private</option>
        <option value="Shopping">Shopping</option>
        <option value="Someday">Someday</option>
      </select>

      <input
        type="text"
        placeholder="Project name (optional)"
        value={project}
        onChange={(e) => setProject(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
