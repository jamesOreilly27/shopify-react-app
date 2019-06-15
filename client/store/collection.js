import axios from 'axios'

const GOT_COLLECTION = 'GOT_COLLECTION'

const gotCollection = collection => ({
  type: GOT_COLLECTION,
  payload: collection
})

const fetchCollectionThunk = (id, type) => dispatch =>
  axios.get(`/api/collections/${type}/${id}`)
  .then(res => dispatch(gotCollection(res.data)))
  .catch(err => dispatch(gotCollection(err)))

const reducer = (collection = { products: []}, action) => {
  switch(action.type) {
    case GOT_COLLECTION:
      return action.payload
    default:
      return collection
  }
}

export default reducer
