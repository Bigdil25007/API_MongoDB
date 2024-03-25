const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

function testPostRequest() {
    const url = 'http://localhost:3000/defis/65f98940b8ade93b74626941';

    const data = {
        // nom: 'Projet de jeu vidéo éco-responsable',
    };

    const options = {
        method: 'DELETE',
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

testPostRequest();