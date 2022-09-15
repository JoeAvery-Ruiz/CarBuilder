import React from 'react'


const Parts = ({parts}) => {


  return (
    <div>
       { parts.map(Part=>{
       return(
         <div>
        <h1>{Part.part} </h1>
          <p>{Part.cost}</p>
          <p>{Part.warranty}</p>
          
        </div>
       )
     })}
    </div>
  )
}

export default Parts