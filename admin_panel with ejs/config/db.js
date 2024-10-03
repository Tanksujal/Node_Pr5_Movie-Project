const mongoose = require('mongoose')
 const ConnectDb = async() => {
    try {
        const db = await mongoose.connect(process.env.mongodb_url)
        console.log(`mongodb connected = ${db.connection.host}`);
    } catch (error) {
        console.log(error);
    }
 }
 module.exports = ConnectDb