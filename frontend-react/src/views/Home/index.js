import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate()

    const getData = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/')
            setData(data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getData()
    },[])
  return (
    <div>
        <h1>Cars</h1>
        <button onClick={() => navigate('/new')}>new car</button>
    {data.length > 0 && (

        <table style={{width: '100%'}}>
  
  <thead>
    <tr>
      {Object.keys(data[0]).map(e => <th >{e}</th>)}
    </tr>
  </thead>
  <tbody>
    {data.map(e => <tr style={{cursor: 'pointer'}} onClick={() => {navigate('/'+e._id)}}>
        {Object.keys(e).map(key => <td>  {e[key]} </td>)}
      
    </tr>)}
   
  </tbody>
  
</table>
)}

    </div>
  )
}

export default Home