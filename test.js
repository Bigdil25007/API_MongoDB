const http = require('http');


function testPostRequest() {
    const url = 'http://localhost:3000/defis';

    const data = {
        // Replace the values below with the data you want to send
        username: 'admin'
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU5JU1RSQVRFVVIiLCJpYXQiOjE3MTEzMDEwNzcsImV4cCI6MTcxMTM4NzQ3N30.fT336AtI9ILukuqvbplFNStiPu9JKZ18VX_x7J_AJhI'
        }
    };

    const req = http.request(url, options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(responseData)); // Affiche la réponse du serveur
        });
    });

    req.on('error', (error) => {
        console.error('Erreur lors de la requête POST:', error);
    });

    req.write(JSON.stringify(data));
    req.end();
}

// Appel de la fonction pour tester la requête POST
testPostRequest();