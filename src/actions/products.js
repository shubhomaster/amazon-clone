import axios from 'axios'

export const GET_STORE_PRODUCTS = 'GET_STORE_PRODUCTS';
export const GET_STORE_PRODUCTS_FULFILLED = 'GET_STORE_PRODUCTS_FULFILLED';
export const GET_STORE_PRODUCTS_REJECTED = 'GET_STORE_PRODUCTS_REJECTED';
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT"

export function getStoreProducts() {
    const request = axios.get(`/api/store`);

    return {
        type: GET_STORE_PRODUCTS,
        payload: request
    }
}

export function getOneProduct(id) {
    console.log('get one prod works')

    const request = axios.get(`/api/product/` + id)

    console.log(request)

        return {
            type: GET_ONE_PRODUCT,
            payload: request
        }
            
       
}

