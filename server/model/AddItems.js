const mongoose = require('mongoose');
const addItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
})

mongoose.model('items', addItemSchema);