const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    // récupération du token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null)
        return res.status(403).json({ error: 'Aucun token fourni.' });

    //verification du token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {

        if (err)
            return res.status(500).json({ error: 'Échec de l\'authentification du token.' });

        if (decoded.role !== 'ADMINISTRATEUR')
            return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à effectuer cette action.' });

        next();
    });
}

module.exports = { isAdmin };