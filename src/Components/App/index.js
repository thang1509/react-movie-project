import React from 'react'
import moduleName from './index.scss'
import img from '../../Assets/img/mobile.png'
import slide1 from '../../Assets/img/slide1.jpg'
import slide16 from '../../Assets/img/slide16.jpg'
import slide2 from '../../Assets/img/slide2.jpg'

export default function App() {
    return (
        <div className="app">
            <div className="container">
            <div className="row ">
            <div className="left col-6">
                <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                <button className="btn btn-success">App miễn phí - tải về ngay</button>
            </div>
            <div className="right col-6">
                <img className="img img-fluid "  src={img} alt=""/>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
  <li  data-target="#carouselExampleControls" data-slide-to={0} className="slide active" />
  <li className="slide" data-target="#carouselExampleControls" data-slide-to={1} />
  <li className="slide" data-target="#carouselExampleControls" data-slide-to={2} />
</ol>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slide16} className="img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slide2} className="img-fluid" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev d-none" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next d-none" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

            </div>
            </div>
            </div>
          
           
        </div>
    )
}
