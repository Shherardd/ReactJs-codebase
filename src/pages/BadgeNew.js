import React from 'react'
import Badge from '../components/badge'
import BadgeForm from "../components/BadgeForm"
import './styles/BadgeNew.css'
import header from '../images/logo.png'
import api from '../api'
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({loading: true, error:null})
        try {
            await api.badges.create(this.state.form)
            this.setState({loading:false})
            //this.props.history.push('/badges')
            // dentro de props -> Match, history, location
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading:false, error})
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        if (this.state.loading) {
            return(
                <PageLoading/>
            )
        }
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
                        <h1>New one</h1>
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew