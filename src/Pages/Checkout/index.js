import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import { fetchCheckout } from "../../Redux/Action/checkout";
import Loading from "../Loading";
import { datGhe, huyGhe, doiGheDaDat } from "../../Redux/Action/datghe";
import { muaVe } from "../../Redux/Action/muave";

export default function Checkout() {
  document.documentElement.scrollTop = 0;
  
  const { check } = useParams();
  const { checkOut, isLoading, dsGhe,dsGheDangDat,muave} = useSelector((state) => state.checkout);
  const {credentials} = useSelector((state)=>state.user)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCheckout(check));
  }, []);
  document.title=`DAT VE - ${checkOut.tenPhim}`
  if(!credentials){
      return <Redirect to="/"/>
  }
  if (isLoading) {
    return (
      <div style={{ margin: "100px 0" }}>
        <Loading />
      </div>
    );
  }
  const handleHuyGhe=(item) =>{
    dispatch(huyGhe(item))
  }
  
const values ={
  maLichChieu:check,
  danhSachVe:
   dsGheDangDat.map((item)=>{
      return{
        maGhe:item.maGhe,
        giaVe:item.giaVe,
      }
    }),
    taiKhoanNguoiDung:credentials.taiKhoan

}
  const handleDatVe = ()=>{
    dispatch(muaVe(values))
    // dispatch(thongTinUser({taiKhoan:credentials.taiKhoan}))
    let dsGheDaDat= dsGheDangDat.map((item)=>{
      return item.daDat===true
    })
    
    if(muave){
     alert("dat ve thanh cong!")
      dispatch(doiGheDaDat(dsGheDaDat))
    return window.location.reload()
      
      
    }
    
  }
 
  return (
    <div className="checkout container-fluid">
      <div className="row">
        <div className="col-md-8">
          <h3>{checkOut.tenCumRap}</h3>
          <p>
            {checkOut.ngayChieu}- {checkOut.gioChieu}- {checkOut.tenRap}
          </p>
          <div>
           
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="screen"></div>
            </div>
            <h4 style={{ textAlign: "center", marginTop:"20px" }}>Screen</h4>
            <div className="ghe container">
                <div className="row">
                {dsGhe.map((item,index)=>{
                  let cssGheDangDat ='chuadat'
                  // let cssGheDangDat = ''
                  let indexGheDangDat = dsGheDangDat.findIndex(gheDangDat=>gheDangDat.maGhe === item.maGhe)
                  if(indexGheDangDat !== -1){
                    cssGheDangDat='dangdat'
                  }
                  const handleGhe = (data)=>{
                    dispatch(datGhe(data))
                    console.log(data);
                  }
                    if(item.daDat){
                        return(
                            <div className="col-1 p-1">
                           <button><i class="fa fa-couch dadat"></i></button> 
                        </div>
                        )
                    }else{
                        return(
                            <div key={index} className="col-1 p-1">
                           <button type="button"   onClick={()=>{handleGhe(item)}}><i className={` fa fa-couch ${cssGheDangDat}`} />
                        </button> 
                        </div>
                        )
                    } 
                })}
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content">
            <h2>{checkOut.tenPhim}</h2>
            <p>
              {checkOut.ngayChieu}- {checkOut.gioChieu}- {checkOut.tenRap}
            </p>
          </div>
          <h3 style={{ textAlign: "center" }}>Danh sach ghe ban chon</h3>

          <div>
            <button className="ghedadat"></button>
            <span>Ghe da dat</span>
            <button className="ghedangdat"></button>
            <span>Ghe dang dat</span>
            <button className="ghechuadat"></button>
            <span>Ghe chua dat</span>
            <div className="mt-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>So ghe</th>
                    <th>Gia</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  
                  {dsGheDangDat.map((item,index)=>{
                    
                    return(
                      <>
                      <tr>
                      <td><span>{item.tenGhe}</span></td>
                      <td>{item.giaVe}</td>
                      <td><button onClick={()=>{handleHuyGhe(item.maGhe)}}>Huy</button></td>
                      <td />
                    </tr>  
                  </>
                    )
                  })}
                 
                
                 
                </tbody>
                <tfoot>
                    <tr>
                      <td></td>
                      <td>Tổng tiền</td>
                      <td>{dsGheDangDat.reduce((tongTien,item,index)=>{
                        if(item===false){
                          return tongTien = 0
                        }
                        return tongTien += item.giaVe 
                      },0).toLocaleString()}</td>
                    </tr>
                  </tfoot>
              </table>
            </div>
            <button  onClick={()=>{handleDatVe()}}>Dat Vé</button>
          </div>
        </div>
      </div>
    </div>
  );
}
