import adminService from "../../Services/admin"
import { CAP_NHAT_NGUOI_DUNG, CAP_NHAT_PHIM, DANH_SACH_NGUOI_DUNG, THEM_NGUOI_DUNG, THEM_PHIM_FAILURE, THEM_PHIM_RESPONSE, THEM_PHIM_SUCCESS, XOA_NGUOI_DUNG, XOA_PHIM } from "./type"

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
                alert("Them Thanh Cong")
                return window.location.reload()
            }
        }).catch((error)=>{
            alert(error.response.data)
        })
    }
}
export function danhSachNguoiDung(){
    return (dispatch)=>{
        adminService.danhSachNguoiDung().then((res)=>{
            dispatch({type:DANH_SACH_NGUOI_DUNG,payload:res.data})
        }).catch((error)=>{
            alert(error.response.data)
        })
    }
}

export function themNguoiDung(values){
    return (dispatch)=>{
        adminService.themNguoiDung(values).then((res)=>{
            dispatch({type:THEM_NGUOI_DUNG,payload:res.data})
            if(res){
                return window.location.reload()
            }
        }).catch((error)=>{
            alert(error.response.data)
        })
    }
}

export function capNhatNguoiDung(values){
    return (dispatch)=>{
        adminService.capNhatNguoiDung(values).then((res)=>{
            dispatch({type:CAP_NHAT_NGUOI_DUNG,payload:values})
            if(res){
                alert("Cap Nhat Thanh Cong!")
                return window.location.reload()
            }
        }).catch((error)=>{
            alert(error.response.data)
        })
    }
}
export function xoaNguoiDung(values){
    return(dispatch)=>{
        adminService.xoaNguoiDung(values).then((res)=>{
            dispatch({type:XOA_NGUOI_DUNG,payload:res.data})
            if(res){
                return window.location.reload()
            }
        }).catch((error)=>{
            if(error){
                alert(error.response.data)
            }
        })
    }
}