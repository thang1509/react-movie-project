import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function TimKiemPhim() {
    const {moviesSearch} = useSelector((state)=>state.admin)
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Tên Phim</th>
            <th>Hình Ảnh</th>
            <th>Mô Tả</th>
            <th>Ngày Khởi Chiếu</th>
            <th>Đánh Giá</th>
            <th>Tùy Chỉnh</th>
          </tr>
        </thead>
        
        <tbody>
           
                          <tr>
                              <td>{moviesSearch.tenPhim}</td>
                              <td><img className="img-fluid w-10" src={moviesSearch.hinhAnh} alt=""/></td>
                              <td className="td1">{moviesSearch.moTa}</td>
                              <td>{moviesSearch.ngayKhoiChieu.slice(0,10)}</td>
                              <td className="text-center">{moviesSearch.danhGia}</td>
                              <td><i type="button" class="fa fa-edit mx-2"></i><i type="button" class="fa fa-trash"></i></td>
                          </tr>       
            
           
          
         
        </tbody>
      </table>
    )
}
