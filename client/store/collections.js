import axios from 'axios'
import Axios from 'axios';

const GOT_COLLECTIONS = 'GOT_COLLECTIONS'

const gotCollections = collections => ({
  type: GOT_COLLECTIONS,
  payload: collections
})

//Collections are stored in two separate endpoints on the shopify api.
//FetchCollectionsThunk gets all from both end points and concats them into a single array

export const fetchCollectionsThunk = () => dispatch => {
  let placeholder = {}
  axios.get(`/api/collections/custom/all`)
  .then(res => res.data.custom_collections)
  .then(test => {
    placeholder = test
    return axios.get('/api/collections/smart/all')
  })
  .then(res => dispatch(gotCollections(placeholder.concat(res.data.smart_collections))))
  .catch(err => dispatch(gotCollections(err)))
}

const reducer = (collections = [], action) => {
  switch(action.type) {
    case GOT_COLLECTIONS:
      return action.payload
    default:
      return collections
  }
}

export default reducer
