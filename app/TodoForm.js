import React from 'react';

function TodoForm({ handleChange, handleSubmit }) {
    return (
        <>
            <input type="text" id="todoValue" onChange={handleChange} />
            <button onClick={handleSubmit}>Add Todo</button>
        </>
    );
}

export default TodoForm;