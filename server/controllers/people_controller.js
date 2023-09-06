const people = require('express').Router()
const db = require('../models')
const {Op} = require('sequelize')
const { Person } = db


//get Alll people
people.get('/', async (req,res) => {
    //how to add limit of top three with something they all can eat 
    try {
        const foundPeople = await Person.findAll()
        res.status(200).json(foundPeople)
    } catch (err){
        res.status(500).send('Server error getting people')
        console.log(err)
    }
})



//get individual foodie
people.get('/foodie/:id', async (req,res) => {
    const data = req.params.id
    const id = data.match(/\d+/)[0] 
    const where = {
            user_id: {
                [Op.iLike] : id
                }
                
            }
    try {
        const foundPerson = await Person.findOne({
            where: {
                user_id: id
            }
        });
        res.status(200).json(foundPerson)
        
    }  catch(e) {
        res.status(500).json(e)
    } 
})



//post new Foodie
people.post('/', async(req,res) => {
    console.log(req.body.name)
    console.log(req.body.protein)
    
    const newPerson = await Person.create(req.body)
    
    res.redirect('http://localhost:3000/')
    
})


//DELETE A Foodie
people.delete('/:id', async(req,res) => {
    const {id} = req.params
    // console.log(req.params)
    // console.log('hi')
   
    try{
        const deletePerson= await Person.destroy({
            where: {
                user_id: id
            }
        });
         res.redirect('http://localhost:3000/')
        // res.status(200).json({
        //     message: `Successfully deleted recipe id ${id}`,})
    } catch(error) {
        res.status(500).json(error)
    }

    
})

//UPDATE A RECIPE
people.put('/foodie/:id', async(req,res) => {
    const {id} = req.params
    try{
        const updatedPerson= await Person.update(req.body, {
            where: {
                user_id: id
            }
        });
        res.redirect('http://localhost:3000/')
    } catch(error) {
        res.status(500).json(error)
    }
})


module.exports = people