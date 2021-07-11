import { number } from "yup/lib/locale"
import { DANH_SACH_NGUOI_DUNG, THEM_PHIM_FAILURE, THEM_PHIM_RESPONSE, THEM_PHIM_SUCCESS, XOA_PHIM } from "../Action/type"

const initialState ={
    moviesSearch:null,
    boolean:false,
    error:null,
    movieAdd:{},
    phimCanSua:{},
    values:{
        maPhim:number,
        tenPhim:"",
        biDanh:"",
        trailer: "",
        hinhAnh:{},
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: "",
        danhGia: 0,
    },
    xoaPhim:{},
    dsNguoiDung:[],
    findUser:null
}

function adminReducer(state=initialState,action){
    switch(action.type){
        case "TIM_KIEM":{ 
            return{...state,moviesSearch:action.payload,boolean:true}
        }
        case "TIM_KIEM1":{
            return{...state,moviesSearch:null}
        }
        case THEM_PHIM_RESPONSE:{
            return {...state,isLoading:true,error:null}
        }
        case THEM_PHIM_SUCCESS:{
            return {...state, movieAdd:action.payload.data}
        }
        case THEM_PHIM_FAILURE:{
            return {...state,error:action.payload.error}
        }
        case "SUA_PHIM":{
            state.values.tenPhim=action.payload.tenPhim
            state.values.maPhim=action.payload.maPhim
            state.values.biDanh=action.payload.biDanh
            state.values.trailer=action.payload.trailer
            state.values.moTa=action.payload.moTa
            state.values.maNhom=action.payload.maNhom
            state.values.ngayKhoiChieu=action.payload.ngayKhoiChieu
            state.values.danhGia=action.payload.danhGia
            return {...state,phimCanSua:action.payload}
        }
        case "SUA_PHIM_1":{
            state.values.tenPhim = action.payload
            return{...state}
        }
        case "SUA_PHIM_":{
            state.values.maPhim = action.payload
            return{...state}
        }
        case "SUA_PHIM_2":{
            state.values.biDanh = action.payload
            return{...state}
        }
        case "SUA_PHIM_3":{
            state.values.trailer = action.payload
            return{...state}
        }
        case "SUA_PHIM_6":{
            state.values.moTa = action.payload
            return{...state}
        }
        case "SUA_PHIM_7":{
            state.values.maNhom = action.payload
            return{...state}
        }
        case "SUA_PHIM_8":{
            state.values.ngayKhoiChieu = action.payload
            return{...state}
        }
        case "SUA_PHIM_9":{
            state.values.danhGia = action.payload
            return{...state}
        }
        case "SUA_PHIM_5":{
            state.values.hinhAnh = action.payload
            return{...state}
        }
        case XOA_PHIM:{
            return {...state,xoaPhim:action.payload}
        }
        case DANH_SACH_NGUOI_DUNG:{
            return{...state,dsNguoiDung:action.payload}
        }
        case "TIM_USER":{
            state.findUser=state.dsNguoiDung.find(item=>item.taiKhoan===action.payload)
            return{...state}
        }
        default:
            return {...state}
    }
}
export default adminReducer