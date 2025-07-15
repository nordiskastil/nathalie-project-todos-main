import React, { createContext, useState, useEffect } from 'react';
import moment from 'moment';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [createdAfter, setCreatedAfter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Add a new task
  const addTask = (task) => {
    setTodos((prev) => [
      ...prev,
      {
        ...task,
        id: crypto.randomUUID(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  // Toggle task complete/incomplete
  const toggleTask = (id) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Remove a task
  const removeTask = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  // Complete all tasks
  const completeAllTasks = () => {
    setTodos((prev) => prev.map((task) => ({ ...task, completed: true })));
  };

  // Filter logic
  let filteredTasks = todos;

  if (filter === 'completed') {
    filteredTasks = filteredTasks.filter((t) => t.completed);
  } else if (filter === 'uncompleted') {
    filteredTasks = filteredTasks.filter((t) => !t.completed);
  }

  if (createdAfter) {
    filteredTasks = filteredTasks.filter((t) =>
      moment(t.createdAt).isAfter(moment(createdAfter))
    );
  }

  if (selectedCategory) {
    filteredTasks = filteredTasks.filter((t) => t.category === selectedCategory);
  }

  // Project logic
  const projects = [...new Set(todos.map((t) => t.project).filter(Boolean))];
  const projectStatus = projects.map((project) => {
    const tasks = todos.filter((t) => t.project === project);
    const isComplete = tasks.every((t) => t.completed);
    return { name: project, isComplete };
  });

  const uncompletedCount = todos.filter((t) => !t.completed).length;

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTask,
        toggleTask,
        removeTask,
        completeAllTasks,
        uncompletedCount,
        filteredTasks,
        filter,
        setFilter,
        createdAfter,
        setCreatedAfter,
        selectedCategory,
        setSelectedCategory,
        darkMode,
        setDarkMode,
        projectStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

