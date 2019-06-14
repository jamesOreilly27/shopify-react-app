import axios from 'axios'

const GOT_ORDERS = "GOT_ORDERS"

const gotOrders = orders => ({
  type: GOT_ORDERS,
  payload: orders
})

export const fetchAllOrdersThunk = () => dispatch => {
  axios.get('/api/orders/all')
  .then(res => dispatch(gotOrders(res.data)))
  .catch(err => dispatch(gotOrders(err)))
}

const reducer = (orders = [], action) => {
  switch(action.type) {
    case GOT_ORDERS:
      return action.payload.orders
    default:
      return orders
  }
}

export default reducer
