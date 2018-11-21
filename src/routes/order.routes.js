// Archivo que pide, actualiza, o elimina datos en el servidor
const express = require('express');
const router  = express.Router();

const Order = require('../models/order');

// Trae todo los datos de la base
router.get('/', async(req , res) => {
    const orders = await Order.find();
    res.json(orders)
})

// Escritura en la base de datos
router.post('/', async(req, res) => {
    const { name, status, total } = req.body;
    const order = new Order({
        name,
        status,
        total
    })
    await order.save();
    res.json({status: "orden guardada"});
});

module.exports = router;