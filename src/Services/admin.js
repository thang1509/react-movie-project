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