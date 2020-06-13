const { Model, DataTypes } = require('sequelize')

class Ministry extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'ministry_id', through: 'user_ministries', as: 'users' })
        this.hasMany(models.Event, { foreignKey: 'ministry_id', as: 'events' })
    }
}

module.exports = Ministry