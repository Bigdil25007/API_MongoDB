const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.DATABASE_URL, { autoIndex: false });

const defiSchema = new mongoose.Schema({
    nom:
        { type: String, required: true },
    description:
        { type: String, default: '' },
    categorie:
        { type: String, default: '' },
    objectif:
        { type: String, default: '' },
    difficulte:
        { type: String, default: '' },
    recompense:
        { type: String, default: '' },
    date_debut:
        { type: Date, default: new Date() },
    date_fin:
        { type: Date, default: null },
    equipe:
        { type: [String], default: [] },
    technologies:
        { type: [String], default: [] },
    pays:
        { type: String, default: 'France' },
    participants_max:
        { type: Number, default: 0 },
    participants_actuels:
        { type: Number, default: 0 },
    etat:
        { type: String, default: "non démarré" },
    tags:
        { type: [String], default: [] }
}, { versionKey: false });

const defiModel = conn.model('Defi', defiSchema, process.env.COLLECTION_NAME);

module.exports = defiModel;