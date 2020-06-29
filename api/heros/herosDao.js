
const mongoose = require('mongoose');
const herosSchema = require('./herosModels');

herosSchema.statics = {
    create: function(data, db){
        const hero = new this(data);
        hero.save(db)
    },
    get: function(query,db){
        this.find(query, db)
    },
    getByName: function(query, db){
        this.find(query, db)
    },
    update: function(query, updateData, db){
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, db)
    },
    delete: function(query, cb) {    
        this.findOneAndDelete(query,cb);
    }

}

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;