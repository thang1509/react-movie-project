import Axios from 'axios'
import axiosClient from './axiosClient'

class UserService{
    signUp(data){
        return Axios({
            method:"POST",
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }
    signIn(data){
        // return Axios({
        //     method:"POST",
        //     url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        //     data
        // })
        return axiosClient.post('/QuanLyNguoiDung/DangNhap',data)
    }
}
export default UserService