import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { motion, AnimatePresence } from 'framer-motion';

const Controls = () => {
  const {
    setFilter,
    completeAllTasks,
    darkMode,
    setDarkMode,
    createdAfter,
    setCreatedAfter,
    selectedCategory,
    setSelectedCategory,
  } = useContext(TodoContext);

  const [showCongrats, setShowCongrats] = useState(false);

  const handleCompleteAll = () => {
    completeAllTasks();
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2500);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Show All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>

        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Private">Private</option>
          <option value="Shopping">Shopping</option>
          <option value="Someday">Someday</option>
        </select>

        <input
          type="date"
          value={createdAfter || ''}
          onChange={(e) => setCreatedAfter(e.target.value || null)}
        />

        <button onClick={handleCompleteAll}>Complete All</button>

        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ marginTop: '1rem', color: '#4CAF50', fontWeight: 'bold' }}
          >
            🎉 Everything is done, well done!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Controls;

