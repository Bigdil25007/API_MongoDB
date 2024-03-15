const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const env = process.env;


mongoose.connect(env.DATABASE_URL);
const collection = mongoose.connection.collection(env.COLLECTION_NAME);

collection.findOne({ bed_type: 'Real Bed' }, (err, result) => {
    if (err) {
        console.error('Erreur lors de la recherche des données:', err);
        return;
    }
    console.log('Données trouvées:', result);
});


