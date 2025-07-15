import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Projects = () => {
  const { projectStatus } = useContext(TodoContext);

  if (projectStatus.length === 0) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Projects</h3>
      <ul>
        {projectStatus.map((proj) => (
          <li key={proj.name}>
            {proj.name} — {proj.isComplete ? '✅ Done' : '🕒 In Progress'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
