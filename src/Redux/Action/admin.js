import adminService from "../../Services/admin"
import { CAP_NHAT_PHIM, THEM_PHIM_FAILURE, THEM_PHIM_RESPONSE, THEM_PHIM_SUCCESS, XOA_PHIM } from "./type"

export function admin(values){
    return (dispatch)=>{
        dispatch({type:THEM_PHIM_RESPONSE})
        // try{
        //     const {data} = await adminService.themPhim(values)
        //     dispatch({type:THEM_PHIM_SUCCESS,payload:{data}})
        //     if(data){
        //         alert("them phim thanh cong")
        //     }
        // }catch(error){
        //     dispatch({type:THEM_PHIM_FAILURE, payload:{error:error.response.data},})
        //     console.log(error);
        // }
        adminService.themPhim(values).then((result)=>{
            console.log(result);
            dispatch({type:THEM_PHIM_SUCCESS,payload:{data:result.data}})
            if(result){
                return window.location.reload()
            }
        }).catch((error)=>{
            dispatch({type:THEM_PHIM_FAILURE,payload:{error:error.response.data}})
                console.log(error.response.data);
                alert(error.response.data)
            
        })
    }
}

export function xoaFilm(value){
    return (dispatch)=>{
        adminService.xoaPhim(value).then((res)=>{
            dispatch({type:XOA_PHIM,payload:res.data})
            if(res){
                return window.location.reload()
            }
        }).catch((err)=>{
            alert(err.response.data)
            console.log(err.response.data);
        })
    }
}

export function capNhatFilm(value){
    return(dispatch)=>{
        adminService.capNhatPhim(value).then((res)=>{
            dispatch({type:CAP_NHAT_PHIM,payload:res.data})
            if(res){
                return window.location.reload()
            }
        }).catch((error)=>{
            alert(error.response.data)
        })
    }
}