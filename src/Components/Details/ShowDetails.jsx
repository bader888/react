import { Container } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ShowDetails = ({Data,title}) => {
    const [data,setData] = useState({});
    console.log(Data.keys()); 
  return (
    <div>
        <section>
            <h2>{title??"un known"}</h2>
        </section>
        <section>

        </section>
      
    </div>
  )
}

export default ShowDetails
