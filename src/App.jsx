import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import Stats from './components/Stats';
import Controls from './components/Controls';
import './index.css'

// TodoProvider wraps the application in the TodoProvider to provide context to all components
// This allows components to access the todo state and functions without prop drilling
// The TodoProvider will manage the state of todos, filters, and dark mode
// It also provides functions to add, toggle, remove tasks, and manage filters
const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <main>
          <TodoForm />
          <Controls />
          <Stats />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
};

export default App;

