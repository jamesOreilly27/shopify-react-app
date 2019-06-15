import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCollectionsThunk } from '../store/collections'
import { FlexColumnContainer } from './styled-components/BaseComponents'

class CollectionList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCollections()
  }

  render() {
    return (
      <FlexColumnContainer>
        {this.props.collections && this.props.collections.map(collection => {
          return <div> {collection.handle} </div>
        })}
      </FlexColumnContainer>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getCollections() {
    dispatch(fetchCollectionsThunk())
  }
})

export default connect(mapState, mapDispatch)(CollectionList)
