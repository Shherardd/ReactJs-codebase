import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to='/'>
                    <img src={logo} className="Navbar__logo Navbar_brand-logo" alt='logo'/>
                    <span className='font-weight-light'>Bagdes </span>
                    <span className='font-weight-bold'>Gen</span>
                </Link>
            </div>
        </div>
    }
}

export default Navbar