import React from 'react'
import {Link} from 'react-router-dom'
import shdLogo from '../images/logo.png'
import './styles/BadgeDetails.css'
import Badge from '../components/badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function BadgeDetails (props) {
    
    return(
        <React.Fragment>
        <div className="BadgeDetails__hero">
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        <img className="Badge__logo-img" src={shdLogo} alt="shd Logo"/>
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                        <h2> {props.firstName} {props.lastName}</h2>
                    </div>
                </div>

            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                <Badge 
                        firstName={props.firstName || 'Gerard'} 
                        lastName={props.lastName || 'Jonas'} 
                        twitter={props.twitter || 'SherardJonas'} 
                        jobTitle={props.jobTitle || 'FullStack Dev'} 
                        email={props.email || 'Gerardwjones@gmail.com'} 
                        ></Badge>
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <div>
                            <Link to={`/badges/${props.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                            <DeleteBadgeModal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} onDeleteBadge={props.onDeleteBadge}> Lorem Ipsum</DeleteBadgeModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default BadgeDetails