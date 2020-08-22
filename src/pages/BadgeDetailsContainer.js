import React from 'react'

import api from '../api'


import BadgeDetails from './BadgeDetails'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'


class BadgeDetailsContainer extends React.Component {
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
            <div>
            <BadgeDetails 
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                id={badge.id}
            ></BadgeDetails>
            </div>
        )}
} 

export default BadgeDetailsContainer