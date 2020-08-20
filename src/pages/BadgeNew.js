import React from 'react'
import Badge from '../components/badge'
import BadgeForm from "../components/BadgeForm";
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'
import header from '../images/logo.png'

class BadgeNew extends React.Component {
    state = {form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }}

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img src={header} className="img-fluid Navbar__logo-hero" alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName || 'Gerard'} 
                            lastName={this.state.form.lastName || 'Jonas'} 
                            twitter={this.state.form.twitter || 'SherardJonas'} 
                            jobTitle={this.state.form.jobTitle || 'FullStack Dev'} 
                            email={this.state.form.email || 'Gerardwjones@gmail.com'} 
                            avatar="https://www.gravatar.com/avatar?d=identicon"></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew