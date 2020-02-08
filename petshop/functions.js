const pets = require('./pets.json');

const darBanho = pet => {
    pet.servicos.push({
        nome: 'banho', 
        data: new Date()
    });
    console.log(`Dando banho em ${pet.nome}.`);
    return pet;
}

const darVacina = pet => {
    if (pet.vacinado) {
        console.log(`${pet.nome} já foi vacinado.`)
    } else {
        pet.servicos.push({
            nome: 'vacina',
            data: new Date()
        });
        pet.vacinado = true;
        console.log(`Vacina aplicada em ${pet.nome}`);

    }
    return pet;
}

const tosar = pet => {
    pet.servicos.push({
        nome: 'tosa',
        data: new Date()
    });
    console.log(`Tosando ${pet.nome}.`)
    return pet; 
}

const consulta = pet => {
    pet.servicos.push({
        nome: 'consulta',
        data: new Date()
    });
    console.log(`Pet ${pet.nome} em consulta.`)
    return pet; 
}

const mostrarServicos = pet => {
    for (let servico of pet.servicos) {
        if (servico.data) {
            console.log(`${servico.nome}: ${servico.data.toLocaleDateString('pt-BR')}`);
        } else {
            console.log(`${servico}: Data indefinida!`);
        }
    }
}

const aplicarServico = (pet, serv) => serv(pet);

let thor = pets[1];
aplicarServico(thor, darBanho);
aplicarServico(thor, darVacina);
aplicarServico(thor, tosar);
aplicarServico(thor, mostrarServicos);