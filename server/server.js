const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override')

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))

//CONTROLLERS
const recipesController = require('./controllers/recipes_controller')
app.use('/api/recipes', recipesController)

const restaurantsController = require('./controllers/restaurants_controller')
app.use('/api/restaurants', restaurantsController)

const peopleController = require('./controllers/people_controller')
app.use('/api/people', peopleController)


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to in-or-out'
    })
})

//LISTEN
app.listen(4005,() => {
    console.log('Server is running on port 4005')
})