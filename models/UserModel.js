const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.DATABASE_URL, { autoIndex: false });

const defiSchema = new mongoose.Schema({
    nom: String,
    description: String,
    categorie: String,
    objectif: String,
    difficulte: String,
    recompense: String,
    date_debut: Date,
    date_fin: Date,
    equipe: [String],
    technologies: [String],
    pays: String
});

const defiModel = conn.model('Defi', defiSchema, process.env.COLLECTION_NAME);

module.exports = defiModel;