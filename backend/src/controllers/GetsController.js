const Ministry = require('../models/Ministry')

module.exports = {
    async showmemberamount(req, res) {
        const { id } = req.params

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        return res.json(ministry.memberamount)
    },

    async shownumberofevents(req, res) {
        const { id } = req.params

        const ministry = await Ministry.findByPk(id)

        if (!ministry) {
            return res.status(400).json({ error: 'Ministry not found!' })
        }

        return res.json(ministry.numberofevents)
    }
}