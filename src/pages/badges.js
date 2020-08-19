import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import './styles/Badges.css'
import logo from '../images/logo.png'
import Badge from '../components/badge'
import BadgesList from '../components/badgesList'

class Badges extends React.Component {
    
    constructor (props) {
        //constructor ocurre primero
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount() {
        // component did mount ocurre en tercer lugar
        this.fetchData()
        /*this.timeoutId = setTimeout(() => {
            this.setState({
                loading: true,
                error: null,
                data: undefined
            })a
        }, 3000)*/
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
            data: undefined
        })



        try {
            const data = await api.badges.list()
            this.setState({loading: false, data})
        } catch (error) {
            this.setState({loading: false, error})
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId)
    }
    render() {
        //render ocurre segundo
        if(this.state.loading === true) {
            return 'Loading...'
        }
        if (this.state.error) {
            return `Ha habido un error: ${this.state.error.message}`
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={logo} alt="logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    {this.state.data.length > 0 &&
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    }
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Badges