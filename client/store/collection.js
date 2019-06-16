import axios from 'axios'

const GOT_COLLECTION = 'GOT_COLLECTION'
const GOT_MY_PRODUCTS = 'GOT_MY_PRODUCTS'

const gotCollection = collection => ({
  type: GOT_COLLECTION,
  payload: collection
})

const gotProducts = products => ({
  type: GOT_MY_PRODUCTS,
  payload: products
})

export const fetchCollectionThunk = (type, id) => dispatch =>
  axios.get(`/api/collections/${type}/${id}`)
  .then(res => dispatch(gotCollection(res.data[`${type}_collection`])))
  .catch(err => dispatch(gotCollection(err)))

export const fetchProducts = id => dispatch => {
  axios.get(`/api/collections/products/${id}`)
  .then(res => dispatch(gotProducts(res.data)))
  .catch(err => dispatch(gotProducts(err)))
}

const reducer = (collection = { products: []}, action) => {
  switch(action.type) {
    case GOT_COLLECTION:
      return {...action.payload, products: collection.products}
    case GOT_MY_PRODUCTS:
      return {...collection, products: action.payload}
    default:
      return collection
  }
}

export default reducer
