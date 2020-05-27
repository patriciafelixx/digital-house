fetch('https://api.thecatapi.com/v1/images/search?category_ids=4&limit=10')
    .then((result) => {
        return result.json();
    })
    .then((cats) => {
        let imagens = document.getElementById('imagens');

        console.log(cats);
        cats.forEach(cat => {
            let div = document.createElement('div');
            let img = document.createElement('img');

            img.src = cat.url;
            img.width = 400;
            div.style.margin = '30px';

            div.appendChild(img);
            imagens.appendChild(div);
        })
    })