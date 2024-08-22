import React from 'react'
import { useNavigate } from 'react-router-dom'  

const HomePage = () => {
const navigate = useNavigate(); 
navigate('/login');
 
  return (
    <div>  
      <h1>i am home page</h1>
    </div>
  )
}

export default HomePage
