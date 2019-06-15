import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { Main } from './components'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={history}>
        <Main />
      </Router>
    )
  }
}

export default Routes
