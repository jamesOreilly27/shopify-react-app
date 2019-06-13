import axios from 'axios'

const GOT_PRODUCTS = 'GOT_PRODUCTS'

const gotProducts = products => ({
  type: GOT_PRODUCTS,
  payload: products
})

export const fetchAllProductsThunk = () => dispatch => 
  axios.get(`/api/products/all`)
  .then(res => dispatch(gotProducts(res.data)))
  .catch(error => dispatch(gotProducts(error.message)))

const reducer = (products = [], action) => {
  switch(action.type) {
    case GOT_PRODUCTS:
      return action.payload.products
    default:
      return products
  }
}

export default reducer
