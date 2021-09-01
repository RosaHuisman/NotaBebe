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


// Body parser
app.use(express.json());


// Middleware perttant d'extraire les données des requetes POST si présentes.
app.use(express.urlencoded({ extended: true }));


// Routage
app.use('/', router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});