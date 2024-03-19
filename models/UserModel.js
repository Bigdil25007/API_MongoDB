const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.DATABASE_URL, { autoIndex: false });

const defiSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    objectif: {
        type: String,
        required: true
    },
    difficulte: {
        type: String,
        required: false
    },
    recompense: {
        type: String,
        required: false
    },
    date_debut: {
        type: Date,
        required: false
    },
    date_fin: {
        type: Date,
        required: false
    },
    equipe: {
        type: [String],
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    pays: {
        type: [String],
        required: true
    },
    participants_max: {
        type: Number,
        required: true
    },
    participants_actuels: {
        type: Number,
        required: true
    },
    etat: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    }
});

const defiModel = conn.model('Defi', defiSchema, process.env.COLLECTION_NAME);

module.exports = defiModel;