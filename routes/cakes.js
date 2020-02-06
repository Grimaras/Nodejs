const express = require('express');
const router = express.Router();
const handlerCakes = require('../handlers/cakes');

router.route('/')
    .post(handlerCakes.create)
    .get(handlerCakes.readAll);

router.route('/:id')
    .get(handlerCakes.readOne)
    .put(handlerCakes.update)
    .delete(handlerCakes.delete);

module.exports = router;