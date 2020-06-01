import React from 'react';

function Todo({ todo, i, handleDelete, handleDone }) {
    return (
        <div className='todo-block' id={i} >
            <button className={todo.done ? 'done' : 'not-done'}
                onClick={handleDone}>
                {todo.value}
            </button>
            <button className='delete-todo' onClick={handleDelete}>x</button>
        </div>
    );
}

export default Todo;