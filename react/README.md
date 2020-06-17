# React

### Documentação
https://reactjs.org/

### Instalação
```
$ npm init react-app my-app
$ npx create-react-app my-app
$ yarn create-react-app my-app
```

### JSX
Sintaxe que permite a cominação de HTML com JavaScript. https://reactjs.org/docs/introducing-jsx.html

### Components E Props
https://reactjs.org/docs/components-and-props

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```jsx
const element = <Welcome name="Sara" />;
```

###  Key-props
https://reactjs.org/docs/lists-and-keys

```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable ids
  <li key={index}>{todo.text}</li>
);
```

### Default Props E Prop-Types
https://reactjs.org/docs/typechecking-with-proptypes.html


```jsx
$ npm install prop-types

import PropTypes from 'prop-types';

function Post(props) {
    return (
        // . . . 
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
```

### Children
props.children é usado para trazer todos os elementos filhos definidos dentro de um elemento pai.
```jsx
function Component(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```
```jsx
function Example() {
  return (
    <Component>
      <p>bla bla bla</p>
    </Component>
  );
}
```

### Styling
Boa prática: uma página de estilo por componente.
```jsx
import '/Component.css';

<div className="white">
</div>
```
```css
white {
  color: #FFF;
}
```

### Statefull Components
```jsx
import React, { Component } from 'react';

class Feed extends Component {
    render(){
        return(
            <div>
            </div>
        )
    }
}
```

### Eventos
```jsx
function Example(props) {
    const zoomIn = () => {
        document.getElementById(props.id).style.fontSize = '25px';
    }
    const zoomOut = () => {
        document.getElementById(props.id).style.fontSize = '16px';
    }
    return (
        <div id={props.id} onMouseOver={zoomIn} onMouseOut={zoomOut}>

        </div>
    );
}
```
### useState E useEffect
```jsx
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
```

### Integração com APIs
https://reactjs.org/docs/faq-ajax

```
$ npm install axios
```
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon'
            }).then(res => {
                setData(res.data.results);
            })
        }
        fetchData();
    }, [])

    return (
        <div>
            {data !== '' ? data.map((data, i) => {
                return <li key={i}>{data.name}</li>
            }) : '' }
        </div>
    );
}

export default Pokemon;
```