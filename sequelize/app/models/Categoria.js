module.exports = (sequelize, DataType)=>{
    const Categoria = sequelize.define('Categoria', {
        id_categoria:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:DataType.STRING,
    },{
        tableName:'categoria',
        timestamps:false
    })

    Categoria.associate = (models)=>{
        Categoria.hasMany(models.Produto,{
            foreignKey:'fk_categoria',
            as:'produtos'
        })
    }
    
    return Categoria

}