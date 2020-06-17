import React from 'react';

function Anuncio(props) {
    return(
        <div>
            <p>Início do Anúncio</p>
                {props.children}
            <p>Fim do Anúncio</p>
        </div>
    )
}

export default Anuncio;