import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/Action/movie";
import moduleName from "./index.scss";
import { Form, Formik, Field, move } from "formik";
import TimKiemPhim from "../../Components/TimKiemPhim";
import { admin, capNhatFilm, xoaFilm } from "../../Redux/Action/admin";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { RootRef } from "@material-ui/core";
import { number } from "yup";


export default function AdminMovies() {

  
  
  const { movies } = useSelector((state) => state.movie);
  const { moviesSearch, boolean, phimCanSua, values } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(moviesSearch);
  let cssTimKiem = "";
  let cssPhim = "";
  if (moviesSearch) {
    cssTimKiem = "timKiem";
  }
  const handleChange = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_",payload:value})
  };
  const handleChange1 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_1",payload:value})
  };
  const handleChange2 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_2",payload:value})
  };
  const handleChange3 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_3",payload:value})
  };
  const handleChange6 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_6",payload:value})
  };
  const handleChange7 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_7",payload:value})
  };
  const handleChange8 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_8",payload:value})
  };
  const handleChange9 = (event) => {
    const { value } = event.target;
    dispatch({type:"SUA_PHIM_9",payload:value})
  };
  const handleChange5 = (event) => {
    const  value  = event.target.files[0];
   
    dispatch({type:"SUA_PHIM_5",payload:value})
    
  };
  const handleXoa=()=>{
    dispatch(xoaFilm(values.maPhim))
  }
  const handleUpdate=(e)=>{
    e.preventDefault()
    let form_data = new FormData()
    for(let key in values){
      form_data.append(key,values[key])
    }
    e.preventDefault()
    dispatch(capNhatFilm(form_data))
  }
  console.log(values);
  return (
    <div className="my-5 adminMovies">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Thêm Phim
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Thêm Phim
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Formik
                      initialValues={{
                        maPhim: 0,
                        tenPhim: "",
                        biDanh: "",
                        trailer: "",
                        hinhAnh: "",
                        moTa: "",
                        maNhom: "",
                        ngayKhoiChieu: "",
                        danhGia: 0,
                      }}
                      onSubmit={(values)=>{
                        console.log(values);
                        dispatch(admin(values))
                        
                      }}
                      render={({handleChange})=>(
                        <Form>
                          <div className="form-group">
                              <label>Mã Phim</label>
                              <Field type="text" className="form-control" name="maPhim" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Tên Phim</label>
                              <Field type="text" className="form-control" name="tenPhim" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Bí Danh</label>
                              <Field type="text" className="form-control" name="biDanh" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Trailer</label>
                              <Field type="text" className="form-control" name="trailer" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Hình Ảnh</label>
                              <Field type="file" className="form-control" name="hinhAnh" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Mô Tả</label>
                              <Field type="text" className="form-control" name="moTa" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Mã Nhóm</label>
                              <Field type="text" className="form-control" name="maNhom" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Ngày Khởi Chiếu</label>
                              <Field type="text" className="form-control" name="ngayKhoiChieu" onChange={handleChange}/>
                          </div>
                          <div className="form-group">
                              <label>Đánh Giá</label>
                              <Field type="text" className="form-control" name="danhGia" onChange={handleChange}/>
                          </div>
                          <button className="btn btn-primary text-center">
                      Add
                    </button>
                        </Form>
                      )}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1>Quản Lý Phim</h1>

        <Formik
          initialValues={{
            tenPhim: "",
          }}
          onSubmit={(values) => {
            if (values.tenPhim === "") {
              dispatch({
                type: "TIM_KIEM1",
              });
            } else {
              dispatch({
                type: "TIM_KIEM",
                payload: movies.find((item) => item.tenPhim === values.tenPhim),
              });
            }
          }}
          render={({ handleChange }) => (
            <Form className="form-search">
              <Field
                onChange={handleChange}
                className="form-control"
                placeholder="tìm kiếm phim"
                type="text"
                name="tenPhim"
                id=""
              />
              <button>
                <i class="fa fa-search"></i>
              </button>
            </Form>
          )}
        />
      </div>

      <div>
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
            {moviesSearch ? (
              <>
                <tr>
                  <td>{moviesSearch.tenPhim}</td>
                  <td>
                    <img
                      className="img-fluid w-10"
                      src={moviesSearch.hinhAnh}
                      alt=""
                    />
                  </td>
                  <td className="td1">{moviesSearch.moTa}</td>
                  <td>{moviesSearch.ngayKhoiChieu}</td>
                  <td className="text-center">{moviesSearch.danhGia}</td>
                  <td>
                    <i type="button" class="fa fa-edit mx-2"></i>
                    <i type="button" class="fa fa-trash"></i>
                  </td>
                </tr>
              </>
            ) : (
              <>
                {movies.map((item, index) => {
                 const handleChange1 = (item)=>{
                  console.log(item);                  
                  dispatch({type:"SUA_PHIM",payload:item})
                }
                  return (
                    <>
                    
                    <tr>
                      <td>{item.tenPhim}</td>
                      <td>
                        <img
                          className="img-fluid w-10"
                          src={item.hinhAnh}
                          alt=""
                        />
                      </td>
                      <td className="td1">{item.moTa}</td>
                      <td>{item.ngayKhoiChieu.slice(0, 10)}</td>
                      <td className="text-center">{item.danhGia}</td>
                      <td>
                      <div>
  {/* Button trigger modal */}
  <button onClick={()=>{handleChange1(item)}}  className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
    Update
  </button>
  {/* Modal */}
 
</div>
<div>
  {/* Button trigger modal */}
  <button type="button" onClick={()=>{handleChange1(item)}}  className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId1">
    Xóa
  </button>
 
  {/* Modal */}
 
</div>
                      </td>
                    </tr>
                  
                    </>
                  );
                })}
              </>
            )}
            {/* <tr>
                                  <td>{moviesSearch.tenPhim}</td>
                                  <td><img className="img-fluid w-10" src={moviesSearch.hinhAnh} alt=""/></td>
                                  <td className="td1">{moviesSearch.moTa}</td>
                                  <td>{moviesSearch.ngayKhoiChieu}</td>
                                  <td className="text-center">{moviesSearch.danhGia}</td>
                                  <td><i type="button" class="fa fa-edit mx-2"></i><i type="button" class="fa fa-trash"></i></td>
                              </tr> 
              {movies.map((item,index)=>{
                    return(
<tr >
                                  <td>{item.tenPhim}</td>
                                  <td><img className="img-fluid w-10" src={item.hinhAnh} alt=""/></td>
                                  <td className="td1">{item.moTa}</td>
                                  <td>{item.ngayKhoiChieu.slice(0,10)}</td>
                                  <td className="text-center">{item.danhGia}</td>
                                  <td><i type="button" class="fa fa-edit mx-2"></i><i type="button" class="fa fa-trash"></i></td>
                              </tr> 
                  )                                
})} */}
          </tbody>
        </table>
      </div>
    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Sửa Phim</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="form-group">
            <label>Mã Phim</label>
            <input
              type="text"
              name="maPhim"
              value={values.maPhim}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        <div className="form-group">
            <label>Ten Phim</label>
            <input
              type="text"     
              name="tenPhim"
              value={values.tenPhim}
              onChange={handleChange1}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Bi Danh</label>
            <input
              type="text"     
              name="biDanh"
              value={values.biDanh}
              onChange={handleChange2}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Trailer</label>
            <input
              type="text"     
              name="trailer"
              value={values.trailer}
              onChange={handleChange3}
              className="form-control"
            />
          </div>
           <div className="form-group">
            <label>Hình ảnh</label>
            <input
              type="file"
             
              name="hinhAnh"
              // value={values.hinhAnh}
              onChange={handleChange5}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Mo ta</label>
            <input
              type="text"     
              name="moTa"
              value={values.moTa}
              onChange={handleChange6}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Ma Nhom</label>
            <input
              type="text"     
              name="maNhom"
              value={values.maNhom}
              onChange={handleChange7}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Ngay Khoi Chieu</label>
            <input
              type="text"     
              name="ngayKhoiChieu"
              value={values.ngayKhoiChieu}
              onChange={handleChange8}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Danh Gia</label>
            <input
              type="text"     
              name="danhGia"
              value={values.danhGia}
              onChange={handleChange9}
              className="form-control"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={handleUpdate} className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modelId1" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId1" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Body
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button onClick={handleXoa}   className="btn btn-primary">Xac Nhan</button>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}
