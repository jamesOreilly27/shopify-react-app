import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { fetchAllOrdersThunk } from './store/orders'
import history from './history'
import { Main, OrderList } from './components'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/orders/all" component={OrderList} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  loadData() {
    dispatch(fetchAllOrdersThunk())
  }
})

export default connect(mapState, mapDispatch)(Routes)
