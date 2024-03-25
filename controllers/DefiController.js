const defiModel = require('../models/DefiModel');

//Read
async function getNbDefis(nb) {
    try {
        //verif que le paramètre rentre dans les bornes
        if (nb > 100) { nb = 100; }
        else if (nb < 1) { nb = 1; }

        return resultat = await defiModel.aggregate([
            { $sample: { size: nb } },
            { $project: { _id: 0 } }
        ]);

    } catch (error) {
        console.error('Erreur lors de la récupération des défis :', error);
        return error;
    }
}

//Create
async function addDefi(defi) {
    try {
        const newDefi = new defiModel(defi);

        //On s'assure que le format correspond
        await newDefi.validate();

        return await newDefi.save();

    } catch (error) {
        console.error('Erreur lors de l\'ajout du défi :', error);
        return error;
    }
}

//Delete
async function deleteDefi(id) {
    try {
        return await defiModel.deleteOne({ _id: id });
    }
    catch (error) {
        console.error('Erreur lors de la suppression du défi :', error);
        return error;
    }
}

//Update
async function updateDefi(id, defi) {
    try {
        return await defiModel.updateOne({ _id: id }, defi);
    }
    catch (error) {
        console.error('Erreur lors de la modification du défi :', error);
        return error;
    }
}

module.exports = { getNbDefis, addDefi, deleteDefi, updateDefi };

