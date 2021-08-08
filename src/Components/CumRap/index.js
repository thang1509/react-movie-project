import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchRap, fetchCumRap } from "../../Redux/Action/rap";

import moduleName from "./index.scss";

export default function CumRap() {
  const { rapPhim, cumRap } = useSelector((state) => state.rap);
  const{credentials} = useSelector((state)=>state.user)
  const getHeThongRap = (value) => {
    return value.maHeThongRap;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRap());
    dispatch(fetchCumRap());
  }, []);

  const handleSignIn=(value)=>{
    if(credentials){
      return<Redirect to={`/checkout/${value}`}/>
    }
    else{
      return<Redirect to="/login"/>
    }
  }
  
  return (
    <div className="container cumRap "id="cumrap">
      <div className="row">
        <div className="col-2">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {cumRap.map((item, index) => {
              if (index === 0) {
                return (
                  <a
                  className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href={`#${getHeThongRap(item)}`}
                  >
                    <img className="img-fluid" src={item.logo} alt="img" />
                  </a>
                );
              } else {
                return (
                  <a
                  className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href={`#${getHeThongRap(item)}`}
                  >
                    <img className="img-fluid" src={item.logo} alt="img" />
                  </a>
                );
              }
            })}
          </div>
        </div>
        <div className="col-10">
          <div className="tab-content" id="v-pills-tabContent">
            {cumRap.map((item, index) => {
              if (index === 0) {
                return (
                  <div key={index}
                  className="tab-pane fade show active "
                    id={getHeThongRap(item)}
                  >
                    <div className="row">
                      <div className="col-6">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                        >
                          <>
                            {item.lstCumRap.map((item, index) => {
                              if (index === 0) {
                                return (
                                  <>
                                    <a key={index}
                                      className="nav-link active"
                                      id="v-pills-home-tab"
                                      data-toggle="pill"
                                      href={`#${item.maCumRap}`}
                                    >
                                      {item.diaChi}
                                    </a>
                                  </>
                                );
                              } else {
                                return (
                                  <a key={index}
                                    className="nav-link"
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href={`#${item.maCumRap}`}
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                  >
                                    {item.diaChi}
                                  </a>
                                );
                              }
                            })}
                          </>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="tab-content" id="v-pills-tabContent">
                          {
                            <>
                              {item.lstCumRap.map((item, index) => {
                                if (index === 0) {
                                  return (
                                    <div key={index}
                                      className="tab-pane fade show active"
                                      id={item.maCumRap}
                                      role="tabpanel"
                                      aria-labelledby="v-pills-home-tab"
                                    >
                                      {item.danhSachPhim.map((item, index) => {
                                        return (
                                          <div key={index}>
                                            <p >{item.tenPhim}</p>
                                            {item.lstLichChieuTheoPhim.map(
                                              (item, index) => {
                                                if (index < 7) {
                                                  
                                                    if(credentials){
                                                      return(
                                                        <Link key={index}
                                                        to={`/checkout/${item.maLichChieu}`}
                                                      >
                                                        <button className="btn btn-success m-1">
                                                          {item.ngayChieuGioChieu.slice(
                                                            14,
                                                            19
                                                          )}
                                                        </button>
                                                      </Link>
                                                      )
                                                    }
                                                    else{
                                                      return(
                                                        <Link key={index}
                                                        to="/login"
                                                      >
                                                        <button className="btn btn-success m-1">
                                                          {item.ngayChieuGioChieu.slice(
                                                            14,
                                                            19
                                                          )}
                                                        </button>
                                                      </Link>
                                                      )
                                                    }
                                                   

                                                  
                                                    // <button onClick={()=>{handleSignIn(item.maLichChieu)}} className="btn btn-success m-1">
                                                    //     {item.ngayChieuGioChieu.slice(
                                                    //       14,
                                                    //       19
                                                    //     )}
                                                    //   </button>
                                                        ;
                                                }
                                              }
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={index}
                                      className="tab-pane fade"
                                      id={item.maCumRap}
                                      role="tabpanel"
                                      aria-labelledby="v-pills-home-tab"
                                    >
                                      {item.danhSachPhim.map((item, index) => {
                                        return (
                                          <div key={index}>
                                            <p>{item.tenPhim}</p>
                                            {item.lstLichChieuTheoPhim.map(
                                              (item, index) => {
                                                if (index < 7) {
                                                  return (
                                                    <Link key={index}
                                                      to={`/checkout/${item.maLichChieu}`}
                                                    >
                                                      <button className="btn btn-success m-1">
                                                        {item.ngayChieuGioChieu.slice(
                                                          14,
                                                          19
                                                        )}
                                                      </button>
                                                    </Link>
                                                  );
                                                }
                                              }
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                }
                              })}
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="tab-pane fade " id={getHeThongRap(item)}>
                    <div className="row">
                      <div className="col-6">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {
                            <>
                              <>
                                {item.lstCumRap.map((item, index) => {
                                  if (index === 0) {
                                    return (
                                      <a
                                        className="nav-link active"
                                        id="v-pills-home-tab"
                                        data-toggle="pill"
                                        href={`#${item.maCumRap}`}
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                      >
                                        {item.diaChi}
                                      </a>
                                    );
                                  } else {
                                    return (
                                      <a
                                        className="nav-link"
                                        id="v-pills-profile-tab"
                                        data-toggle="pill"
                                        href={`#${item.maCumRap}`}
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                      >
                                        {item.diaChi}
                                      </a>
                                    );
                                  }
                                })}
                              </>
                            </>
                          }
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="tab-content" id="v-pills-tabContent">
                          {
                            <>
                              <>
                                {item.lstCumRap.map((item, index) => {
                                  if (index === 0) {
                                    return (
                                      <div
                                        className="tab-pane fade show active"
                                        id={item.maCumRap}
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                      >
                                        {item.danhSachPhim.map(
                                          (item, index) => {
                                            return (
                                              <>
                                                <p>{item.tenPhim}</p>
                                                {item.lstLichChieuTheoPhim.map(
                                                  (item, index) => {
                                                    if (index < 7) {
                                                      return (
                                                        <Link
                                                          className="tag"
                                                          to={`/checkout/${item.maLichChieu}`}
                                                        >
                                                          <button className="btn btn-success m-1">
                                                            {item.ngayChieuGioChieu.slice(
                                                              14,
                                                              19
                                                            )}
                                                          </button>
                                                        </Link>
                                                      );
                                                    }
                                                  }
                                                )}
                                              </>
                                            );
                                          }
                                        )}
                                      </div>
                                    );
                                  } else {
                                    return (
                                      <div
                                        className="tab-pane fade"
                                        id={item.maCumRap}
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                      >
                                        {item.danhSachPhim.map(
                                          (item, index) => {
                                            return (
                                              <>
                                                <p>{item.tenPhim}</p>
                                                {item.lstLichChieuTheoPhim.map(
                                                  (item, index) => {
                                                    if (index < 7) {
                                                      return (
                                                        <Link
                                                          to={`/checkout/${item.maLichChieu}`}
                                                        >
                                                          <button className="btn btn-success m-1">
                                                            {item.ngayChieuGioChieu.slice(
                                                              14,
                                                              19
                                                            )}
                                                          </button>
                                                        </Link>
                                                      );
                                                    }
                                                  }
                                                )}
                                              </>
                                            );
                                          }
                                        )}
                                      </div>
                                    );
                                  }
                                })}
                              </>
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
