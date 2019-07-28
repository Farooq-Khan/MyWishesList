const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todosList = Schema({
    item: String
})



module.exports = mongoose.model('myList', todosList);