const controller = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/pets', controller.createPet);
    // READ
    app.get('/api/pets', controller.getAllPets);
    app.get('/api/pets/:_id', controller.getOnePet);
    // UPDATE
    app.put('/api/pets/:_id/update', controller.updatePet);
    // DELETE
    app.delete('/api/pets/:_id/delete', controller.deletePet);
}