import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProductsThunk } from '../store/products'
import { FlexColumnContainer } from './styled-components/BaseComponents'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <FlexColumnContainer>
        {this.props.products && this.props.products.map(product => {
          return <div key={product.id}>{product.title}</div>
        })}
      </FlexColumnContainer>
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
