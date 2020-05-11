const Usuario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Usuario',
        {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremet: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING(256),
                allowNull: false
            }
        },
        {
            tableName: 'usuario',
            timestamps: false
        }
    )
}

module.exports = Usuario;