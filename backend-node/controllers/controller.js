const data = require('../data.json')
const Car = require('../models/car')

exports.getAll = async (req,res) => {
    try {
        const query = req.query;
        if(query.year) query.year = parseInt(query.year)
        console.log(query)
        const cars = await Car.find(query).exec()
    
        res.status(200).send(cars)
        
    } catch (error) {
        res.status(500).send()
    }
}

exports.getSingle = async (req,res) => {
    try {
        const id = req.params.id;
        
        const singleCar = await Car.findById(id)
        if(singleCar) return res.status(200).json(singleCar)
            else throw new Error('Car not found')
        } catch (error) {
            
            res.status(500).send()
    }
}

exports.create = async (req,res) => {
    try {
        const body = req.body;
        const car = new Car(body)

        await car.save()
        
        res.status(201).json(car).send()
        } catch (error) {
            
            res.status(500).send()
    }
}

exports.update = async (req,res) => {
    try {
        const body = req.body;
        const id = req.params.id;

        const newCar = await Car.findByIdAndUpdate(id, body, {new: true})
       
        res.status(201).json(newCar).send()
        } catch (error) {
                console.log(error)
            res.status(500).send()
    }
}

exports.delete = async (req,res) => {
    try {
        const id = req.params.id
        await Car.findByIdAndDelete(id)
        res.send(`${id}`)
    
        } catch (error) {
            
            res.status(500).send()
    }
}