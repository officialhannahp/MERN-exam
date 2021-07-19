const Pet = require('../models/models');
module.exports = {
    // CREATE
    createPet: (req, res) => {
        Pet.create(req.body)
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // READ
    getAllPets: (req, res) => {
        Pet.find()
            .then(pets => res.json({ message: "success", results: pets }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    getOnePet: (req, res) => {
        Pet.findById(req.params._id)
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // UPDATE
    updatePet: (req, res) => {
        Pet.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // DELETE
    deletePet: (req, res) => {
        Pet.findByIdAndDelete(req.params._id)
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}