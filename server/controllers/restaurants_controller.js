const restaurants = require('express').Router()
const db = require('../models')
const {Op} = require('sequelize')
const { Restaurant } = db

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


restaurants.post('/', async (req, res) => {
    console.log(req.body.name)
    console.log(req.body.protein)
    const newRestaurant = await Restaurant.create(req.body)

    res.redirect('http://localhost:3000/restaurant')

})




// restaurants.put('/recipe/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const updatedRecipe = await Recipe.update(req.body, {
//             where: {
//                 recipe_id: id
//             }
//         });
//         res.redirect('http://localhost:3000/recipes')
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })




module.exports = restaurants