import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProductsThunk } from '../store/products'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProducts()
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
  getProducts() {
    dispatch(fetchAllProductsThunk())
  }
})

export default connect(mapState, mapDispatch)(ProductList)
