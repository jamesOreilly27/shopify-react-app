import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomersThunk } from '../store/customers'
import { FlexColumnContainer } from './styled-components/BaseComponents'
import CustomerCard from './CustomerCard'

class CustomerList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCustomers()
  }

  render() {
    return (
      <FlexColumnContainer>
        {this.props.customers && this.props.customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })}
      </FlexColumnContainer>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getCustomers() {
    dispatch(fetchAllCustomersThunk())
  }
})

export default connect(mapState, mapDispatch)(CustomerList)
