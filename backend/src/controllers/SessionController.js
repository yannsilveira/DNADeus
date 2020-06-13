const Ministry = require('../models/Ministry')

module.exports = {
    async create(req, res) {
        const { id } = req.body

        const ministry = await Ministry.findOne({ where: { id } })

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry ID not found!'})
        }

        return res.json(ministry)
    }
}