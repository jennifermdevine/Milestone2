const restaurants = require('express').Router()
const db = require('../models')
const { Restaurants } = db

//get All Restaurants
restaurants.get('/', async (req,res) => {
    try {
        const foundRestaurants = await Restaurants.findAll()
        res.status(200).json(foundRestaurants)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

module.exports = restaurants