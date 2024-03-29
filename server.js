const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/UserRoute');
const adminRouter = require('./routers/AdminRoute');

const app = express();
const port = process.env.LISTENING_PORT;

//Body-parser pour récupérer les POST, PUT et DELETE
app.use(express.json());

app.use(userRouter);
app.use(adminRouter);

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur de défis d\'éco-conception \n' +
        'Voilà la liste des endpoints : \n' +
        'GET /defis/ : pour récupérer un défi aléatoire \n' +
        'GET /defis/nb : pour récupérer un nombre spécifique de défis (limité à 100) \n' +
        'POST /defis/ : pour ajouter un défi (fournir JWT)\n' +
        'PUT /defis/:id : pour modifier un défi (fournir JWT)\n' +
        'DELETE /defis/:id : pour supprimer un défi (fournir JWT) \n' +
        'GET /login : pour obtenir un JWT token (durée : 24h) \n');
});

//Gestion route non prévue
app.use((req, res) => {
    res.status(404).send('Cette route n\'est pas définie');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


