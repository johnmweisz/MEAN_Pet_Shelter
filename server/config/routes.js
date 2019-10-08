var pets = require('../controllers/pets.js');

module.exports = app => {
    app.get('/pet/', (req, res) => {pets.index(req, res);});
    app.post('/pet/', (req, res) => {pets.create(req, res);});
    app.get('/pet/:_id', (req, res) => {pets.read(req, res);});
    app.put('/pet/:_id', (req, res) => {pets.update(req, res);});
    app.get('/pet/like/:_id', (req, res) => {pets.like(req, res);});
    app.delete('/pet/:_id', (req, res) => {pets.destroy(req, res);});
}