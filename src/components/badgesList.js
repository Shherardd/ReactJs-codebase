import React from 'react'
import { Link } from 'react-router-dom'
import './styles/badgesList.css'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
    render(){
       if (this.props.badges.length === 0) {
          return(
             <div>
                <h3>No badges were found :()</h3>
                <Link to="/badges/new" className="btn btn-primary"> create a new Badge</Link>
             </div>
          )
       }
       return (
          <ul className="list-unstyled BadgesList">
             {this.props.badges.map((badge)=>{
                return(
                   <li key={badge.id} className="BadgesListItem">
                      <Gravatar email={badge.email} />
                   <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                        <div>
                           <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                           <div className="Twitter__name">
                              <span className="Twitter__logo"></span>@{badge.twitter}
                           </div>
                           <div>{badge.jobTitle}</div>
                        </div>
                   </Link>
                   </li>
                   
                )
             })}
          </ul>
       )
    }
 }

export default BadgesList 