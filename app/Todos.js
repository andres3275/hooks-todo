import React from 'react';
import Todo from './Todo';

function Todos({ todos, handleDelete, handleDone }) {
    return (
        <div className='todos'>
            {
                todos && todos.map((todo, i) => (
                    <Todo key={i} todo={todo} i={i} handleDelete={handleDelete} handleDone={handleDone} />
                ))
            }
        </div >
    );
}

export default Todos;