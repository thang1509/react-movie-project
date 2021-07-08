import { FETCH_CREDENTIALS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Action/type"

const credentials = localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")):null;


const initialState={
    credentials,
    isLoading: false,
    error: null,

}
function UserReducer(state=initialState,action){
    switch (action.type) {
        case LOGIN_REQUEST:{
            return{...state,isLoading:true, error:null}
        }
        case LOGIN_SUCCESS:{
            return {...state,isLoading:false,credentials:action.payload.data};
        }
        case LOGIN_FAILURE:{
            return {...state,isLoading:false,error:action.payload.error}
        }
        default:
            return state;
    }
}

export default UserReducer