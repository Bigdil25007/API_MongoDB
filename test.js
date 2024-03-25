const http = require('http');

function testPostRequest() {
    const url = 'http://localhost:3000/defis';

    const data = {
        nom: 'Projet de jeu vidéo éco-responsable',
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
            console.log(responseData);
        });
    });

    req.write(JSON.stringify(data));
    req.end();
}

testPostRequest();