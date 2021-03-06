import React from 'react'
import './styles/Badge.css'
import Header from '../images/header.png'
import Gravatar from './Gravatar'
class Badge extends React.Component {
    render() {

        const { firstName, lastName, jobTitle, twitter, email } = this.props

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={Header} alt="Logotipo y/o encabezado"/>
                </div>
                <div className="Badge__section-name">
                <Gravatar email={email} />
                    <h1>{firstName}<br/> {lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </div>
                <div className="Badge__footer">
                    #Shd
                </div>
            </div>
        )
    }
}

export default Badge