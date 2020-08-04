import React from 'react'

class BadgeForm extends React.Component {
    handleChange = (e) => {
        console.log({ value: e.target.value, name: e.target.name, id: e.target.id})
    }
    handleClick = (e) => {
        console.log('')
    }
    render() {
        return (
            <div>
                <h1>New one</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor="">First Name</label>
                        <input onChange={this.handleChange} className="form-control" id="firstNameInput" type="text" name="firstName"></input>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeForm