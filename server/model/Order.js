const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderNo: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
})

mongoose.model('orders', orderSchema);