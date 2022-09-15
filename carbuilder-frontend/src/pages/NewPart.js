import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
    }
`

const NewPart = ({ addPart }) => { 
    const initialState = {
      part:'',
      cost: '',
      warranty:'',
     
    }
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:8000/part', formData )
        .then(res =>  {
            setFormData(initialState)
            addPart(res.data)
            navigate('/parts', { replace: true })
        })

    }


  return (
    <StyledForm onSubmit={handleSubmit}>
      
        <h1> Add new Part</h1>
            <div>
                <label htmlFor='part'>Part</label>
                <input id='part' name='part' type='text' onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor='cost'>Cost</label>
                <input id='cost' name='cost' type='text'   onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='warranty'>warranty</label>
                <input id='warranty' name='warranty' type='text'     onChange={handleChange} />
            </div>
            
            
            <input type='submit' value='Create Item' /> 
          
           
    </StyledForm>
  )// add onClick to create item
}

export default NewPart