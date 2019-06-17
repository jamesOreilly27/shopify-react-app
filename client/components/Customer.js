import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlexRowContainer, FlexColumnContainer } from './styled-components/BaseComponents'
import { fetchCustomerThunk, fetchCustomerOrdersThunk } from '../store/customer'

class Customer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCustomer(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getCustomer(id) {
    dispatch(fetchCustomerThunk(id))
    dispatch(fetchCustomerOrdersThunk(id))
  }
})

export default connect(mapState, mapDispatch)(Customer)
