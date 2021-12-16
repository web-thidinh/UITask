import { RequestAction } from '@redux-requests/core'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const fetchProduct = (data)=>({
    type:FETCH_PRODUCTS,
    request: {
        url: '/user',
        method: 'POST',
        data,
      },
})

export {
    fetchProduct
}