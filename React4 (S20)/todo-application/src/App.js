import React, { useState } from 'react';
import './App.css';
import TodoCount from './TodoCount';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoCount count={todos.length} />
      <TodoList todos={todos} />
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
