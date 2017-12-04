require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const books_controller = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db hooked up')
})

app.get('/api/books', books_controller.getBooks);

const PORT = 3005;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));