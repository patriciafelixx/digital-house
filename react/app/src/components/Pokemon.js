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
