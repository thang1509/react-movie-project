import React from 'react'
import moduleName from './index.scss'
import img from '../../Assets/img/lat-mat-48h-16177782153424.png'

export default function News() {
    return (
       
 <div className="container news">
  <ul className="nav nav-pills  mb-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#dienanh" role="tab" aria-controls="pills-home" aria-selected="true">Điển Ảnh 24h</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#review" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#khuyenmai" role="tab" aria-controls="pills-contact" aria-selected="false">Khuyến Mãi</a>
    </li>
  </ul>
  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="dienanh" role="tabpanel" aria-labelledby="pills-home-tab">
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
        </div>
    </div>
    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="pills-profile-tab">
    <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
        </div>
    </div>
    <div className="tab-pane fade" id="khuyenmai" role="tabpanel" aria-labelledby="pills-contact-tab">
    <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img} alt=""/>
                <div className="text">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>



    )
}
