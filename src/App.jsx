import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import Stats from './components/Stats';
import Controls from './components/Controls';
import './index.css'

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

