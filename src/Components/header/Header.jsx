import React from 'react'
import './Header.css'

const Header = ({title}) => {
  return (
    <div>
         <h1 className="PageHeader page-header">{title}</h1>
    </div>
  )
}

export default Header