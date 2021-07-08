import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,NavLink, Redirect} from 'react-router-dom'
import logo from '../../Assets/img/logo.png'
import index from './header.scss'

export default function Header() {
    const {credentials} = useSelector((state)=>state.user)
    const handleOut = ()=>{
        
           
        localStorage.clear()
    }
    
    return (

             <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand" href="#">
      <img className="logo" src={logo}  alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
  <ul className="navbar-nav ul mx-auto">
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="#lichchieu">Lịch Chiếu</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Cụm Rạp</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Tin Tức</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Ứng Dụng</NavLink>
        </li>
    </ul>
    <ul className="navbar-nav ul">
        {credentials ? <li className="nav-item">
            <a  id="nam"  data-toggle="collapse" href="#collapseExample"  className="nav-link">Hi, {credentials.hoTen}  </a>
            <div class="collapse" id="collapseExample">
                <a className="coll" href="" onClick={handleOut}>Đăng Xuất</a>
            </div>
        </li>: <> <li className="nav-item">
            <NavLink to="/signup" className="nav-link" href="/signup">Đăng Kí</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/login" className="nav-link" href="/login">Đăng Nhập</NavLink>
        </li>
        </>
        }
        
       
    </ul>
    <ul className="navbar-nav mx-auto d-lg-none">
    <li className="nav-item"> 
            <NavLink exact to="/" className="nav-link" href="/">Lịch Chiếu</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Cụm Rạp</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Tin Tức</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="/">Ứng Dụng</NavLink>
        </li>
        {credentials ? <li className="nav-item">
            <span className="nav-link">Hi, {credentials.hoTen} </span>
        </li>: <> <li className="nav-item">
            <NavLink to="/signup" className="nav-link" href="/signup">Đăng Kí</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/login" className="nav-link" href="/login">Đăng Nhập</NavLink>
        </li>
        </>
        }
    </ul>
  </div>
</nav>
        </div>

       
        

    )
}
