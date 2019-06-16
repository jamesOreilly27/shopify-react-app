import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCollectionThunk, fetchProducts } from '../store/collection'

class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { type, id } = this.props.match.params
    this.props.getCollection(type, id)
    this.props.getProducts(id)
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
  getCollection(type, id) {
    dispatch(fetchCollectionThunk(type, id))
  },
  getProducts(id) {
    dispatch(fetchProducts(id))
  }
})

export default connect(mapState, mapDispatch)(Collection)
