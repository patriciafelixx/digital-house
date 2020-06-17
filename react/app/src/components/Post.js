import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'

function Post(props) {

    const zoomIn = () => {
        document.getElementById(props.id).style.fontSize = '25px';
    }

    const zoomOut = () => {
        document.getElementById(props.id).style.fontSize = '16px';
    }

    return (
        <div id={props.id} className="post" onMouseOver={zoomIn} onMouseOut={zoomOut}>
            <p>{props.post}</p>
            <p>Comentários({props.qtdComentarios})</p>

            <ul>
                {props.listaComentarios != null ?
                    props.listaComentarios.map((comentario, index) => <li key={comentario + index}>{comentario}</li>) : ''
                }
            </ul>
        </div>
    );
}

Post.defaultProps = {
    qtdComentarios: 0,
    listaComentarios: null
}

Post.propTypes = {
    qtdComentarios: PropTypes.number,
    listaComentarios: PropTypes.string
}

export default Post;