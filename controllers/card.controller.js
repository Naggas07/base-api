const Card = require('../models/card')
const createError = require('http-errors');

module.exports.create = (req, res, next) => {
    const card = new Card(req.body)
    card.save()
        .then(
            card => res.json(card)
        ).catch(next)

}

module.exports.list = (req, res, next) => {
    Card.find()
        .then(
            cards => res.json(cards)
        ).catch(next)
}

module.exports.get = (req, res, next) => {
    Card.findById(req.params.id)
        .then(
            card => res.json(card)
        ).catch(next)
}

module.exports.update = (req, res, next) => {
    Card.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(
            card => res.json(card)
        ).catch(next)
}

module.exports.delete = (req, res, next) => {
    Card.findByIdAndDelete(req.params.id)
    .then(
        card => res.json({message: 'objetc deleted'})
    )
}