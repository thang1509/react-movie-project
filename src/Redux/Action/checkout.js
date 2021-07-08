import checkoutService from "../../Services/checkout"
import { FETCH_CHECKOUT_FAILURE, FETCH_CHECKOUT_RESPONSE, FETCH_CHECKOUT_SUCCESS } from "./type"


export function fetchCheckout(value){
    return async (dispatch)=>{
        dispatch({type:FETCH_CHECKOUT_RESPONSE})
        try{
            const {data} = await checkoutService.danhSachVe(value)
            dispatch({type:FETCH_CHECKOUT_SUCCESS,payload:{data}})
           
        }catch(error){
            dispatch({type:FETCH_CHECKOUT_FAILURE,payload:{error:error.reposne.data}})
        }
    }
}