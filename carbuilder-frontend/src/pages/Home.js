import React from 'react'
import Cars from '../components/car/Cars'






const Home = ({cars}) => {
  return (
    <div>
    
     <Cars cars={cars}/>
    </div>
  )
}

export default Home