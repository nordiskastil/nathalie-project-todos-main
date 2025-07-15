# Todos

Replace this readme with your own information about the project. You can include things like:

- Brief description of the assignment
Build a To do app using Context API or Zustand. You should be able to add tasks, list tasks and toggle whether a task is done or not. Keeping it simple and clean. 

- How you approached the task, what tools and techniques you used, and how you planned it
I wanted to create a simple app, a bit like Google tasks but with a bit more styling. 

I added a added TodoContext.jsx to setup the Context API. This file holds all state and logic for tasks, filters and dark mode. And provides functions like: addTask, removeTask, toggleTask, completeAllTasks

TodoForm.jsx = Creates a form with: Title, Description, Due date (Optional), Category dropdown, and Submit

TodoList.jsx = Lists tasks from filteredTasks, Makes tasks draggable with react-draggable, gives overdue tasks another styling and adds complete and delete buttons

Controls.jsx = Creates filter options like: Show All, Completed, Uncompleted, Created (date), Categories, a Complete All button with success message and Dark/light mode

Stats.jsx = Total tasks, Uncompleted tasks, Project statuses

Header.jsx = App title and styling

App.jsx = Here I importent all the components and added a <TodoProvider> a React Context Provider that wraps the app and makes global state available to any component inside the app, without having to pass props manually. 

Render Header, Controls, TodoForm, TodoList, Stats

main.jsx
Typical React root with <App /> inside #root

I installed the needed dependencies for moment, framer motion and React draggable:
npm install moment (creating a timestamp for each task) framer-motion react-draggable (Makes the tasks drag-and-droppable)

- If you had more time, what would be next?
The drag-and-drop function is not working like Google tasks automaticly creating a nice list. I believe this is possible with @hello-pangea/dnd, but this would be a puzzle. 

- How to run the project locally

## View it live
https://getting-stuff-done.netlify.app/
