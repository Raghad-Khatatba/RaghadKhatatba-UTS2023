import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
