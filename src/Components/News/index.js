import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import moduleName from './index.scss'
import img from '../../Assets/img/lat-mat-48h-16177782153424.png'
import img1 from '../../Assets/img/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png'
import img2 from '../../Assets/img/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png'
import img3 from '../../Assets/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg'

export default function News() {
  
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
       <>
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
                <img className="img-fluid" src={img} alt="img"/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img1} alt="img"/>
                <div className="text">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p className="text1">[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM</p></a>
                  <span>Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.</span>
                </div>
            </div>
        </div>
        <div className="row new2">
          <div className="col-4">
            <img className="img-fluid" src={img2} alt="img"/>
            <div className="text">
              <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"><p>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</p> </a>
              <p className="span">Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). </p>
            </div>
          </div>
          <div className="col-4">
          <img className="img-fluid" src={img2} alt="img"/>
            <div className="text">
              <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"><p>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</p> </a>
              <p className="span">Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). </p>
            </div>
          </div>
          <div className="col-4 last-col">
            <div className="new3">
              
                <img className="img-fluid" src={img3} alt="img"/>
                <div className="text">
                <a href=""><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
              
                </div>
                
            </div>
            <div className="new3">
              
                <img className="img-fluid" src={img3} alt="img"/>
                <div className="text">
                <a href=""><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
              
                </div>
                
            </div>
            <div className="new3">
              
                <img className="img-fluid" src={img3} alt="img"/>
                <div className="text">
                <a href=""><p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p></a>
              
                </div>
                
            </div>
          </div>
        </div>
    </div>
    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="pills-profile-tab">
    <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={img} alt="img"/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img} alt="img"/>
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
                <img className="img-fluid" src={img} alt="img"/>
                <div className="text">
                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={img} alt="img"/>
                <div className="text">
                  <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"><p>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</p></a>
                  <span>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</span>
                </div>
            </div>
        </div>
    </div>
  </div>
 
</div>
 <div>
 <Nav tabs>
   <NavItem>
     <NavLink
     type="button"
       className={classnames({ active: activeTab === '1' })}
       onClick={() => { toggle('1'); }}
     >
       Tab1
     </NavLink>
   </NavItem>
   <NavItem>
     <NavLink
       className={classnames({ active: activeTab === '2' })}
       onClick={() => { toggle('2'); }}
     >
       More Tabs
     </NavLink>
   </NavItem>
 </Nav>
 <TabContent activeTab={activeTab}>
   <TabPane tabId="1">
     <Row>
       <Col sm="12">
         <h4>Tab 1 Contents</h4>
       </Col>
     </Row>
   </TabPane>
   <TabPane tabId="2">
     <Row>
       <Col sm="6">
         <Card body>
           <CardTitle>Special Title Treatment</CardTitle>
           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Go somewhere</Button>
         </Card>
       </Col>
       <Col sm="6">
         <Card body>
           <CardTitle>Special Title Treatment</CardTitle>
           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Go somewhere</Button>
         </Card>
       </Col>
     </Row>
   </TabPane>
 </TabContent>
</div>
</>



    )
}
