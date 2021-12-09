import { createDriver } from '@redux-requests/axios'
import { handleRequests } from '@redux-requests/core'
import { AxiosError } from 'axios'
import axios from '../axios'
import { FETCH_USER } from './modules/user'
import { User } from './types'

export type RequestsStateQueries = {
  [FETCH_USER]: RequestQuery<User>
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
