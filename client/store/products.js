import axios from 'axios'

const GOT_PRODUCTS = 'GOT_PRODUCTS'

const gotProducts = products => ({
  type: GOT_PRODUCTS,
  payload: products
})

const fetchAllProductsThunk = products => dispatch => (
  axios.get(`/api/products/all`)
  .then(res => dispatch(gorProducts(res.data)))
  .catch(error => dispatch(gotResult(err.message)))
)

const reducer = (products = [], action) => {
  switch(action.type) {
    case GOT_PRODUCTS:
      return action.payload
    default:
      return products
  }
}

export default reducer
