import { RequestAction } from '@redux-requests/core'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const fetchProducts = (): RequestAction=>{
    let url = 'https://hesse-core-staging.herokuapp.com/api/products?sort%5B0%5D=sortSuggested,name&populate=mainImage,variants,variants.size,subscriptionType'
    return{
        type:FETCH_PRODUCTS,
        request: {
            url,
            method:'GET',
        }
    }
}
export const productAction = {
    fetchProducts,
}