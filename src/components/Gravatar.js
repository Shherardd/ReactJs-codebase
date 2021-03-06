import React from 'react'
import md5 from 'md5'

function Gravatar (props) {
    const hash = md5(props.email)
    return (
        <img className="Badge__avatar" src ={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/>
    )
}

export default Gravatar