const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path');
const cors = require('cors');


require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//CONTROLLERS
const recipesController = require('./controllers/recipes_controller')
app.use('/api/recipes', recipesController)

const restaurantsController = require('./controllers/restaurants_controller')
app.use('/api/restaurants', restaurantsController)


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to in-or-out'
    })
})


//LISTEN
app.listen(4005,() => {
    console.log('Server is running on port 4005')
})