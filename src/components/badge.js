import React from 'react'
import './styles/Badge.css'
import Header from '../images/header.png'
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={Header} alt="Logotipo y/o encabezado"/>
                </div>
                <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Gerard <br/> Jonas</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Front-End Engineer</h3>
                    <div>@SherardJonas</div>
                </div>
                <div className="Badge__footer">
                    #Shd
                </div>
            </div>
        )
    }
}

export default Badge