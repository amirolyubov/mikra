import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { StartScreen, News, GrantsUpcoming, Archive } from '../components'

class App extends Component {
  renderGrant(grant, key) {
    return (
      <div className='block grant' key={key}>
        <h3>{grant.title || 'Title'}</h3>
        <div className='text'>{grant.description || 'Body'}</div>
      </div>
    )
  }
  render() {
    const { main: {grants} } = this.props
    return (
      <div className={'main_container'}>
        <h1>fund</h1>
        <div className='content'>
          <div className='col_2'></div>
          <div className='col_4 fix_width'>
            <h2>Grants</h2>
            {
              grants.map((grant, key) => this.renderGrant(grant, key))
            }
          </div>
          <div className='col_1'></div>
          <div className='col_4'>
            <div>
              <h2>Archive</h2>
              <div className='block'>
                bdgbdbsrbrsgsrgsrbsr <br />
                bsrbrsb <br />
                sebse <br />
                bes <br />
                bseb <br />
                seb <br />
                sebseb <br />
                es <br />
                bdgbdbsrbrsgsrgsrbsr <br />
                bsrbrsb <br />
                sebse <br />
                bes <br />
                bseb <br />
                seb <br />
                sebseb <br />
                es <br />
                bdgbdbsrbrsgsrgsrbsr <br />
                bsrbrsb <br />
                sebse <br />
                bes <br />
                bseb <br />
                seb <br />
                sebseb <br />
                es <br />
              </div>
            </div>
            <div>
              <h2>Contacts</h2>
              <div className='block'>
                bdgbdbsrbrsgsrgsrbsr <br />
                bsrbrsb <br />
                sebse <br />
                bes <br />
                bseb <br />
                seb <br />
                sebseb <br />
                es <br />
                bdgbdbsrbrsgsrgsrbsr <br />
                bsrbrsb <br />
                sebse <br />
                bes <br />
                bseb <br />
                seb <br />
                sebseb <br />
                es <br />
              </div>
            </div>
          </div>
          <div className='col_2'></div>
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
