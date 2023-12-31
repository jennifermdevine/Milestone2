const recipes = require('express').Router()
const db = require('../models')
const {Op} = require('sequelize')
const { Recipe } = db



//get recommended Recipes
recipes.get('/', async (req,res) => {
    //how to add limit of top three with something they all can eat
    try {
        const foundRecipes = await Recipe.findAll()
        res.status(200).json(foundRecipes)
    } catch (err){
        res.status(500).send('Server error getting recommend recipes')
        console.log(err)
    }
})


//get All Recipes
recipes.get('/allRecipes', async (req,res) => {
    try {
        const foundRecipes = await Recipe.findAll()
        res.status(200).json(foundRecipes)
    } catch (err){
        res.status(500).send('Server error getting all recipes')
        console.log(err)
    }
})

//INDIVIDUAL PAGE RECIPE
recipes.get('/recipe/:id', async (req,res) => {
    const data = req.params.id
    const id = data.match(/\d+/)[0]
    const where = {
            recipe_id: {
                [Op.iLike] : id
                }

            }
    try {
        const foundRecipe = await Recipe.findOne({
            where: {
                recipe_id: id
            }
        });
        res.status(200).json(foundRecipe)

    }  catch(e) {
        res.status(500).json(e)
    }
})




//post new Recipe
recipes.post('/', async(req,res) => {
    console.log(req.body.name)
    console.log(req.body.protein)

    const newRecipe = await Recipe.create(req.body)


      res.redirect('https://in-or-out.onrender.com/recipes')

})

//UPDATE A RECIPE
recipes.put('/recipe/:id', async(req,res) => {
    const {id} = req.params
    try{
        const updatedRecipe= await Recipe.update(req.body, {
            where: {
                recipe_id: id
            }
        });
        res.redirect('https://in-or-out.onrender.com/recipes')
    } catch(error) {
        res.status(500).json(error)
    }
})


//delete recipe
recipes.delete('/recipe/:id', async(req,res) => {
    const {id} = req.params


    try{
        const deleteRecipe= await Recipe.destroy({
            where: {
                recipe_id: id
            }
        });
        res.redirect('https://in-or-out.onrender.com/recipes')
        //  res.redirect('http://localhost:4005/recipes')   for testing on device (not deployed)
        
        // res.status(200).json({
        //     message: Successfully deleted restaurant id ${id},})
    } catch(error) {
        res.status(500).json(error)
    }


})


module.exports = recipes