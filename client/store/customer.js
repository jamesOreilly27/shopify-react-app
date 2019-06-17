import axios from 'axios'

const GOT_CUSTOMER = 'GOT_CUSTOMER'

const gotCustomer = customer => ({
  type: GOT_CUSTOMER,
  payload: customer
})

export const fetchCustomerThunk = id => dispatch =>
  axios.get(`/api/customers/${id}`)
  .then(res => dispatch(gotCustomer(res.data)))
  .catch(error => dispatch(gotCustomer(error)))

const reducer = (customer = {}, action) => {
  switch(action.type) {
    case GOT_CUSTOMER:
      return action.payload.customer
    default:
      return customer
  }
}

export default reducer
