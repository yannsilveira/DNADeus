const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Ministry = require('../models/Ministry')
const User = require('../models/User')
const Event = require('../models/Event')

const connection = new Sequelize(dbConfig)

User.init(connection)
Ministry.init(connection)
Event.init(connection)

User.associate(connection.models)
Ministry.associate(connection.models)
Event.associate(connection.models)

module.exports = connection