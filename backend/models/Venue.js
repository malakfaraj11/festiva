const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Veuillez ajouter un nom de salle'],
        trim: true,
        maxlength: [50, 'Le nom ne peut pas dépasser 50 caractères']
    },
    location: {
        type: String,
        required: [true, 'Veuillez ajouter une adresse']
    },
    price: {
        type: Number,
        required: [true, 'Veuillez ajouter un prix']
    },
    capacity: {
        type: Number,
        required: [true, 'Veuillez ajouter la capacité max']
    },
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    description: {
        type: String,
        required: [true, 'Veuillez ajouter une description'],
        maxlength: [500, 'La description ne peut pas dépasser 500 caractères']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Venue', venueSchema);
