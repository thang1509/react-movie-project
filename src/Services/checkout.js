import axiosClient from './axiosClient'
import Axios from 'axios'

const checkoutService ={
    danhSachVe:(data)=>{
        return axiosClient.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${data}`)
    },
    muaVe:(data)=>{
        return axiosClient.post(
            "/QuanLyDatVe/DatVe",
            data
        )
    },
    // thongTinUser(data){
    //     return Axios({
    //         method:"POST",
    //         url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
    //         data,
    //         })
    // }

}
export default checkoutService