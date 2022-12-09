// mongodb+srv://hunhun:<password>@mevn-project.uzrmcpt.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');

//create out express

const app = express();

const uri = 'mongodb+srv://hunhun:1234@mevn-project.uzrmcpt.mongodb.net/mevn-project?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        })
        console.log('mongoDB Connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()
//routes
app.get('/', (req, res) => {
    res.send('yay home page')
})
const PORT = 5000;
const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute)

// start server
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})