const express = require('express');
const controller  = require('../controllers/staticController');
const staticRouter = express.Router();

staticRouter.get('/',controller.getAll);
staticRouter.get('/:id',controller.getSingle);
staticRouter.post('/',controller.create);
staticRouter.put('/:id',controller.update);
staticRouter.delete('/:id',controller.delete);


module.exports = staticRouter;