import { Form, Formik, Field } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capNhatNguoiDung, danhSachNguoiDung, themNguoiDung, xoaNguoiDung } from "../../Redux/Action/admin";
import { fetchMovies } from "../../Redux/Action/movie";
import './index.scss'

export default function AdminUsers() {
  const { dsNguoiDung, findUser, valuesUser } = useSelector((state) => state.admin);
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
          <Formik
            initialValues={{
              taiKhoan:"",
              matKhau:"",
              email:"",
              soDt:"",
              maNhom:"GP02",
              maLoaiNguoiDung:"",
              hoTen:""
            }}
            onSubmit={(values)=>{
              dispatch(themNguoiDung(values))
              // console.log(values);
            }}
            render={({handleChange})=>(
              <Form>
                 <div className="form-group">
                    <label>Tai Khoan</label>
                    <Field type="text" className="form-control" name="taiKhoan" onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                    <label>Mat Khau</label>
                    <Field type="text" className="form-control" name="matKhau" onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                    <label>Email</label>
                    <Field type="text" className="form-control" name="email" onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                    <label>So Dien Thoai</label>
                    <Field type="text" className="form-control" name="soDt" onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                    <label>Ma Nhom</label>
                    <Field type="text" className="form-control" name="maNhom" onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                    <label>Ma Loai Nguoi Dung</label>
                    <Field component="select" className="form-control"  name="maLoaiNguoiDung" onChange={handleChange}>
                      <option className="d-none"></option>
                      <option>QuanTri</option>
                      <option>KhachHang</option>
                    </Field>
                 </div>
                 <div className="form-group">
                    <label>Ho Ten</label>
                    <Field type="text" className="form-control" name="hoTen" onChange={handleChange}/>
                 </div>
                 <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button className="btn btn-primary">Thêm</button>
        </div>
              </Form>
            )}
          />
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
     <table class="table" style={{tableLayout:"auto"}}>
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
            <th></th>
          </tr>
       </tbody>:<tbody>
         {dsNguoiDung.map((item,index)=>{
           const handleChange1=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER1",payload:value})
           }
           const handleChange2=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER2",payload:value})
           }
           const handleChange3=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER3",payload:value})
           }
           const handleChange4=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER4",payload:value})
           }
           const handleChange5=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER5",payload:value})
           }
           const handleChange6=(evt)=>{
            const {value} = evt.target
            dispatch({type:"CHANGE_USER6",payload:value})
           }
           const handleUser=(item)=>{
             console.log(item);
            dispatch({type:"UPDATE_USER",payload:item})
           }
           const handleCapNhat=()=>{
             console.log(valuesUser);
             dispatch(capNhatNguoiDung(valuesUser))
           }
           const handleXoaUser=()=>{
             dispatch(xoaNguoiDung(valuesUser.taiKhoan))
           }
           return(
            <tr key={index}>
            <td>{item.taiKhoan}</td>
            <td>{item.hoTen}</td>
            <td>{item.email}</td>
            <td>{item.soDt}</td>
            <td>{item.matKhau}</td>
            <td>{item.maLoaiNguoiDung}</td>
            <th><div>
  {/* Button trigger modal */}
  <button type="button" onClick={()=>{handleUser(item)}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
  <i class="fa fa-edit"></i>
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Chinh Sua</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Tai Khoan</label>
            <input type="text"  onChange={handleChange1} value={valuesUser.taiKhoan} className="form-control" />
          </div>
          <div className="form-group">
            <label>Mat Khau</label>
            <input type="text" onChange={handleChange2}  value={valuesUser.matKhau} className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text"onChange={handleChange3} value={valuesUser.email} className="form-control" />
          </div>
          <div className="form-group">
            <label>So Dien Thoai</label>
            <input type="text"onChange={handleChange4} value={valuesUser.soDt} className="form-control" />
          </div>
          <div className="form-group">
            <label>Ma Nhom</label>
            <input disabled style={{cursor:"not-allowed"}} type="text" value={valuesUser.maNhom} className="form-control" />
          </div>
          <div class="form-group">
            <label>Ma Loai Nguoi Dung</label>
            <select class="form-control" onChange={handleChange5} value={valuesUser.maLoaiNguoiDung}>
              <option>QuanTri</option>
              <option>KhachHang</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ho Ten</label>
            <input type="text"onChange={handleChange6} value={valuesUser.hoTen} className="form-control" />
          </div>
        </div>
        <div className="modal-footer">
         <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#modelId3">
    Xoa
  </button>
  {/* Modal */}
  <div className="modal fade" id="modelId3" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Xóa Tài Khoản</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Bạn muốn xóa tài khoản "{valuesUser.taiKhoan}"
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={handleXoaUser} className="btn btn-primary">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</div>

          <button type="button" onClick={handleCapNhat} className="btn btn-primary">Cap Nhat</button>
        </div>
      </div>
    </div>
  </div>
</div>
</th>
          </tr>
          
           )
         })}
       </tbody>}
       
     </table>
   </div>
  );
}
