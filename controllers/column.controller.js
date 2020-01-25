const Column = require('../models/column')
const Card = require('../models/card')

module.exports.create = (req, res, next) => {
    const column = new Column(req.body)
    column.save()
        .then(
            column => res.json(column)
        ).catch(next)
}

module.exports.list = (req, res, next) => {
    Column.find()
    .populate('cards')
        .then(
            columns => res.json(columns)
        ).catch(next)
}

module.exports.get = (req, res, next) => {
    Column.findById(req.params.id)
    .populate('cards')
        .then(
            column => res.json(column)
        ).catch(next)
}

module.exports.update = (req, res, next) => {
    Column.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('cards')
        .then(
            column => res.json(column)
        ).catch(next)
}

module.exports.delete = (req, res, next) => {
    Promise
		.all([
			Column.findByIdAndDelete(req.params.id),
			Card.deleteMany({ column: req.params.id })
		])
		.then(
			([column, cards]) => {
				if (!column) {
					throw createError(404, 'column not found');
				} else {
					res.status(204).json();
				}
			}
		)
		.catch(next);

}