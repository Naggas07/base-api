const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');
const cardController =  require('../controllers/card.controller')
const columnController = require('../controllers/column.controller')

router.get('/', controller.base);

router.get('/columns', columnController.list)
router.post('/columns', columnController.create)
router.get('/columns/:id', columnController.get)
router.patch('/columns/:id', columnController.update)
router.delete('/columns/:id', columnController.delete)

router.get('/cards', cardController.list)
router.post('/cards', cardController.create)
router.get('/cards/:id', cardController.get)
router.patch('/cards/:id', cardController.update)
router.delete('/cards/:id', cardController.delete)

module.exports = router;