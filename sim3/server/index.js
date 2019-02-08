const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authctr = require('./controllers/auth');
const app = express();
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(bodyParser.json());
massive(CONNECTION_STRING).then((db) =>
{
    app.set('db', db);
    console.log('connected to db successfully');
})
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.listen(SERVER_PORT, () => console.log('listening on port',SERVER_PORT))