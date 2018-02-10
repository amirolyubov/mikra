import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Grant extends Component {
  render() {
    const { grant, match } = this.props
    return match.isExact && match.params.grantId != 'profile' && <div>Grant</div>
  }
}

const mapStateToProps = state => {
  return {
    grant: state.grant
  }
}

export default withRouter(connect(mapStateToProps)(Grant))
