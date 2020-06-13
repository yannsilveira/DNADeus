const { Model, DataTypes } = require('sequelize')

class Event extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            neighborhood: DataTypes.STRING,
            date: DataTypes.STRING,
            schedule: DataTypes.STRING,
            ministry_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Ministry, { foreignKey: 'ministry_id', as: 'promoter' })
    }
}

module.exports = Event