**Install**
```
$ npm install sequelize
$ npm install sequelize-cli -D
$ npm install mysql2
```

**Config**
```javascript 
-- config -- database.js

const config = {
    username: 'root',
    password: '****',
    database: 'database-name',
    host: 'localhost',
    dialect: 'mysql'
}
module.exports = config;
```
```javascript
-- .sequelizerc

const path = require('path')

module.exports = {
    'config': path.resolve('config', 'database.js')
}
```

**Raw Queries**
```javascript
-- FileController.js

const Sequelize = require('sequelize');
const config = require('../config/database');

const FileController = {
    index: async (req, res) => {
        const dbconn = new Sequelize(config);
        const xyz = 'Lorem Ipsum'
        const result = await dbconn.query('SELECT * FROM table WHERE table.name = :xyz', { 
            replacements: { xyz },
            type:Sequelize.QueryTypes.SELECT 
        });
        
        res.send(result);
    }
}
module.exports = FileController;
```

**Models**
```
$ npx sequelize init:models
```

```javascript
-- .sequelizerc [+]

'models-path': path.resolve('models')
```

```javascript
-- models -- TableName.js

const ModelName = (sequelize, DataTypes) => {
    return sequelize.define(
        'ModelName',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncremet: true
            },
            name: DataTypes.STRING(100),
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            }
        },
        {
            tableName: 'tablename',
            timestamps: false
        }
    )
}
module.exports = ModelName;
```
```javascript
-- models -- index.js [edit]

const config = require('../config/database');
```

**FindsAll (select) and findOne (where)**
```javascript
-- FileController.js

const { ModelName } = require('../models');
const Sequelize = require('sequelize');
const Op = require(Sequelize.Op); // Operators Sequelize

const FileController = {
    index: async (req, res) => {
        let users = await ModelName.findAll(); //equals SELECT FROM *
        res.render('view', {users});
    },
    findById: async (req, res) => {
        let { id } = req.params;
        let xpto = await ModelName.findOne({
            where: {
                id_user: id
            }
        });
        res.render('view', {xpto});
    },
    search: async (req, res) => {
        let { fragment } = req.query;
        let xpto = await ModelName.findAll({
            where: {
                column: {
                    [Op.like]: `%${fragment}%`
                }
            }
        });
        res.render('view', {xpto});
    }
}
module.exports = FileController;
```

**Pagination Example**
```javascript
-- FileController.js

const FileController = {
    index: async (req, res) => {
        let { page=1 } = req.query;
        let {count:total, rows:items} = await ModelName.findAndCountAll({
            limit: 5,
            offset: (page - 1) * 5
        });
        let totPage = Math.round(total / 5);
        res.render('view', {items, totPage});
    }
}
module.exports = FileController;
```

**Aggregator Functions**
```javascript
let count = await ModelName.count();
let min = await ModelName.min('item');
let max = await ModelName.max('item');
let sum = await ModelName.sum('item');
```

**Create and Bulk Create**
```javascript
User.create({
    nome: 'John',
    email: 'john@email.com',
    senha: '123456'
})
User.bulkCreate([
    { nome: 'Josh', email: 'josh@email.com', senha: '123456' },
    { nome: 'Jane', email: 'jane@email.com', senha: '123456' },
    { nome: 'Jess', email: 'jesx@email.com', senha: '123456' }
])
```

**Update**
```javascript
User.update({
    email: 'jess@email.com'
}, {
    where: { id: 4 }
})
```

**Destroy**
```javascript
User.destroy({
    where: { id: 1 }
})
```

**Relationship 1:1 (hasOne + belongsTo)**
```javascript
-- Model Funcionario.js
Funcionario.associate = models => {
    Funcionario.hasOne(models.Conjuge, {
        foreignKey: 'conjuge_id',
        as: 'conjuge'
    })
}

-- Model Conjuge.js
Conjuge.belongsTo();
```

**Relationship 1:n (hasMany + belongsTo)**
```javascript
-- Model Funcionario.js
Funcionario.associate = models => {
    Funcionario.belongsTo(models.Departamento, {
        foreignKey: 'departamento_id',
        as: 'departamento'
    })
}

-- Model Departamento.js
Departamento.hasMany(models.Funcionario, {
    as: 'funcionarios'
});
```

**Relationship n:n (belongsToMany)**
```javascript
-- Model Aluno.js
Aluno.belongsToMany(Turma, {
    through: 'aluno_turma',
    foreignKe: 'aluno_id',
    as: 'turmas'
})

-- Model Turma.js
Turma.belongsToMany(Aluno, {
    through: 'aluno_turma',
    foreignKe: 'turma_id',
    as: 'alunos'
})

-- 
const turmas = Turma.findAll({
    include: [{
        association: 'alunos',
        through: {
            attributes: []
        }
    }]
})

```

**Migrations**
```javascript
-- .sequelizerc [+]
'migrations-path': path.resolve('migrations')
```
```
$ npx sequelize migration:create --name=create_tablename
```
```javascript
-- create_tablename.js

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
    'tableName', {
     id: {}, 
     name: {},
    // ... 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tableName');
  }
};
```
```
$ npx sequelize db:migrate 
```