import React, { useState } from 'react';

function Todo() {
    let [input, setInput] = useState('');
    let [todo, setTodo ] = useState([]);

    function handleRemover(tarefaExcluir) {
        let filter = todo.filter(c => c != tarefaExcluir);
        setTodo(filter);
    }

    return (
        <div>
            <h1>TO-DO</h1>
            <input onChange={e => setInput(e.target.value)} />
            <button onClick={e => setTodo([...todo, input])}>Adicionar tarefa</button>

            <ul>
                {todo.map(tarefa => (
                    <li>
                        {tarefa}
                        <button onClick={e => handleRemover(tarefa)}> x </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;