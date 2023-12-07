const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
        minlength: [10, 'Number is incorrect ...'],
        maxlength: [15, 'Number is incorrect ...']
    },
    group: {
        type: String,
        required: [true, "Group field is required"]
    },
    info: String,
    price: {
        type: String,
        required: [true, "Price field is required"]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Service', serviceSchema);
