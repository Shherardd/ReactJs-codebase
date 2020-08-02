import React from 'react'
import logo from '../images/logo.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return <div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href = '/'>
                    <img src={logo} className="Navbar__logo Navbar_brand-logo" alt='logo'/>
                    <span className='font-weight-light'>Bagdes </span>
                    <span className='font-weight-bold'>Gen</span>
                </a>
            </div>
        </div>
    }
}

export default Navbar