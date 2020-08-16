import React from 'react'
import Badge from '../components/badge'
import BadgeForm from "../components/BadgeForm";
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'
import header from '../images/logo.png'

class BadgeNew extends React.Component {
    state = {form: {
        firstName: 'Gerard',
        lastName: 'Jonas',
        email: 'Gerardwjones@gmail.com',
        jobTitle: 'FullStack Dev',
        twitter: 'SherardJonas'
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
                            <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} email={this.state.form.email} avatar="https://www.gravatar.com/avatar?d=identicon"></Badge>
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