import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { StartScreen, News, GrantsUpcoming, Archive } from '../components'

class App extends Component {
  render() {
    const { main } = this.props
    return (
      <div className={'main_container'}>
        <StartScreen />
        <div className={'app_grants_grid'}>
          <GrantsUpcoming grants={main.grants.filter(grant => grant.status == 'NEW' || grant.status == 'BIDS_START')}/>
          <Archive archive={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
          <Archive archive={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    main: state.main
  }
}

export default withRouter(connect(mapStateToProps)(App))
