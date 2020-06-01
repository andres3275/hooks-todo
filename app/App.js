import React, { useState } from 'react';
import './App.css'
import Todos from './Todos'
import TodoForm from './TodoForm';

function App() {
    const [todoValue, setTodoValue] = useState('');

    const handleChange = event => setTodoValue(event.target.value);

    const [todos, setTodo] = useState([]);

    const handleSubmit = event => {
        const todo = {
            value: todoValue,
            done: false
        };

        if (!todoValue) return;
        setTodo([...todos, todo]);
        document.getElementById('todoValue').value = '';
    };

    const handleDelete = event => {
        const { id } = event.target.parentElement;
        todos.splice(id, 1);
        setTodo([...todos]);
    }

    const handleDone = event => {
        const { id } = event.target.parentElement;
        todos[id].done = !todos[id].done;
        setTodo([...todos]);
    }

    return (
        <>
            <Todos todos={todos} handleDelete={handleDelete} handleDone={handleDone} />
            <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </>

    );
}

export default App;


