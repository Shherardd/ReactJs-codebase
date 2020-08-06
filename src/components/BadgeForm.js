import React from 'react'

class BadgeForm extends React.Component {
    /*handleChange = (e) => {
        //console.log({ value: e.target.value, name: e.target.name, id: e.target.id})

        this.setState({
            [e.target.name] : e.target.value
        })
    }*/
    handleClick = (e) => {
        console.log(this.props.formValues)
    }
    render() {
        return (
            <div>
                <h1>New one</h1>
                <form>
                    <div className='form-group'>
                        <label >First Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.firstName} className="form-control" id="firstNameInput" type="text" name="firstName"></input>
                    </div>
                    <div className='form-group'>
                        <label >Last Name</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.lastName} className="form-control" id="lastNameInput" type="text" name="lastName"></input>
                    </div>
                    <div className='form-group'>
                        <label >Email</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.email} className="form-control" id="emailInput" type="email" name="email"></input>
                    </div>
                    <div className='form-group'>
                        <label >Job Title</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.jobTitle} className="form-control" id="jobTitleInput" type="text" name="jobTitle"></input>
                    </div>
                    <div className='form-group'>
                        <label >Twitter</label>
                        <input onChange={this.props.onChange} value={this.props.formValues.twitter} className="form-control" id="twitterInput" type="text" name="twitter"></input>
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