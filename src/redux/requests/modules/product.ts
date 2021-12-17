import { RequestAction } from '@redux-requests/core'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const fetchProducts = ()=>({
    type:FETCH_PRODUCTS,
    request: {
        url: '/products',
        method: 'GET',
      },
})

export const productAction = {
    fetchProducts
}