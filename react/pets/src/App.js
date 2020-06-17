import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';

import Card from './components/Card';
import Header from './components/Header';
import Line from './components/Line';
import Table from './components/Table';

let bixinhos = require('./database/pets.json');

function App() {        
  return (
    <div>
        <Header />
        <main>
            <div className="container">
                <h2>Bixinhos</h2>
                <div className="row">
                   {bixinhos.map(x => (
                        <div className="col s2">
                            <Card nome={x.nome} idade={x.idade} genero={x.genero} imagem={x.imagem} />
                        </div>
                    ))}
                </div>
                
                <h2>Pessoas</h2>
                <Table>
                    <Line nome="Victor" genero="M" idade="27" />
                    <Line nome="Wagner" genero="M" idade="20" />
                    <Line nome="Sonnia" genero="F" idade="43" />
                </Table>
            </div>
        </main>
    </div>
  );
}

export default App;
