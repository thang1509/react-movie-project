import {userService} from '../../Services'
import { FETCH_CREDENTIALS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './type';

// export function login(user){
//     return (dispatch)=>{
//         userService.signIn(user).then((res)=>{
//             console.log(res);
//             dispatch({type:FETCH_CREDENTIALS,payload:res.data})
//             localStorage.setItem('credentials',JSON.stringify(res.data))
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }
// }

export function login(values){
    return async (dispatch)=>{
        dispatch({type:LOGIN_REQUEST});
        try{
            const {data} = await userService.signIn(values);

            // Luu thong tin user xuong localStorage de giu trang thai dang nhap khi user tat trang web
            localStorage.setItem("credentials",JSON.stringify(data));


            dispatch({
                type:LOGIN_SUCCESS,
                payload:{data}});
                console.log(data);
        }catch(error){
            dispatch({
                type:LOGIN_FAILURE,
                payload:{error:error.response.data},
            })
            alert(error.response.data)
        }
    }
}