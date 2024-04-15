const mongoose = require('mongoose')

const clientsSchema = new mongoose.Schema ({

    name : String,
    lastName : String,
    email : String,
    gender: String,
    age: Number
})

const bookSchema = new mongoose.Schema ({
    name: String,
    author: String,
    pages: Number,
    description: String
})

const Clients = mongoose.model('Clients', clientsSchema)
const Books = mongoose.model ('Book', bookSchema)

module.exports = {Clients, Books}