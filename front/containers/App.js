import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { StartScreen, News } from '../components'

class App extends Component {
  render() {
    const { main } = this.props
    return (
      <div>
        <StartScreen />
        <News news={main.news}/>
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
