const express = require('express');
const app = express();
const port = 3000;
const usersController = require('./controllers/user.controller');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use('/users', usersController);

app.get('/:id', (req, res) => {
    res.status(200).send(`Your id is ${req.params.id}`);
});

app.post('/', (req, res) => res.send('Hello post!'));
app.delete('/', (req, res) => res.send('Hello delete!'));
app.put('/', (req, res) => res.send('Hello put!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));