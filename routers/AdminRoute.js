const express = require('express');
const jwt = require('jsonwebtoken');
const { isAdmin } = require('../middleware/checkAdmin');
const { addDefi, deleteDefi, updateDefi } = require('../controllers/DefiController');

const router = express.Router();

//Connexion à l'API
router.get('/login', (req, res) => {
    // Création et envoi du token
    const token = jwt.sign({ role: 'ADMINISTRATEUR' }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
    res.json({ token });
});



// Route pour ajouter un défi
router.post('/defis', isAdmin, async (req, res) => {
    try {
        // Récupération des données du défi
        const defi = req.body;

        const resultat = await addDefi(defi);
        res.json(resultat);

    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout d\'un document' });
    }
});

// Route pour supprimer un défi
router.delete('/defis/:id', isAdmin, async (req, res) => {
    res.json({ message: 'Défi supprimé' });
});

// Route pour modifier un défi
router.put('/defis/:id', isAdmin, async (req, res) => {
    res.json({ message: 'Défi modifié' });
});

module.exports = router;