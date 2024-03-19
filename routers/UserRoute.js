const express = require('express');
const router = express.Router();
const { getNbDefis } = require('../controllers/UserController');


// Route pour récupérer un défi aléatoire ou un nombre spécifique de défis
router.get('/defis/:nb?', async (req, res) => {
    const nb = req.params.nb;

    try {
        const val = (nb === undefined ? 1 : parseInt(nb));
        const resultat = await getNbDefis(val);
        res.json(resultat);

    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la recherche des données' });
    }
});

module.exports = router;