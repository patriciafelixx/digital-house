import React, { useState, useEffect } from 'react';

function Contador() {
    let [cont, setCont] = useState(0);

    useEffect(() => {
        console.log(`O contador foi alterado e possui o valor ${cont}`);
        
    })

    return(
        <div>
            <h1>Contador</h1>
            <span>{cont}</span>
            <div>
                <button onClick={() => setCont(cont - 1)}>Decrementar</button>
                <button onClick={() => setCont(cont + 1)}>Incrementar</button>
            </div>
        </div>
    )
}

export default Contador;