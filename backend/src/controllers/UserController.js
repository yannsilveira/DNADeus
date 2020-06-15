const User = require('../models/User')
const Ministry = require('../models/Ministry')

module.exports = {
    async index(req, res) {
        const { id } = req.params

        const ministry = await Ministry.findByPk(id, {
            include: { association: 'users', through: { attributes: [] } }
        })

        return res.json(ministry.users)
    },

    async store(req, res) {
        const { id } = req.params
        const { name, email, age, whatsapp } = req.body

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const [user] = await User.findOrCreate({ where: { name, email, age, whatsapp } })

        await ministry.addUser(user)

        return res.json(user)
    },

    async destroy(req, res) {
        const { id } = req.params

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const user = await User.findOne({ where: { id: req.params.idu } })

        await ministry.removeUser(user)

        return res.json()
    },

    async update(req, res) {
        const { id } = req.params
        const { name, email, age, whatsapp } = req.body

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const user = await User.update({ name, email, age }, { where: { id: req.params.idu } })

        return res.json(user)
    },
}