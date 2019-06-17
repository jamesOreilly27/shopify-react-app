import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import products from './products'
import customers from './customers'
import orders from './orders'
import collection from './collection'
import collections from './collections'
import customer from './customer'

const reducer = combineReducers({ products, customers, orders, collection, collections, customer })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store
