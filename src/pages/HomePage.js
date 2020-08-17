import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render(){
        return(<React.Fragment>
            <h1>Home Page</h1>
            <Link to="/badges">Badges</Link>
            <Link to="/badges/new">New Badge</Link>
            </React.Fragment>
        )
    }
} 

export default HomePage