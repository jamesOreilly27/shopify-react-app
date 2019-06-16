import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
          let type = ''
          collection.rules ? type = "smart" : type = "custom"
           return <Link key={collection.id} to={`/collections/${type}/${collection.id}`}> {collection.handle} </Link>
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
