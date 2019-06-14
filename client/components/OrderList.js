import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllOrdersThunk } from '../store/orders'
import { FlexColumnContainer } from './styled-components/BaseComponents'
import { OrderCard } from '../components'

class OrderList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    return (
      <FlexColumnContainer>
        {this.props.orders.map(order => {
          return <OrderCard key={order.id} order={order} />
        })}
      </FlexColumnContainer>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getOrders() {
    dispatch(fetchAllOrdersThunk())
  }
})

export default connect(mapState, mapDispatch)(OrderList)
