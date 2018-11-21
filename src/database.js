// Nos permite conectarnos a la base de datos
const mongoose = require('mongoose');

// aqui se debe cambiar a la url de mongo cloud
// const URI =  'mongodb://admin:<PASSWORD>@cluster0-shard-00-00-89xod.mongodb.net:27017,cluster0-shard-00-01-89xod.mongodb.net:27017,cluster0-shard-00-02-89xod.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const URI =  'mongodb://erivero:erivero1@ds159993.mlab.com:59993/projects';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('base conectada'))
    .catch( err => console.error(err))

module.exports = mongoose;