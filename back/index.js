require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');

const router = require('./app/routers/index');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;


// On configure la session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// const jsonwebtoken = require('jsonwebtoken');
// const JWT_SECRET_SIGN = '5MeilleurTeam5DuMondeIci5';
// const jwt_option = {
//     algorithm: 'HS256',
//     expiresIn: '3h'
// }

// const authHeader = request.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//         console.log(request.headers['authorization']);

//         jsonwebtoken.verify(token, JWT_SECRET_SIGN, (err, user) => {
//     if (err) {
//       return res.sendStatus(401);
//     }
//     const decoded = jsonwebtoken.verify(token, JWT_SECRET_SIGN);
//     console.log(decoded);


// Body parser
app.use(express.json());


// Middleware perttant d'extraire les données des requetes POST si présentes.
app.use(express.urlencoded({ extended: true }));


// Routage
app.use('/', router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});