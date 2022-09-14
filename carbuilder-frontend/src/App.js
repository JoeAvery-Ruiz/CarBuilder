import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from'react-router-dom'
import Home from './pages/Home';
import NewCar from './pages/Newcar';
import About from './pages/About';
import Navbar from './components/Navbar';
import Signup from './components/Signup/Signup';
import Auth from './pages/AuthPage/Auth';

function App() {
  const [cars, setCars] = useState([]) 
  const [user, setUser] = useState()
  
  useEffect(()=>{
    fetch('http://localhost:8000/car/')
    .then(res => res.json())
    .then(cars => setCars(cars))
  }, [])
  
  
  console.log(cars)
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home cars={cars}/>}/>
        <Route path = '/NewCar' element={<NewCar/>}/>
        <Route path ='/About' element={<About/>} />
        <Route path='/signup' element={<Auth setUser={setUser} page="signup"/>}/>
      </Routes>
     </div>
  );
}

export default App;
