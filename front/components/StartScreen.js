import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export default class StartScreen extends Component {
  render() {
    return (
      <div className={'start'}>
        <div className={'header'} onClick={this.handleHeaderClick}>
          <span className={'mikra'}>MIKRA</span> <br />
          <span className={'fund'}>фонд поддержки арт-проектов</span>
        </div>
        <div className={'header_fake'}>
          <span className={'mikra'}>MIKRA</span> <br />
          <span className={'fund'}>фонд поддержки арт-проектов</span>
        </div>
      </div>
    )
  }
}
