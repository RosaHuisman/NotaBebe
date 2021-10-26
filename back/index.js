require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const sanitizer = require('sanitizer');

const router = require('./app/routers');

const app = express();

// la bonne pratique : origin: 'https://notabebe.netlify.app/'
const corsOptions ={
    origin:'https://notabebe.netlify.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());

// On assainit avec sanitizer
app.use((req, res, next) => {
    if (req.body) {
        for (const prop in req.body) {
            req.body[prop] = sanitizer.escape(req.body[prop]);
        }
    }
    next();
});

const port = process.env.PORT || 3000;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});