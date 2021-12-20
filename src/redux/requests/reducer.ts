import { createDriver } from '@redux-requests/axios'
import { handleRequests } from '@redux-requests/core'
import { AxiosError } from 'axios'
import axios from '../axios'
import { FETCH_USER } from './modules/user'
import {FETCH_PRODUCTS} from './modules/product'
import { User,Products } from './types'

export type RequestsStateQueries = {
  [FETCH_USER]: RequestQuery<User>,
  [FETCH_PRODUCTS]: RequestQuery<Products>
}

export type RequestQuery<T> = {
  data: T
  loading: boolean
  error: AxiosError
  pristine: boolean
}

export type RequestsState = {
  queries: RequestsStateQueries
  mutations: {}
  cache: {}
  requestsKeys: {}
  normalizedData: {}
}

export const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios),
})
