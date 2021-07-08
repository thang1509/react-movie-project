import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/Action/movie";

export default function AdminUsers() {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <div className="my-5">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button className="btn btn-danger">THEM PHIM</button>
        <h1>Quản Lý Phim</h1>
        <form>
          <input placeholder="tìm kiếm phim" type="text" name="" id="" />{" "}
          <button>
            <i class="fa fa-search"></i>
          </button>
        </form>
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
              {movies.map((item,index)=>{
                  return(
                      <>
                            <tr>
                                <td>{item.tenPhim}</td>
                                <td><img className="img-fluid w-10" src={item.hinhAnh} alt=""/></td>
                                <td />
                            </tr>
                            
                         </>
                  )
                
              })}
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
