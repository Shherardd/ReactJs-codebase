import React from 'react'
import Header from '../images/header.png'
class Badge extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src={Header} alt="Logotipo y/o encabezado"/>
                </div>
                <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Gerard <br/> Jonas</h1>
                </div>
                <div>
                    <p>Front-End Engineer</p>
                    <p>@SherardJonas</p>
                </div>
                <div>
                    #Shd
                </div>
            </div>
        )
    }
}

export default Badge