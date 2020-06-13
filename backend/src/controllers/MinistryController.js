const Ministry = require('../models/Ministry')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { name } = req.body

        const ministry = await Ministry.create({ name })

        return res.json(ministry)
    },

    async index(req, res) {
        const ministry = await Ministry.findAll()

        return res.json(ministry)
    },

    async index(req, res) {
        const { id } = req.params

        const user = await User.findByPk(id, {
            include: { association: 'ministries', through: { attributes: [] } }
        })

        return res.json(user.ministries)
    },
}