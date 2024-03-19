const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/UserRoute');
//const adminRouter = require('./routers/AdminRoute');

const app = express();
const port = process.env.LISTENING_PORT;

//Body-parser pour récupérer les POST
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
//app.use(adminRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


