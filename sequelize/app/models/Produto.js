module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define(
      'Produto',
      {
        id_produto: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: DataType.STRING,
        descricao: DataType.STRING,
        imagem: DataType.STRING,
        preco: DataType.DECIMAL,
        fk_categoria: {
          type: DataType.INTEGER,
        },
      },
      {
        tableName: "produto",
        timestamps: false,
      }
    );
  
    Produto.associate = (Models) => {
      Produto.belongsTo(Models.Categoria, {
        foreignKey: "fk_categoria",
        as: "categoria",
      });
  
      Produto.belongsToMany(Models.Pedido, {
        foreignKey: "fk_produto",
        as: "pedidos",
        through: Models.ItemPedido,
      });
    };
  
    return Produto;
  };
  