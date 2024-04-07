const http = require('http');
const dotenv = require('dotenv');
const fs = require('fs');
const { log } = require('console');
dotenv.config();

/*
Ce script permet de tester les routes de l'API en utilisant des requêtes HTTP.
Il est possible de tester les routes suivantes:
- GET /defis
- POST /defis
- DELETE /defis/:id
- PUT /defis/:id

Pour les tester changer la valeur url pour le paramètre d'id (UPDATE et DELETE).
Changer data pour les données à envoyer en body (POST et UPDATE).
Et supprimer la ligne AUthorization dans headers pour les routes qui ne nécessitent pas de token.
*/

function testRequest() {
    const url = 'http://localhost:' + process.env.LISTENING_PORT + '/login/';

    const data = {
        participants_max: 4,
        participants_actuels: 3,
        technologies: ['Unity', 'C#'],
    };

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        options = CheckIfTokenSaved(options);
    } catch (error) {
        console.log("Erreur lors de la récupération du token JWT: " + error);
    }

    const req = http.request(url, options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log(responseData);
            CheckIfTokenReceived(url, responseData);
        });
    });

    req.write(JSON.stringify(data));
    req.end();
}

function CheckIfTokenReceived(url, responseData) {
    if (!/\/login/.test(url)) return;

    try {
        //Si on est sur la route /login, on récupère le token JWT et on le sauvegarde dans un fichier txt
        fs.writeFileSync('jwt.txt', responseData, (err) => {
            if (err) throw err;
            console.log('JWT sauvegardé dans jwt.txt');
        });

    } catch (error) {
        console.log("Erreur lors de la sauvegarde du token JWT: " + error);
    }
}


function CheckIfTokenSaved(options) {
    //on vérifie si la requete necessite un token JWT
    if (options === 'GET') return options;

    try {
        const data = fs.readFileSync('jwt.txt', 'utf8');
        //On recupère le token JWT sauvegardé dans le fichier txt et on ajoute le champ Authorization dans les headers
        options.headers['Authorization'] = 'Bearer ' + JSON.parse(data).token;

    } catch (err) {
        throw err;
    }

    return options;
}


testRequest();