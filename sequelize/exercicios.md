# Sequelize


#### Usando método query
Usando o método de consulta do Sequilize execute a seguinte query: "SELECT * FROM users".
Lembre-se que o método de consulta é assíncrono e retorna uma promise (promessa). Portanto, após executar o método de consulta você precisa concatenar o método then e então recuperar a resposta. Dentro do método faça um console.log do resultado retornado.
Finalmente, adicione o método de capturas de erros. Dentro do método de captura ele faça um console.log.
```javascript
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

sequelize.query("SELECT * FROM users")
    .then(
        resultado => console.log(resultado)
    ).catch(
        error => console.log(error)
    )
```

#### Utilizando método query novamente
Temos nosso produtoController que cuida das operações relacionadas aos produtos (listar todos, carregar produtos, etc).
O que nós queremos fazer é adicionar a lógica para o método de exibição. Este método recebe uma identificação do produto(id) e deve retornar o produto cuja identificação corresponda ao banco de dados. Finalmente, usando o método de envio do objeto de resposta, devemos devolvê-lo.
Para encontrar o produto em nossa base de dados podemos usar o método de consulta do objeto Sequelize e fazer uma consulta do tipo: "SELECT * FROM products where id = " + req.params.id.
Lembre-se que o resultado deve ser recuperado no método then. Será dentro deste método que você irá executar o código res.send().

```javascript
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const mostrar = (req, res) => {
	sequelize.query("SELECT * FROM products WHERE id = "+ req.params.id)
	.then(
		produto => res.send(produto)
	)
}
```

#### De novo novamente método query
Dentro do filmeController temos o método de deletar. Este método espera por uma identificação e remove o filme correspondente da base.
Para resolver o exercício será necessário executar dentro do método query algo como: "DELETE FROM filmes WHERE id = " + req.params.id
Para finalizar, dentro do método envie então a mensagem "Produto excluído com sucesso" e dentro do método de captura a mensagem "Erro ao excluir o produto".
```javascript
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const deletar = (req, res) => {
	sequelize.query("DELETE FROM filmes WHERE id = " + req.params.id)
	.then(
		res.send("Produto excluído com sucesso")
	).catch(
		() => res.send("Erro ao deletar um produto")
	)
}
```
 
#### Criando uma model
Nossa base de dados possui uma tabela chamada usuarios que possui três colunas: nome, email e senha (todas do tipo string).
O objetivo deste exercício é ser capaz de criar um model associado à tabela de usuários.
Para criar nosso model vamos utilizar o método definir do objeto sequelize. Este método espera dois parâmetros: o primeiro é o nome da tabela e o segundo um JSON, cujas chaves são os nomes das colunas e os valores o tipo de dados.
```javascript
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define(
	'usuarios',
    {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING
    }
);

module.exports = Usuario;
```
 
#### Evitando erros ao criar models
Ao configurar nossos modelos Sequelize você faz algumas suposições sobre nossas tabelas. Uma delas é que espera que todas as nossas tabelas tenham as colunas criadas e atualizadas.
Se você criar um model de tabela que não tenha nenhuma destas colunas você pode obter o erro clássico "Unknown column 'createdAt' in 'field list'".
Para evitar isso, devemos dizer explicitamente ao Sequelize que não vamos usar nenhuma das colunas criadas ou atualizadas. Para isso, precisamos passar como terceiro parâmetro do método definir um JSON com esta estrutura: {timestamps: false}.
Neste exemplo já temos o model configurado para a tabela de usuários, mas precisamos ter certeza de que não temos as colunas created_at ou updated_at. O seu objetivo será adicionar a configuração correspondente.
```javascript
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define(
    'usuarios',
    {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    },
    {
        timestamps: false
    }
);
module.exports = Usuario;
```
 
#### Selecionando Filmes
A partir do nosso model Filmes vamos recuperar todos os filmes da nossa base de dados e fazer um console.log do resultado.
Para isso você pode usar o método findAll do model Filmes.
*** Lembre-se que este método é assíncrono.
```javascript
const Filmes = require('model/filmes.js');

Filmes.findAll()
    .then(filmes => console.log(filmes))
```
 
#### Selecionando pelo ID
A partir do model Filmes vamos recuperar o filme com a id 1.
O Sequelize nos oferece o método findByPk que recupera um elemento da base de acordo com sua chave primária. Podemos usar este método a partir do nosso objeto Filmes.
Tenha em mente que este método é assíncrono, portanto será necessário trabalhar com promises.
```javascript
const Filmes = require('model/filmes.js');

Filmes.findByPk(1)
    .then(filme => console.log(filme));
```
 
#### Buscando carros pela marca
O método findAll nos traz todas as linhas de registros que temos em nossa base. Se precisarmos filtrar o resultado, podemos passar um JSON como parâmetro do métodos com uma query dentro.
Neste exercício, temos o model Auto. Nosso objetivo será trazer todos os carros cujas coluna de marcas correspondam ao valor "Fiat".
```javascript
const Auto = require('model/autos.js');

Auto.findAll(
	{where: { marca: 'Fiat' }}
).then(autos => {
	console.log(autos)
});
```
 
#### Selecionando pela conta gmail
Neste exercício, vamos buscar todos os usuários que possuem uma conta Gmail. Para fazer isso, vamos precisar perguntar dentro do findAll se os valores contidos coluna email terminam com a string de texto "@gmail.com".
Até agora o where esperava um JSON cuja chave era a coluna a ser pesquisada e valor era o que queríamos pesquisar. Isto nos trouxe combinações idênticas, é como usar o mesmo operador do MySQL. Mas agora vamos precisar usar um operador similar, ou seja, vamos ter que recriar com sequelizar esta consulta MySQL: 'SELECT * FROM users WHERE email LIKE "%gmail"''.
Para isso, dentro do where onde vamos passar um JSON com o nome da coluna e cujo valor é um novo JSON: { [Op.like]: '%gmail.com'}
```javascript
const Sequelize = require('sequelize');
const Usuario = require('model/usuarios.js');
const Op = Sequelize.Op

 Usuario.findAll({ 
	 where: { email: { [Op.like]: "%gmail.com" } } })
.then(usuarios => {
	console.log(usuarios)
});
```
 
#### Produtos ordenados pelo preço
Neste exercício o objetivo será trazer todos os produtos ordenados por preço, do menor para o maior.
Lembre-se que dentro do método findAll você pode passar um JSON que tenha como chave a palavra order e cujo valor é um array de array indicando em qual coluna ou colunas iremos ordenar e qual tipo de ordenação terá: ASC ou DESC.
```javascript
const Producto = require('model/produtos.js');

Producto.findAll({
	order: [['preco', 'ASC']] 
}).then(produtos => {
	console.log(produtos)
});
```
 
#### Limitando número de registros consultados
Quando devolvemos ao usuário uma lista de registros é aconselhável que os resultados sejam paginados, para trazer tanta informação junta da base de dados.
Neste exercício, temos a função findAll aplicado ao model Produto.
O objetivo da vez é passar um parâmetro para o método findAll para executar um limit e trazer apenas os 5 primeiros produtos.
```javascript
const Produto = require('model/produtos.js');
Produto.findAll({
	limit: 5
}).then(produtos => {
	console.log(produtos)
});
```
 
#### Função agregadora - max
Sequelize nos permite iterar com nossos modelos utilizando as mesmas funções de agregação que já conhecemos do MySQL, tais como: max, min, count, sum, etc.
Neste exercício precisamos recuperar do banco de dados o preço cujo valor é o mais alto entre todos os preços dos nossos produtos. Para isso, podemos utilizar o método max no nosso model Produto.
***Lembre-se que o método máximo espera receber o nome da coluna.
Assim, ele irá recuperar o resultado dentro do método then e mostrá-lo com um console log: then(maiorPreco => {console.log(maiorPreco)})
```javascript
const Produto = require('model/produtos.js');

Produto.findAll(Produto.max('preco'))
    .then(maiorPreco => console.log(maiorPreco));
```
 
#### Contabilizando número de usuários
Dado o model Usuario, conte o número total de usuários nesta base de dados.
Para isso, será necessário utilizar o método count em Usuario.
```javascript
const Usuario = require('model/usuarios.js');

Usuario.findAll(Usuario.count('usuarios'))
    .then(usuarios => console.log(usuarios));
```

#### Criando um usuário
Suponha que tenhamos um model de Sequelize chamado Usuário. Este model possui três atributos: nome, email, senha, todos eles do tipo string.
O que devemos fazer é, a partir desse model, inserir um usuário no banco de dados indicando um valor para cada atributo.
Para resolver isso, lembre-se de que você deve usar o método create do seu model.
```javascript
const Usuario = require('model/usuario.js');

Usuario.create({
    nome: 'Fulano', 
    email: 'fulano@email.com', 
    senha: '123456'
})

```

#### Criando vários usuários
Em certas situações, precisamos fazer mais de um registro no banco de dados. Embora possamos usar o método create várias vezes, a sequenciação facilita essa tarefa com o método bulkCreate. Este método recebe um array, em que cada posição é um objeto com as mesmas características do objeto que o método create recebe. Em outras palavras, o método bulkCreate é como o método create, mas com a vantagem de permitir a inserção de vários registros ao mesmo tempo.
Neste exemplo, temos o model de filme. Nosso objetivo é inserir dois filmes usando o método bulkCreate. Cada filme a ser inserido deve ter um título e um gênero (para os nomes dos atributos, use "titulo" e "genero" sem acentos).
```javascript
const Filme = require('model/filme.js');

Filme.bulkCreate([
    {titulo: 'Titanic', genero: 'romance'},
    {titulo: 'Rambo', genero: 'ação'}
])
```

#### Criando Produtos
Neste exemplo, temos o controller produtoController que possui o método create. Ao mesmo tempo, existe um formulário com os campos nome e preço e que envia esses dados para o nosso controlador, através de uma solicitação do tipo POST.
A ideia do exercício é poder recuperar os dois campos e usar o model do produto e inseri-los em nosso banco de dados.
Para isso, será necessário usar o método create do modelo do produto. Como parâmetro do método, devemos passar um JSON com os atributos nome e preco (sem acentos). Teremos que recuperar os valores para esses atributos a partir da requisição.
```javascript
const Produto = require('model/produto.js');

const produtoController = {
  create: (req, res) => {
    const {nome, preco} = req.body;
    Produto.create({
      nome, 
      preco
    })
  }  
}
```

#### Atualizando o preço
Em nossa base temos um produto chamado "Smartphone x5 MEGA PRO". O id dele é 1. Nosso objetivo aqui é atualizar seu preço para o valor de 899 devido a uma promoção.
Para esse desafio iremos usar um modelo já definido chamado Produto. Como vimos, o método update altera os dados em uma tabela. Este método, recebe como parâmetro dois objetos: o primeiro contendo as informações que iremos atualizar. O segundo com as condições para selecionarmos qual registro queremos alterar.
```javascript
const Produto = require('model/Produto.js');

Produto.update({
    preco: 899
}, {
    where: {
        id: 1
    }
})
```

#### Atualizando série
Em determinadas circunstâncias podemos usar o método update para atualizar mais de um registro em nossa base de dados. Nesse próximo desafio queremos mudar os valores da coluna genero de todas as séries cujo o gênero seja comédia para sitcom.
A ideia por aqui é semelhante do nosso primeiro desafio, porém dessa vez, no nosso objeto de configuração ou query, devemos fazer um where pela coluna genero (sem acento!).
```javascript
const Serie = require('model/Serie.js');

Serie.update({
    genero: 'sitcom'
}, {
    where: {
        genero: 'comédia'
    }
})
```

#### Remover Filme
Da mesma maneira que inserimos e atualizamos dados em nosso banco de dados, o Sequelize também nos permite excluir registros. Para esta tarefa, o método destroy pode ser utilizado em qualquer um dos nossos modelos. Este método espera como parâmetro um objeto com uma query do tipo where que permita identificar a linha a ser excluída. O objetivo deste exercício é remover o filme com um ID igual a 3.
```javascript
const Filme = require('model/filme.js')

Filme.destroy({
    where: {
        id: 3
    }
})
```

#### Remover Usuário
Da mesma maneira que um registro pode ser excluído por seu ID, o mesmo pode ser feito para alguma outra coluna que identifique exclusivamente o elemento.
Neste exercício, excluiremos um usuário com base no seu email. O objetivo é eliminar o usuário cujo email é igual a "kenny@south-park.com"
Para isso, usaremos o método destroy do model Usuario, passando como parâmetro uma consulta que faz um where pelo email.
```javascript
const Usuario = require('model/usuario.js');

Usuario.destroy({
    where: {
        email: 'kenny@south-park.com'
    }
})
```

#### Removendo Vários Usuários
O método destroy permite, como o select, passar outros operandos para a consulta. Em vez de usar uma comparação de operador igual (a comparação padrão), podemos usar um like.
Neste exemplo, removeremos todos os usuários cujo provedor de email é aol.com. Ou seja, aqueles cujo email termina em  "aol.com".
Para isso, vamos executar o método de destruição do model Usuario. Dentro do where (no método destroy), vamos passar um objeto com o nome da coluna e cujo valor é um novo JSON com a seguinte sintaxe: email: {[Op.like]: '%aol.com'}

```javascript
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({
    where: {
        email: {[Op.like]: '%aol.com'}
    }
})
```

#### Filme com Gêneros
Vamos imaginar que já criamos um modelo para gênero e agora queremos criar um para um filme.
O objetivo será indicar a relação entre um filme e um gênero no modelo "Filme". Ou seja, um filme pertence a um gênero.
Para definir isso, após a declaração do model do filme, será necessário chamar o método belongsTo, passando o model "Genero" como o primeiro parâmetro. O segundo parâmetro do método belongsTo será um objeto com a configuração para o ForeignKey e o "as" (apelido para o nome da relação). No nosso caso, a ForeignKey será a coluna chamada "genero_id" e indicaremos como alias "genero".
```javascript
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });
  
  Filme.associate = models => {
    Filme.belongsTo(models.Genero, {
        foreignKey: 'genero_id',
        as: 'genero'
    })
  }
   return Filme
}
```

#### Todos os filmes de um Gênero
Para este exercício, nosso objetivo será, após a definição do modelo Genero, vinculá-lo ao modelo Filme.
Nesse caso, um gênero tem muitos (has many) filmes. Para indicar isso, vamos usar o método hasMany do modelo Genero.
Para a configuração da relação, será utilizada a coluna "genero_id" como foreignKey. Indicaremos como apelido da relação (alias) "filmes".
```javascript
module.exports = (sequelize, DataTypes) =>{
    const Genero = sequelize.define('generos',{
        nome: DataTypes.STRING,
    });
  
  Genero.associate = models => {
      Genero.hasMany(models.Filme, {
          foreignKey: 'genero_id',
          as: 'filmes'
      })
  }
   return Genero
}

```

#### Que filme é esse?
Nesse exemplo teremos um modelo Filme que tem já definida uma relação com o modelo gênero.
Queremos buscar o filme com id 1, e para isso podemos usar o método findByPk. É importante dizer que também queremos trazer o gênero do filme em nossos resultados.
Para conseguir isso, devemos passar como segundo parâmetro do método findByPk um objeto com o atributo include. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento genero.
E para nosso desafio se concluir, você deverá dar um console.log no atributo que contem o nome do gênero: filme.genero.nome

```javascript
const Filme = require('model/Filme.js');

Filme.findByPk(1, {
    include: ['genero']
}).then(
    filme => console.log(filme.genero.nome)
)
```

#### Filmes e Atores
No MySQL, ao indicar relacionamentos muitos para muitos, é necessário criar uma tabela dinâmica. Algo semelhante acontece com Sequelize. Para relacionar dois models por meio da relação belongsToMany, devemos primeiro criar um model "dinâmico".
Neste exemplo, queremos relacionar os models de filme e ator. Para isso, vamos criar o modelo FilmeAtor. Como na criação de qualquer model, o primeiro parâmetro é o nome da tabela, neste caso: "filme_ator". Como segundo parâmetro, passamos a JSON as colunas e suas propriedades. Sendo a representação de uma tabela dinâmica, ela terá duas colunas "filme_id" e "ator_id".
Além de indicar que cada uma dessas colunas é um número inteiro, devemos definir o parâmetro references indicando os atributos do model e key. O model será com qual model está relacionado e a chave para qual coluna ele aponta.
Para a coluna filme_id, o model será "Filme" e a key "id". Enquanto para a coluna ator_id, o model será "Ator" e a key "id".
Mãos à obra.
```javascript
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const FilmeAtor = sequelize.define(
    'filme_ator',
    {
        filme_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Filme',
                key: 'id'
            }
        },
        ator_id: {
           type: Sequelize.INTEGER,
            references: {
                model: 'Ator',
                key: 'id' 
            }
        }
    }
);
module.exports = FilmeAtor;
```

#### Relacionamento Pivot
Depois de criar o model dinâmico, devemos estabelecer um relacionamento do tipo belongsTo com cada um dos modelos relacionados.
Em nosso exemplo, precisaríamos adicionar um belongsTo com Filme e outro com Ator. Como em todos os belongsTo, o primeiro parâmetro será o nome do model e o segundo um JSON indicando a ForeignKey (não é necessário definir "as").
```javascript
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Ator = require('model/ator.js');
const Filme = require('model/filme.js');

const FilmeAtor = sequelize.define('filme_ator',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Filme',
    		key: 'id'
    	}
    },
    ator_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Ator',
    		key: 'id'
    	}
    }
});

FilmeAtor.belongsTo(Filme, {
	foreignKey: 'filme_id'
})

FilmeAtor.belongsTo(Ator, {
	foreignKey: 'ator_id'
})
module.exports = FilmeAtor;
```

#### Um pouco mais de filmes e atores
O objetivo deste exercício é relacionar o modelo do filme e ator através de um relacionamento muitos-para-muitos (N-M).
Para indicar isso, vamos usar o método belongsToMany no modelo Filme. Não se esqueça que devemos executar esse método dentro da função associate.
Para a configuração da relação, a ForeignKey será a coluna filme_id, com alias "atores" e a tabela intermediaria será o modelo FilmeAtor.
```javascript
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });
  
  Filme.associate = models => {
    Filme.belongsToMany(models.Ator, {
        through: 'FilmeAtor',
        foreignKey: 'filme_id',
        as: 'atores'
    })
  }
   return Filme
}
```

#### Buscando Atores
Neste exemplo, temos o modelo de filme que tem um relacionamento muitos-para-muitos com o ator.
Queremos trazer todas as informações do filme com id junto com os atores que ele associou.
Para conseguir isso, devemos passar como segundo parâmetro do método findByPk um JSON com o atributo include. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento "atores".
Finalmente, imprimiremos dentro do método e, em seguida, um console.log que nos mostra os atores do filme: filme.atores.
Como o relacionamento é de muitos para muitos, o atributo de atores será do tipo de array.
```javascript
const Filme = require('model/filme.js');

Filme.findByPk(1, {
    include: ['atores']
}).then(
    filme => console.log(filme.atores)
)
```