const Heros = require('./herosDao');

exports.createHero = async function (req, res, next) {
    const hero = {
        name: req.body.name,
        description: req.body.description
    }
    try{
        await Heros.create(hero)
        res.json({
            message: "Hero created successfully"
        })
    }
    catch(error){
        return next(new Error("Internal error."))
    }
}

exports.getHeros = async function (req, res, next) {
    try {
        const heros = await Heros.find({})
        res.json({
            heros: heros
        })
    } catch (error) {
        return next(new Error("Internal error."))
    }
}


exports.getHero = async function (req, res, next) {
    try {
        const hero = await Heros.find({_id: req.params.id})
        res.json({"hero": hero})
    }
    catch (error){
        return next(new Error("Non existent hero or error."))
    }
}

exports.updateHero = async function (req, res, next) {
    const hero = {
        name: req.body.name,
        description: req.body.description
    }
    try {
        await Heros.findOneAndUpdate({_id: req.params.id}, hero)
        res.json({message: "Hero updated successfully"})
    }
    catch (error){
        return next(new Error("Update error."))
    }
}

exports.removeHero = async function (req, res, next) {
    try{
        await Heros.findOneAndDelete({_id: req.params.id})
        res.json({
            message: "Hero deleted successfully"
        })
    }
    catch(error){
        return next(new Error("Deletion error."))
    }
}