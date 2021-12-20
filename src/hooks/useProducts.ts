import { actions } from '../redux'
import { useDispatchRequest } from '@redux-requests/react'
import { useEffect } from 'react'
import { FETCH_PRODUCTS } from '../redux/requests/modules/product'
import useConnectRequest from './useConnectRequest'

export const DEFAULT_SORT_PARAMS = ['createdAt:desc', 'sortSuggested']

const useProducts = () => {

  const products = useConnectRequest(FETCH_PRODUCTS, { defaultData: [] })

  const dispatchRequest = useDispatchRequest()

  useEffect(() => {
    dispatchRequest(actions.requests.product.fetchProducts())
  }, [])

  return products.data.data
  
}

export default useProducts
