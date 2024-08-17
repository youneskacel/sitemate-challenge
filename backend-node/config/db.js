const mongoose = require('mongoose');


const mongoURI = 'mongodb://127.0.0.1:27017/carsdatabase';

const connectDB = async () => {
    try {
        mongoose.connect(mongoURI)
            .then(() => {
              console.log('MongoDB connected successfully');
            })
            .catch((err) => {
              console.error('MongoDB connection error:', err);
            });
    } catch (error) {
        console.error('database couldn\'t be connected')
    }
}

module.exports = connectDB 