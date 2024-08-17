const express = require('express');
const app = express();
const staticRouter = require('./routes/staticRoutes')
const router = require('./routes/routes')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/static', staticRouter);
app.use('/', router);

const PORT = process.env.PORT || 3000;
connectDB()
app.listen(PORT,() => {
    console.log(`Application is running on: ${PORT}`);
})