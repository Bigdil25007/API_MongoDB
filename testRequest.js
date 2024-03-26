const http = require('http');
const dotenv = require('dotenv');
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
    const url = 'http://localhost:3000/defis/66024ff027b3edb1aa2c17b1';

    const data = {
        participants_max: 5,
        participants_actuels: 3,
        technologies: ['Unity', 'C#'],
    };

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.TEMPORARY_JWT,
        }
    };

    const req = http.request(url, options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log(responseData);
        });
    });

    req.write(JSON.stringify(data));
    req.end();
}

testRequest();