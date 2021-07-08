import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieItems from "../../Components/MovieItems";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchMovies } from "../../Redux/Action/movie";
import Loading from "../Loading";
import Detail from "../Detail";
import Carousel from "../../Components/Carousel";
import './home.scss'
import CumRap from "../../Components/CumRap";
import News from "../../Components/News";
import App from "../../Components/App";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, movieDetail, isLoading } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (isLoading) {
    return (
      <div>
          <Loading/>
      </div>
   
    
    );
  }
  return (
    <>
      <div  className="my-5">
        <Carousel />
      </div>
        <div id="lichChieu">
          <div className="container" >
            <div>
              <ul className="item nav nav-pills mb-3" id="pills-tab" role="tablist">
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
                    Đang Chiếu
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
                    Sắp Chiếu
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
                  <div className="row">
                    {movies.map((item, index) => {
                      if (index <= 7) {
                        return (
                          <div key={index} className="col-6 col-lg-3">
                            <MovieItems item={item} />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="row">
                    {movies.map((item, index) => {
                      if (index <= 7) {
                        return (
                          <div key={index} className="col-3">
                            <MovieItems item={item} />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                    <CumRap/>
                    <News/>
                    <App/>
    </>
  );
}

// class Home extends Component {
//     dispatch = useDispatch();

//     render() {
//         return (
//             <div>
//                 <h1 className="display-4 text-center">Danh sach phim</h1>
//                 <div className="container">
//                     <div className="row">
//                         {
//                             this.props.MovieList.map((item,index)=>(
//                                 <div key={index} className="col-4">
//                                 <MovieItems item={item}/>
//                             </div>
//                             ))
//                         }

//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     componentDidMount(){
//         // Axios({
//         //     method:"GET",
//         //     url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07',
//         // })
//       this.props.dispatch(fetchMovies())
//     }
// }

// const mapStateToProps = (state)=>({
//    MovieList: state.movie.movies
// });

// export default connect(mapStateToProps)(Home)
