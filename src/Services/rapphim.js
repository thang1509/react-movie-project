import axiosClient from './axiosClient'
const rapService = {
    listRapPhim: ()=>{
        return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap")
    },
    listCumRap:(data)=>{
        return axiosClient.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${data}`)
    },
    listCumRap1:()=>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02")
    }
}

export default rapService