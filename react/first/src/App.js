import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import './App.css';

import Titulo from './components/Titulo';
import Card from './components/Card';

function App() {
  return (
    <div>
      < Titulo />
      <div className="row">
        < Card nome='Victor' cor='Verde' comida='Macarrão com queijo' img='https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/p160x160/57716571_2690017284372875_45283596843352064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=mPfNxbgajoMAX8JirQ1&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=3d4887456ddf3aea3d3be1ab6d4a4add&oe=5EF8E89A' />
        < Card nome='Alessandro' cor='Preto' comida='Batata Frita' img='https://avatars1.githubusercontent.com/u/34426407?s=400&u=f254a9a50b99e2a8f63ce58958cb97089032e307&v=483596843352064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=mPfNxbgajoMAX8JirQ1&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=3d4887456ddf3aea3d3be1ab6d4a4add&oe=5EF8E89A' />
        < Card nome='Erika' cor='Azul' comida='Strogonoff' img='https://avatars3.githubusercontent.com/u/45742312?s=400&u=0f995bf69e1f1f1ee9e4c52d18a676cb05fc406b&v=4' />
        < Card nome='Murilo' cor='Laranja' comida='Feijoada' img='https://avatars3.githubusercontent.com/u/54823475?s=400&u=780274777053e188d54edc02142567cfbef87172&v=4' />
        < Card nome='Agnys' cor='Rosa' comida='Arroz e Feijão' img='https://avatars0.githubusercontent.com/u/60678498?s=400&u=95bb3582f4957b8568a785477113f3e8b31b1c6c&v=4' />
      </div>
    </div>
  );
}

export default App;
