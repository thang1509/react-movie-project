import React from 'react'
import moduleName from './index.scss'
import img from '../../Assets/img/cgv.png'
import img1 from '../../Assets/img/zion-logo.jpg'
import img2 from '../../Assets/img/d1e6bd560daa9e20131ea8a0f62e87f8.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-2 footer-item">
                        <p>Tix</p>
                        <p>FAQ</p>
                        <p>Brand Guidelines</p>
                    </div>
                    <div className="col-2 footer-item">
                        <p className="none">Tix</p>
                        <p>Thỏa thuận sử dụng</p>
                        <p>Chính sách bảo mật</p>
                    </div>
                    <div className="col-4 footer-item">
                        <p>Đối tác</p>
                        <div className="row">
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                            <div className="col-3"><img className="img-fluid" src={img} alt=""/></div>
                        </div>
                    </div>
                    <div className="col-2 footer-item" >
                        <p className="text">Mobile App</p>
                        <div className=" moblie">
                        <i class="fab fa-apple"></i>
                        <i class="fab fa-android"></i>
                        </div>
                        
                    </div>
                    <div className="col-2 footer-item">
                        <p className="text">Social</p>
                        <div className="social">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="row">
                    <div className="col-2"><img className="img-fluid" src={img1} alt=""/></div>
                    <div className="col-8 footer2">
                        <div className="mx-auto">
                        <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
Số Điện Thoại (Hotline): 1900 545 436
Email: <span><a href="">support@tix.vn</a></span> </p>
                        </div>
                      
                    </div>
                    <div className="col-2"><img className="img-fluid" src={img2} alt=""/></div>
                </div>
            </div>
            
        </div>
    )
}
