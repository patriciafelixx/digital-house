import React, { useState } from 'react';

function UseStateExample() {
    let [frase, setfrase] = useState('Olá Mundo!')
    console.log('RENDER!')

    return (
        <>
        <h1>{frase}</h1>
        <button onClick={e => setFrase('Fui alterado!')}>Alterar Frase</button>
        </>
    )
}

export default UseStateExample;