const mongoose = require('mongoose');

//pass: CUQaL7NtfVHmaHeY user: admin

mongoose.connect('mongodb://localhost/mean-users',{useNewUrlParser: true, useUnifiedTopology: true})
    .then((db) => console.log('Database Connected'))
    .catch((err) => console.log(err))