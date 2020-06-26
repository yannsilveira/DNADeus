const Event = require('../models/Event')
const Ministry = require('../models/Ministry')

module.exports = {
    async index(req, res) {
        const { id } = req.params


        const ministry = await Ministry.findByPk(id, {
            include: { association: 'events' }
        })

        return res.json(ministry.events)
    },

    async store(req, res) {
        const { id } = req.params
        const ministry_id = id
        const { name, description, zipcode, street, number, neighborhood, date, schedule } = req.body

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const event = await Event.create({ name, description, zipcode, street, number, neighborhood, date, schedule, ministry_id })

        return res.json(event)
    },

    async update(req, res) {
        const { id } = req.params
        const { name, description, zipcode, street, number, neighborhood, date, schedule } = req.body

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const event = await Event.update({ name, description, zipcode, street, number, neighborhood, date, schedule }, { where: { id: req.params.ide } })

        return res.json(event)
    },

    async destroy(req, res) {
        const { id } = req.params

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        const event = await Event.destroy({ where: { id: req.params.ide } })

        return res.json(event)
    }
}

