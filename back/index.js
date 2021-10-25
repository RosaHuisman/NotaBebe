require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');

const router = require('./app/routers');

const app = express();
app.use(cors({
    origin: "https://notabebe-backend.herokuapp.com/"
}));

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