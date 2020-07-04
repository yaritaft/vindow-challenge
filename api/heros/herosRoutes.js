const express = require('express')
const Heros = require('./herosController');

const router = express.Router()
router.post('/create', Heros.createHero);
router.get('/get', Heros.getHeros);
router.get('/get/:id', Heros.getHero);
router.put('/update/:id', Heros.updateHero);
router.delete('/remove/:id', Heros.removeHero);

module.exports = router