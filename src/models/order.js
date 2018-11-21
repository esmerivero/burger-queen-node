// Que datos se van a almacenar y cómo se diseñan los datos en la base
const mongoose = require('mongoose');
const { Schema} = mongoose;

const OrderSchema = new Schema ({
    name: { type: String, required: true },
    status: { type: String, required: true },
    total: { type: Number, required: true}
});

module.exports = mongoose.model('Order', OrderSchema);