// Ciclos: O while e o do while

function encontreUm5(numeros) {
    let i = 0;
    do {
        console.log(numeros[i]);
        i++;
    } while (numeros[i] !== 5) {
        console.log('Encontramos um 5!');
    };
};
encontreUm5([1, 2, 3, 4, 6, 7, 5, 8, 9, 0]);

/*
1
2
3
4
6
7
Encontramos um 5!
*/