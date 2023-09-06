const restaurants = require('express').Router()
const db = require('../models')
const { Restaurant } = db

//get All Restaurants
restaurants.get('/', async (req,res) => {
    try {
        const foundRestaurants = await Restaurant.findAll()
        res.status(200).json(foundRestaurants)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

//get All Restaurants
restaurants.get('/allRecipes', async (req,res) => {
    try {
        const foundRestaurants = await Restaurant.findAll()
        res.status(200).json(foundRestaurants)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

module.exports = restaurants