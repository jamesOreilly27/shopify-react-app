import axios from 'axios'

const GOT_CUSTOMERS = 'GOT_CUSTOMERS'

const gotCustomers = customers => ({
  type: GOT_CUSTOMERS,
  payload: customers
})

export const fetchAllCustomersThunk = () => dispatch =>
  axios.get('/api/customers/all')
  .then(res => dispatch(gotCustomers(res.data)))
  .catch(error => dispatch(gotCustomers(error)))

const reducer = (customers = [], action) => {
  switch(action.type) {
    case GOT_CUSTOMERS:
      return action.payload
    default:
      return customers
  }
}

export default reducer
