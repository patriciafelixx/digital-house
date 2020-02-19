function alarme1() {
    return 'Hora de acordar! São 08h00'
}

function alarme2() {
    return 'Está perto da sua hora de acordar! São 07h50'
}

setTimeout(function() {
    console.log(alarme1())
}, 2000)

console.log(alarme2());

// Está perto da sua hora de acordar! São 07h50
// Hora de acordar! São 08h00