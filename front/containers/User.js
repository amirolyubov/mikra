import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class User extends Component {
  render() {
    const { user } = this.props
    return <div>User</div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(User))
