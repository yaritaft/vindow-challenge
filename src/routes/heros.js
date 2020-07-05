const express = require('express')
const router = express.Router()
const Heros = require('../api/heros/herosController');

router.post('/', Heros.createHero);
router.get('/', Heros.getHeros);
router.get('/:id', Heros.getHero);
router.put('/:id', Heros.updateHero);
router.delete('/:id', Heros.removeHero);

module.exports = router