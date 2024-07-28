import React from 'react'
import Navbar from '../navbar/Navbar'
import "./MainHeader.css"
import { Container } from '@mui/material'
import MyMenu from '../Menu/MyMenu'

const MainHeader = () => {
  return (
    <div>
        <Container maxWidth={"md"} >
            <div className='Header'>
            <Navbar />
            <MyMenu />

            </div>
        </Container>
    </div>
  )
}

export default MainHeader