import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../../Components/MovieItems";
import { fetchMovieDetail } from "../../Redux/Action/movie";
import Loading from "../Loading";
import moduleName from "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// import Axios from 'axios'
// import {connect} from 'react-redux'
// import { movieService } from '../../Services'
// import {creationAction} from '../../Redux/Action'
// import { FETCH_MOVIE_DETAIL } from '../../Redux/Action/type'
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link, Redirect, useParams } from "react-router-dom";

function CircularProgressWithLabel(props) {
  document.documentElement.scrollTop = 0;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Detail() {
  
  const { value } = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(value);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const { movieDetail, lichChieu, isLoading, heThongLichChieu, dsPhimTheoNgay } = useSelector(
    (state) => state.movie
  );
  document.title=`${movieDetail.tenPhim}`
  const {ngayChieuGioChieu}= useSelector((state)=>state.ngay)
  const {credentials} = useSelector((state)=>state.user)
  useEffect(() => {
    dispatch(fetchMovieDetail(value));
    dispatch({type:"NGAY_CHIEU"})
    
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if(!credentials){
    return <Redirect to="/login"/>
  }
 
  ngayChieuGioChieu.map((item)=>{
    console.log(item);
  })
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50000,
        }}
      >
        <Fade in={open}>
          <iframe
            id="trailer"
            width="660"
            height="500"
            src={movieDetail.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Fade>
      </Modal>
      <div className="detail">
        <div className="styr">
          <img className="img" src={movieDetail.hinhAnh} alt="" />
        </div>

        <div className="container detail1">
          <div className="row">
            <div className="play col-3 " onClick={handleOpen}>
              <img
                className="img1 img-fluid"
                src={movieDetail.hinhAnh}
                alt=""
              />
              <a className="play1" onClick={handleOpen} type="button">
                <i class="fa fa-play"></i>
              </a>
            </div>
            <div className="col-4 text">
              <div>
                <p>{movieDetail.ngayKhoiChieu}</p>
                <p className="text1">{movieDetail.tenPhim}</p>
              </div>
            </div>
            <div className="col-5">
              <CircularProgressWithLabel
                size={100}
                variant="determinate"
                value={`${movieDetail.danhGia}0`}
              />
              <p>Đánh giá</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
      <div className=" container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Thông Tin
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Lịch Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
          <div className="row">
            <div className="col-3 text1">
              <p>Ngày Công Chiếu</p>
              <p>Đạo diễn</p>
              <p>Thể loại</p>
              <p>Định dạng</p>
              <p>Quốc Gia</p>
            </div>
            <div className="col-3 text2">
              <p>{movieDetail.ngayKhoiChieu}</p>
              <p>Victor Vũ</p>
              <p>Kinh dị</p>
              <p>2D</p>
              <p>Việt Nam</p>
            </div>
            <div className="col-3">
              <p>Nội Dung</p>
              <p>{movieDetail.moTa}</p>
            </div>
          </div>
        </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
      <div class="row lichChieu">
  <div class="col-1">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      {heThongLichChieu.map((item,index)=>{
        if(index===0){
          return(
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href={`#${item.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true"><img className="img-fluid" src={item.logo} alt=""/></a>
          )
        }else{
          return(
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href={`#${item.maHeThongRap}`} role="tab" aria-controls="v-pills-profile" aria-selected="false"><img className="img-fluid" src={item.logo} alt=""/></a>
          )
        }
      })}
      
     
   
    </div>
  </div>
  <div class="col-11">
    <div class="tab-content" id="v-pills-tabContent">
      {heThongLichChieu.map((item,index)=>{
        if(index===0){
          return(
            <div class="tab-pane fade show active" id={item.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="row">
  <div className="col-3">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      {item.cumRapChieu.map((item,index)=>{
        if(index===0){
          return(
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href={`#${item.maCumRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">{item.tenCumRap}</a>
          )
        }
        else{
          return(
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href={`#${item.maCumRap}`} role="tab" aria-controls="v-pills-profile" aria-selected="false">{item.tenCumRap}</a>
          )
        }
      })}
    </div>
  </div>
  <div className="col-9">
    <div className="tab-content" id="v-pills-tabContent">
      {item.cumRapChieu.map((item,index)=>{
        if(index===0){
          return(
            <div className="tab-pane scroll fade show active" id={item.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">{
              ngayChieuGioChieu.map((item1,index)=>{
                if(index<10){
                  const ngay=item.lichChieuPhim.filter(item=>item.ngayChieuGioChieu.slice(0,10)===item1)
                  return(
                    <>
                    <p>{item1}</p>
                    {item.lichChieuPhim.map((item,index)=>{
                      if(item.ngayChieuGioChieu.slice(0,10)===item1){
                        return (
                          <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
                        )
                      }
                    })}
                    {/* {ngay.map((item,index)=>{
                        return(
                        <>
                        <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
                        </>  
                        )  
                  })} */}
                    </>
                  )
                }
              })
            }</div>
            //     item.lichChieuPhim.map((item,index)=>{
            //       ngayChieuGioChieu.map((item1,index)=>{
            //       if(item1===item.ngayChieuGioChieu.slice(0,10)){
            //         return(
            //           <>
            //           <p>{item1}</p>
            //           <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
            //           </>
            //         )
            //       }
            //       // return(
            //       //   <div classname="row">
            //       //   <p>{item.ngayChieuGioChieu.slice(0,10)}</p>
            //       //  <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
            //       //   </div>
            //       // )     
            // })
            //   })
              
           
          )
        }
        else{
          return(
            <div className="tab-pane scroll fade" id={item.maCumRap} role="tabpanel" aria-labelledby="v-pills-profile-tab">{
              ngayChieuGioChieu.map((item1,index)=>{
                if(index<10&&item.lichChieuPhim.filter(item=>item.ngayChieuGioChieu.slice(0,10)===item1)){
                  const ngay=item.lichChieuPhim.filter(item=>item.ngayChieuGioChieu.slice(0,10)===item1)
                  return(
                    <>
                    <p>{item1}</p>
                    {ngay.map((item,index)=>{
                        return(
                        <>
                        <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
                        </>  
                        )  
                  })}
                    </>
                  )
                }
              })
            }</div>
          )
        }
      })}
    </div>
  </div>
</div>

            </div>
          )
        }else{
          return(
            <div class="tab-pane fade" id={item.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div className="row">
  <div className="col-3">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      {item.cumRapChieu.map((item,index)=>{
        if(index===0){
          return(
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href={`#${item.maCumRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">{item.tenCumRap}</a>
          )
        }
        else{
          return(
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href={`#${item.maCumRap}`} role="tab" aria-controls="v-pills-profile" aria-selected="false">{item.tenCumRap}</a>
          )
        }
      })}
    </div>
  </div>
  <div className="col-9">
    <div className="tab-content" id="v-pills-tabContent">
      {item.cumRapChieu.map((item,index)=>{
        if(index===0){
          return(
            <div className="tab-pane scroll fade show active" id={item.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">{
              item.lichChieuPhim.map((item,index)=>{
                return(
                  <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
                )
                
              })
            }</div>
          )
        }
        else{
          return(
            <div className="tab-pane scroll fade" id={item.maCumRap} role="tabpanel" aria-labelledby="v-pills-profile-tab">{
              item.lichChieuPhim.map((item,index)=>{
                return(
                  <Link className="link1" to={`/checkout/${item.maLichChieu}`}> <button className="btn btn-success">{item.ngayChieuGioChieu.slice(11,16)}</button></Link>
                )
              })
            }</div>
          )
        }
      })}
    </div>
  </div>
</div>
            </div>
          )
         
        }
      })}
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
      </div>
     

     
    </>
  );
}

// class Detail extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.movieDetail.hinhAnh} alt=""/>
//                 <p>{this.props.movieDetail.biDanh}</p>
//                 <p>{this.props.movieDetail.moTa}</p>
//                 <p>{this.props.movieDetail.danhGia}</p>
//                 <p>{this.props.lichChieuPhim.giaVe}</p>
//             </div>
//         )
//     }

//     componentDidMount(){
//         // Axios({
//         //     method:"GET",
//         //     url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1320'
//         // })
//         movieService.movieDetail()
//         .then((res)=>{
//             this.props.dispatch(creationAction(FETCH_MOVIE_DETAIL,res.data))
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
// }

// const mapStateToProps=(state)=>({
//     movieDetail:state.movie.movieDetail|| {
//         biDanh:'',
//         danhGia:'',
//         hinhAnh:'',
//         maPhim:'',
//         moTa:'',
//     },
//     lichChieuPhim:state.movie.lichChieu||{
//         giaVe:''
//     }
// })

// export default connect(mapStateToProps)(Detail)
