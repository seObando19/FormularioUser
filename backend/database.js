const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'});

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const name = process.env.DB_NAME;
mongoose.connect(`mongodb+srv://${user}:${pass}@server1.h8sfo.mongodb.net/${name}?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
)
    .then((db) => console.log('Database Connected'))
    .catch((err) => console.log(err))