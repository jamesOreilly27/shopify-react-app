import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProductsThunk } from '../store/products'
import { FlexColumnContainer } from './styled-components/BaseComponents'
import { ProductCard } from '../components'

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
          return <ProductCard key={product.id} product={product} />
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
