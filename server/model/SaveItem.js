const mongoose = require('mongoose');
const orderConfirmedSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    pricePerUnit: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderNo: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
})

mongoose.model('confirmedOrders', orderConfirmedSchema);