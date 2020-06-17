import React, { Component } from 'react';
import Post from './Post';
import Anuncio from './Anuncio';

class Feed extends Component {
    render(){
        return(
            <div>
                <Anuncio>
                    Sou o anúncio 1
                </Anuncio>
                <Post id="post-1" post="Post 1" />
                <Post id="post-2" listaComentarios={['Comentario 1 do post 2', 'Comentario 2 do post 2']} post="Post 2" qtdComentarios={80} />
                <Post id="post-3" listaComentarios={['Comentario 1 do post 3', 'Comentario 2 do post 3']} post="Post 3" qtdComentarios={20} />
                <Post id="post-4" listaComentarios={['Comentario 1 do post 4', 'Comentario 2 do post 4']} post="Post 1" qtdComentarios={120} />
                <Anuncio>
                    Sou o anúncio 2
                </Anuncio>
            </div>
        )
    }
}

export default Feed;