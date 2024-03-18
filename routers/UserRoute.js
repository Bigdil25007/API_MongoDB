const express = require('express');
const router = express.Router();


// Route pour récupérer un défi aléatoire ou un nombre spécifique de défis
router.get('/defis/:nb?', (req, res) => {
    const nb = req.params.nb;
    if (nb && nb >= 1 && nb <= 100) {
        // Votre code pour récupérer le nombre spécifié de défis ici
    } else {
        // Votre code pour récupérer un défi aléatoire ici
    }
});


module.exports = router;