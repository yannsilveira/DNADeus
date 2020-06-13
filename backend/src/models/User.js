const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            age: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Ministry, { foreignKey: 'user_id', through: 'user_ministries', as: 'ministries' })
    }
}

module.exports = User