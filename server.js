const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRouter = require('./routers/UserRoute');
//const adminRouter = require('./routers/AdminRoute');

dotenv.config();
const env = process.env; //raccourci pour ecrire process.env
const app = express();
const port = env.LISTENING_PORT;

mongoose.connect(env.DATABASE_URL);
const collection = mongoose.connection.collection(env.COLLECTION_NAME);

//Body-parser pour récupérer les POST
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
//app.use(adminRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




// collection.findOne({ bed_type: 'Real Bed' }, (err, result) => {
//     if (err) {
//         console.error('Erreur lors de la recherche des données:', err);
//         return;
//     }
//     console.log('Données trouvées:', result);
// });


