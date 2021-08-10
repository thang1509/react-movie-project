import React from 'react'
import {Form,Field,Formik} from 'formik'

import { login } from '../../Redux/Action/user';
import {useSelector,useDispatch} from 'react-redux'
import { Redirect,useLocation } from "react-router-dom";
import qs from 'qs'

export default function  SignIn() {
    const {credentials} =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const location = useLocation()
    // Dang nhap thành công sẽ về trang admin hoặc trang dành cho user
    if(credentials){
        const {redirectTo} = qs.parse(location.search,{ignoreQueryPrefix:true})
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        
        else if(credentials.maLoaiNguoiDung==="QuanTri"){
            return <Redirect to="/admin"/>
        }
        return <Redirect to="/"/>
    }
   
    
    return (
        <Formik 
            initialValues={{
                taiKhoan:"",
                matKhau:""
            }}
            onSubmit={(values)=>{
                
                console.log(login(values));
                dispatch(login(values))
                
            }}
            render={({handleChange})=>(
                <Form className="w-50 mx-auto py-5" >
                <h1 className="text-center my-5">Sign In</h1>
                <div className="form-group">
                    <label>Tai Khoan</label>
                    <Field type="text" className="form-control" name="taiKhoan" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Mat Khau</label>
                    <Field type="password" className="form-control"  name="matKhau" onChange={handleChange}/>
                </div>
                <button style={{display:"flex",margin:"auto"}} className="btn btn-success">Dang Nhap</button>
            </Form>
            )}
        />
       
    )
}

