import React, { useState } from 'react';

function AddText() {
  let [text, setText] = useState('');
  let [input, setInput] = useState('');

  return (
    <>
      <p>
        <label>Texto</label>
        <input type="text" onChange={e => setInput(e.target.value)} value={input} />
      </p>
      {/* <button onClick={e => setText(document.querySelector('input').value)}>Capturar Texto</button> */}
      <button onClick={e => setText(input)}>Capturar Texto</button>
      <p>O Texto digitado foi {text}</p>

      <button onClick={e => setInput('')}>Limpar input</button>
    </>
  );
}

export default AddText;
