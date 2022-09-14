import React from 'react'
import './Cars.css' 

const Cars = ({cars}) => {


  return (
    <div>
       { cars.map(car=>{
       return(
         <div>
        <h1>{car.model} </h1>
          <p>{car.make}</p>
          <p>{car.year}</p>
          <img src={car.image} alt={car.name}/>
        </div>
       )
     })}
    </div>
  )
}

export default Cars