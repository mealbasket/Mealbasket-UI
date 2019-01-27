import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: e.target.email.value,
      password: e.target.password.value
    }, () =>
        this.props.signIn(this.state)
    )
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form className="pt-2 col-md-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>{this.props.status}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);