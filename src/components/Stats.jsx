import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Stats = () => {
  const { todos, uncompletedCount } = useContext(TodoContext);

  return (
    <div style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
      <strong>Total tasks:</strong> {todos.length} |{' '}
      <strong>Remaining:</strong> {uncompletedCount}
    </div>
  );
};

export default Stats;
