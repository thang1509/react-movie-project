import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { danhSachNguoiDung } from "../../Redux/Action/admin";
import { fetchMovies } from "../../Redux/Action/movie";
import './index.scss'

export default function AdminUsers() {
  const { dsNguoiDung, findUser } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(danhSachNguoiDung());
  }, []);

  const handleFindUser = (evt)=>{
    const {value} = evt.target
    console.log(value);
  
    dispatch({type:"TIM_USER",payload:value})
  }
  return (
   <div className="my-5 adminuser">
     <div className="headerAdminUser">
    <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Thêm User
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Thêm User</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Thêm</button>
        </div>
      </div>
    </div>
  </div>
</div>

       <h1>Quản Lý Nhân Viên</h1>
       <div className="form">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={handleFindUser} type="search" placeholder="Search" aria-label="Search" />
         
          </form>

       </div>
     </div>
     <table class="table">
       <thead>
         <tr>
           <th>Tài Khoản</th>
           <th>Họ Tên</th>
           <th>Email</th>
           <th>So Dien Thoai</th>
           <th>Mat Khau</th>
           <th>Ma Loai Nguoi Dung</th>
           <th>Chỉnh Sửa</th>
         </tr>
       </thead>
       {findUser?<tbody>
        <tr>
            <td>{findUser.taiKhoan}</td>
            <td>{findUser.hoTen}</td>
            <td>{findUser.email}</td>
            <td>{findUser.soDt}</td>
            <td>{findUser.matKhau}</td>
            <td>{findUser.maLoaiNguoiDung}</td>
          </tr>
       </tbody>:<tbody>
         {dsNguoiDung.map((item,index)=>{
           return(
            <tr>
            <td>{item.taiKhoan}</td>
            <td>{item.hoTen}</td>
            <td>{item.email}</td>
            <td>{item.soDt}</td>
            <td>{item.matKhau}</td>
            <td>{item.maLoaiNguoiDung}</td>
          </tr>
          
           )
         })}
       </tbody>}
       
     </table>
   </div>
  );
}
