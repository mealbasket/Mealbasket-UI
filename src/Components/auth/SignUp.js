import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form className="pt-2 col-md-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div >
    )
  }
}