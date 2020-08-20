import React from 'react'
import shdLogo from '../images/logo.png'
import './styles/BadgeDetails.css'
import api from '../api'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, data})
        } catch (error) {
            this.setState({loading:false, error})
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading></PageLoading>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        const badge = this.state.data
        return(
        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <img className="Badge__logo-img" src={shdLogo} alt="shd Logo"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h2> {badge.firstName} {badge.lastName}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
        )}
} 

export default BadgeDetails