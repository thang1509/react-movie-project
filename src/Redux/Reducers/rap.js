import { FETCH_CUMRAP_FAILURE, FETCH_CUMRAP_REQUEST, FETCH_CUMRAP_SUCCESS, FETCH_RAPPHIM_FAILURE, FETCH_RAPPHIM_REQUEST, FETCH_RAPPHIM_SUCCESS } from "../Action/type"

const initialState ={
    rapPhim: [],
    isLoading:false,
    cumRap:[],
    
    error:null
}

function rapPhimService(state=initialState,action) {
    switch (action.type) {
        case FETCH_RAPPHIM_REQUEST:{
            return{...state,isLoading:true,error:null}
        }
        case FETCH_RAPPHIM_SUCCESS:{
            return{...state,rapPhim:action.payload.data,isLoading:false,error:null}
        }
        case FETCH_RAPPHIM_FAILURE:{
            return{...state,isLoading:false,error:action.payload.error}
        }
        case FETCH_CUMRAP_REQUEST:{
            return{...state,isLoading:true,error:null}
        }
        case FETCH_CUMRAP_SUCCESS:{
            return{...state,cumRap:action.payload.data,isLoading:false,error:null}
        }
        case FETCH_CUMRAP_FAILURE:{
            return{...state,isLoading:false,error:action.payload.error}
        }
        default:
            return {...state}
    }
}

export default rapPhimService