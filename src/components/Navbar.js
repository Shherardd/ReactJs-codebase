import React from 'react'
import logo from '../images/logo.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return <div className="Navbar">
            <a href = '/'>
                <img src={logo} alt='logo'/>
                <span className='font-weight-light'>Bagdes </span>
                <span className='font-weight-bold'>Gen</span>
            </a>
        </div>
    }
}

export default Navbar