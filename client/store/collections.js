import axios from 'axios'

const GOT_COLLECTIONS = 'GOT_COLLECTIONS'

const gotCollection = collections => ({
  type: GOT_COLLECTIONS,
  payload: collections
})

export const fetchCollectionThunk = () => dispatch =>
  axios.get(`/api/collections/all`)
  .then(res => dispatch(gotCollection(res.data)))
  .catch(err => dispatch(gotCollection(err)))

const reducer = (collections = [], action) => {
  switch(action.type) {
    case GOT_COLLECTIONS:
      return action.payload
    default:
      return collections
  }
}

export default reducer
