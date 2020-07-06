
const mongoose = require('mongoose');
const herosSchema = require('./herosModels');

herosSchema.statics = {
    create: function(data, db){
        const hero = new this(data);
        hero.save(db)
    }
}

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;