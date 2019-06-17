import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { fetchAllOrdersThunk } from '../store/orders'
import history from '../history'
import { FlexRowContainer, FlexColumnContainer } from './styled-components/BaseComponents'
import { OrderList, ProductList, CustomerList, Navbar, CollectionList, Collection, Customer } from '../components'

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    if(!this.props.orders[0]) this.props.loadData()
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/orders/all" component={OrderList} />
            <Route exact path="/customers/all" component={CustomerList} />
            <Route exact path="/customers/:id" component={Customer} />
            <Route exact path="/collections/:type/:id" component={Collection} />
            <Route exact path="/collections/all" component={CollectionList} />
          </Switch>
        </div>
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

export default connect(mapState, mapDispatch)(Main)
