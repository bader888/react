import React from 'react'
import { useNavigate } from 'react-router-dom' 
import MainHeader from '../../Components/MainHeader/MainHeader';

const HomePage = () => {
const navigate = useNavigate(); 
navigate('/login');
 
  return (
    <div> 
      <MainHeader /> 
      <h1>i am home page</h1>
    </div>
  )
}

export default HomePage
