import React, { useState } from 'react';

function AddNumber() {
  let [number, setNumber] = useState(0);

  return (
    <>
      <h1>o número atual é {number}</h1>
      <button onClick = {e => setNumber(number + 1)}>Adicionar 1</button>
    </>
  );
}

export default AddNumber;
