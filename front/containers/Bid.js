import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Bid extends Component {
  render() {
    const { bid, match } = this.props
    return (
      <div>
        bid
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bid: state.bid
  }
}

export default withRouter(connect(mapStateToProps)(Bid))
