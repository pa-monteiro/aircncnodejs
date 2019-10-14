const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-i1sny.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

//req.query => get (para filtros)
//req.params => delete,put ( edição e delete)
//req.body => acessar corpo requisição (create, edição)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3333);