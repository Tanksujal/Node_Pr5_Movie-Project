const mongoose = require('mongoose')
 const ConnectDb = async() => {
    try {
        const db = await mongoose.connect('mongodb+srv://sujaltank20:sujaltank20@cluster0.t3djt.mongodb.net/Movie_app')
        console.log(`mongodb connected = ${db.connection.host}`);
    } catch (error) {
        console.log(error);
    }
 }
 module.exports = ConnectDb