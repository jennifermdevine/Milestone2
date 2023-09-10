const restaurants = require('express').Router()
const db = require('../models')
const {Op} = require('sequelize')
const { Restaurant } = db
//get
restaurants.get('/', async (req, res) => {
    try {
        const foundRestaurants = await Restaurant.findAll()
        res.status(200).json(foundRestaurants)
    } catch (err) {
        res.status(500).send('Server error')
        console.log(err)
    }
})

restaurants.get('/allRestaurants', async (req, res) => {
    try {
        const foundRestaurants = await Restaurant.findAll()
        res.status(200).json(foundRestaurants)
    } catch (err) {
        res.status(500).send('Server error')
        console.log(err)
    }
})

restaurants.get('/restaurant/:id', async (req, res) => {
    const data = req.params.id
    const id = data.match(/\d+/)[0]
    const where = {
        restaurant_id: {
            [Op.iLike]: id
        }

    }
    try {
        const foundRestaurant = await Restaurant.findOne({
            where: {
                restaurant_id: id
            }
        });
        res.status(200).json(foundRestaurant)

    } catch (e) {
        res.status(500).json(e)
    }
})

//add
restaurants.post('/', async (req, res) => {
    console.log(req.body.name)
    console.log(req.body.protein)
    const newRestaurant = await Restaurant.create(req.body)

    res.redirect('http://localhost:3000/restaurants')

})

//delete
restaurants.delete('/restaurant/:id', async(req,res) => {
    const {id} = req.params
    console.log('hi')

    try{
        const deleteRestaurant= await Restaurant.destroy({
            where: {
                restaurant_id: id
            }
        });
         res.redirect('http://localhost:3000/restaurants')
        // res.status(200).json({
        //     message: `Successfully deleted restaurant id ${id}`,})
    } catch(error) {
        res.status(500).json(error)
    }


})
//update

restaurants.put('/restaurant/:id', async(req,res) => {
    const {id} = req.params
    try{
        const updatedRestaurant= await Restaurant.update(req.body, {
            where: {
                restaurant_id: id
            }
        });
        res.redirect('http://localhost:3000/restaurants')
    } catch(error) {
        res.status(500).json(error)
    }
})






module.exports = restaurants