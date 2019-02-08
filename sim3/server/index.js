const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authctr = require('./controllers/auth');
const messagectr = require('./controllers/message');
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

app.post('/api/login',authctr.login)
app.post('/api/register',authctr.register)
app.post('/api/logout', authctr.logout)

app.get('/api/posts',messagectr.getPosts);
app.get('/api/posts/:id', messagectr.getPostById);
app.post('/api/posts', messagectr.createPost);

app.listen(SERVER_PORT, () => console.log('listening on port',SERVER_PORT))