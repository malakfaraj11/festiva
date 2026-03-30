const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/festiva_db');
        console.log(`Base de données connectée : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erreur de connexion à la base de données : ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;