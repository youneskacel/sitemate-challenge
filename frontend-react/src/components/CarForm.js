import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const CarForm = ({ onSubmit, isUpdating }) => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    color: ''
  });

  const params= useParams()
  const navigate = useNavigate()

  const id = params.id;

  const createCar = async () => {
    try{
        const {data, status} = await axios.post('http://localhost:3000/',car) 

    }catch(e) {

    }
}
  const updateCar = async () => {
    try{
        const {data, status} = await axios.put('http://localhost:3000/'+car._id,car) 

    }catch(e) {

    }
}

const deleteCar = async() => {
    const {data, status} = await axios.delete('http://localhost:3000/'+car._id) 
    navigate('/')
}

const getCar = async () => {
    
    try{
        const {data} = await axios.get('http://localhost:3000/'+id) 
        setCar(data)
    }catch(e) {
    
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if(isUpdating) {
        updateCar()
    }else{

        createCar()
    }
    navigate('/')
    if(!isUpdating){
        setCar({
            make: '',
            model: '',
            year: '',
            color: ''
        });
    }
  };
useEffect(() => {
    if(isUpdating) getCar()
},[])
  return (
    <div>
      <label>
        Make:
        <input
          type="text"
          name="make"
          value={car.make}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={car.year}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={car.color}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Create Car</button>
      <button onClick={deleteCar}>Delete Car</button>
    </div>
  );
};

export default CarForm;
