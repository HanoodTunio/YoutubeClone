const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json({
    limit: '50mb',
}));

app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

app.use(express.static('public'));
app.use(cookieParser());

module.exports = app;
