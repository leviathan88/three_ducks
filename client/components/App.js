import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as userActions from '../actions/userActions'

class App extends Component {
  componentWillMount() {
    setTimeout(()=> {
      this.props.changeName()
    }, 3000)
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <h1>Hello from Redux</h1>
        <p>my name is {name}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, userActions)(App)

function mapStateToProps(state) {
  return {
    name: state.user.name,
    married: state.user.married
  }
}
