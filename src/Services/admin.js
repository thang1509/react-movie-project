import axiosClient from './axiosClient'
import Axios from 'axios'


const adminService ={
    themPhim:(data)=>{
        return axiosClient.post('/QuanLyPhim/ThemPhim', data)
    },
    xoaPhim:(data)=>{
        return axiosClient.delete(`/QuanLyPhim/XoaPhim?MaPhim=${data}`)
    },
    capNhatPhim:(form_data)=>{
        return axiosClient.post('/QuanLyPhim/CapNhatPhimUpload',form_data)
    },
    danhSachNguoiDung:()=>{
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02")
    },
    themNguoiDung:(data)=>{
        return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung",data)
    },
    capNhatNguoiDung:(data)=>{
        return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung",data)
    },
    xoaNguoiDung:(data)=>{
        return axiosClient.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`)
    }
    // themPhim(data){
    //     return Axios({
    //         method:"POST",
    //         url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
    //         data
    //     })
    // }
}

export default adminService