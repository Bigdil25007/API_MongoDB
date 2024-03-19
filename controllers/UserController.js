const defiModel = require('../models/UserModel');

async function getNbDefis(nb) {
    try {
        //verif que le paramètre rentre dans les bornes
        if (nb > 100) { nb = 100; }
        else if (nb < 1) { nb = 1; }

        return resultat = await defiModel.aggregate([{ $sample: { size: nb } }]);

    } catch (error) {
        console.error('Erreur lors de la récupération des défis :', error);
        return error;
    }
}

module.exports = { getNbDefis };

