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
                    <img src={header} className="img-fluid Navbar__logo-hero" alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Gerard" lastName="Jonas" twitter="SherardJonas" jobTitle="FullStack-Dev" avatar="https://www.gravatar.com/avatar?d=identicon"></Badge>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew