import axiosClient from './axiosClient'
const movieService = {
    listMovies: () => {
        return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP02");
    },
    movieDetail:(value)=>{
        return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`);
    }
}
// class MovieService {
//     listMovies(){
//         return  Axios({
//             method:"GET",
//             url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07',
//         })
//     }
//     movieDetail(){
//         return Axios({
//             method:"GET",
//             url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1320'
//         })
//     }
// }
export default movieService