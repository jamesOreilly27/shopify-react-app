import axios from 'axios'

const GOT_CUSTOMER = 'GOT_CUSTOMER'
const GOT_CUSTOMER_ORDERS = 'GOT_CUSTOMER_ORDERS'

const gotCustomer = customer => ({
  type: GOT_CUSTOMER,
  payload: customer
})

const gotCustomerOrders = orders => ({
  type: GOT_CUSTOMER_ORDERS,
  payload: orders
})

export const fetchCustomerThunk = id => dispatch =>
  axios.get(`/api/customers/${id}`)
  .then(res => dispatch(gotCustomer(res.data)))
  .catch(error => dispatch(gotCustomer(error)))

export const fetchCustomerOrdersThunk = customerId => dispatch =>
  axios.get(`/api/customers/${customerId}/orders`)
  .then(res => dispatch(gotCustomerOrders(res.data)))
  .catch(error => dispatch(gotCustomerOrders(error)))


const reducer = (customer = {orders: []}, action) => {
  switch(action.type) {
    case GOT_CUSTOMER:
      return {...action.payload.customer, orders: customer.orders}
    case GOT_CUSTOMER_ORDERS:
      return {...customer, orders: action.payload.orders}
    default:
      return customer
  }
}

export default reducer
