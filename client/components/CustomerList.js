import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomersThunk } from '../store/customers'
import { FlexColumnContainer } from './styled-components/BaseComponents'

class CustomerList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCustomers()
  }

  render() {
    return (
      <div>
        Hello World!!
      </div>
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
