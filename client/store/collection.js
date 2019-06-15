import axios from 'axios'

const GOT_COLLECTION = 'GOT_COLLECTION'

const gotCollection = collection => ({
  type: GOT_COLLECTION,
  payload: collection
})

export const fetchCollectionThunk = (type, id) => dispatch =>
  axios.get(`/api/collections/${type}/${id}`)
  .then(res => dispatch(gotCollection(res.data[`${type}_collection`])))
  .catch(err => dispatch(gotCollection(err)))

const reducer = (collection = { products: []}, action) => {
  switch(action.type) {
    case GOT_COLLECTION:
      return {...action.payload, products: []}
    default:
      return collection
  }
}

export default reducer
