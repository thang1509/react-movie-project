import rapService from "../../Services/rapphim"
import { FETCH_CUMRAP_FAILURE, FETCH_CUMRAP_REQUEST, FETCH_CUMRAP_SUCCESS, FETCH_RAPPHIM_FAILURE, FETCH_RAPPHIM_REQUEST, FETCH_RAPPHIM_SUCCESS } from "./type"

export function fetchRap() {
    return async (dispatch)=>{
        dispatch({type:FETCH_RAPPHIM_REQUEST})
        try{
            const {data} =await rapService.listRapPhim()
            dispatch({type:FETCH_RAPPHIM_SUCCESS,payload:{data}})
        }catch(error){
            dispatch({type:FETCH_RAPPHIM_FAILURE,payload:{error:error.response.data}})
        }
    }
}
export function fetchCumRap(){
    return async (dispatch)=>{
        dispatch({type:FETCH_CUMRAP_REQUEST})
        try{
            const {data}= await rapService.listCumRap1()
            dispatch({type:FETCH_CUMRAP_SUCCESS,payload:{data}})
            // console.log(data);
        }
        catch(error){
            dispatch({type:FETCH_CUMRAP_FAILURE,payload:{error:error.response.data}})
        }
    }
}