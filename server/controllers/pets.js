var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    index: (req, res) => {
        Pet.find({}).sort({'type': 1})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    create: (req, res) => {
        let new_Pet = new Pet(req.body);
        new_Pet.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    read: (req, res) => {
        Pet.find(req.params)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update: (req, res) => {
        Pet.findOneAndUpdate(
            {_id: req.params},
            {$set:
                req.body
            },
            { 
                runValidators: true,
                context: 'query'
            }, error =>  res.json(error),
            {new:true});
    },
    like: (req, res) => {
        Pet.findOneAndUpdate(
            {_id: req.params},
            {$inc :
                {'likes' : 1}
            },
            {new:true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Pet.deleteOne(req.params)
        .then(data => res.json(data))
        .catch( err => res.json(err));
    },

}