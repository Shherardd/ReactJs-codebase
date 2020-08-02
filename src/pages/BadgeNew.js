import React from 'react'
import Badge from '../components/badge'
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'
import header from '../images/logo.png'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img src={header} className="img-fluid" alt="logo"/>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew