const data = require('../data.json')

exports.getAll = async (req,res) => {
    try {
        const query = req.query;
    
        const returnData = data.filter(entry => Object.keys(query).every(key => entry[key] == query[key]))
        console.log(returnData)
        res.status(200).send(returnData)
        
    } catch (error) {
        res.status(500).send()
    }
}

exports.getSingle = async (req,res) => {
    try {
        const id = req.params.id;
        
        const car = data.find(entry => entry.id == id)
        console.log(car)
        if(car) return res.status(200).json(car)
            else throw new Error('Car not found')
        } catch (error) {
            
            res.status(500).send()
    }
}

exports.create = async (req,res) => {
    try {
        const car = req.body;
        
        console.log(car)
        res.status(201).json(car).send()
        } catch (error) {
            
            res.status(500).send()
    }
}

exports.update = async (req,res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const car = data.find(car => car.id == id)
        const newCar = {
            ...car,
            ...body,
        }
        console.log(newCar)
        res.status(201).json(newCar).send()
        } catch (error) {
                console.log(error)
            res.status(500).send()
    }
}

exports.delete = async (req,res) => {
    try {
        const id = req.params.id
        const car = data.find(car => car.id == id)
        if(!!car){
        res.send(`${car.id}`)
        console.log(car.id)
    }
    else throw new Error('Car not found')
        } catch (error) {
            
            res.status(500).send()
    }
}