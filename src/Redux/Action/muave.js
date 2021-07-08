
import checkoutService from "../../Services/checkout";
import { MUA_VE,MUA_VE_REPOSNE,MUA_VE_FAILURE } from "./type"

export function muaVe(values){
    return async (dispatch)=>{
        dispatch({type:MUA_VE_REPOSNE})
        try{
            const {data} =await checkoutService.muaVe(values)
            dispatch({type:MUA_VE,payload:{data}})
            console.log(data);
            // if(data){
            //     alert("Dat ve thành công!")
            // }
        }catch(err){
            dispatch({
                type:MUA_VE_FAILURE,
                payload:{err:err.reponse},
            })
        }
            
        
        // checkoutService.muaVe(data).then((res)=>{
        //     console.log(data);
        //     dispatch({type:MUA_VE,payload:res.data})
           
        // }).catch((err)=>{
        //     console.log(err.message);
        // })
    }
}
// export function thongTinUser(data){
//     return (dispatch)=>{
//        checkoutService.thongTinUser(data).then((res)=>{
//             console.log(data);
//             dispatch({type:"thongtin",payload:res.data})
           
//         }).catch((err)=>{
//             console.log(err.message);
//         })
//     }
// }

