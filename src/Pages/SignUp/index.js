import React, { Component } from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {userService} from '../../Services'



const signupUserSchema = yup.object().shape({
    taiKhoan:yup.string().required('*field is required!'),
    matKhau:yup.string().required('*field is required!'),
    hoTen:yup.string().required('*field is required!'),
    email:yup.string().required('*field is required!').email('*Email is invalid'),
    soDt:yup.string().required("*field is required!").matches(/^[0-9]+$/),
    maNhom:yup.string().required('*field is required!'),
})

class SignUp extends Component {
    _handleSubmit = (values)=>{
        userService.signUp(values) 
        .then((res)=>{
            console.log(res);
           if(res){
                alert("Them thanh cong");
                
           }
        }).catch((err)=>{
            console.log(err);
        })
        // Axios({
        //     method:"POST",
        //     url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
        //     data: values
        }
    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <Formik initialValues={{
                    taiKhoan:'',
                    matKhau:'',
                    email:'',
                    soDt:'',
                    maNhom:'GP01',
                    hoTen:'',
                }}
                validationSchema={signupUserSchema}
                onSubmit={this._handleSubmit} 
                render={(formikProps)=>(
                    <Form className="py-5">
                        <h1 className="text-center">Sign Up</h1>
                    <div className="form-group">
                        <label>Tai Khoan</label>
                        <Field type="text"  name="taiKhoan" onChange={formikProps.handleChange} className="form-control"/>
                        <ErrorMessage name="taiKhoan"/>
                    </div>
                    <div className="form-group">
                        <label>Mat khau</label>
                        <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange}/>
                        <ErrorMessage name="matKhau">{(msg) => <div className="alert alert-danger">{msg}</div>}</ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label>Ho ten</label>
                        <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange}/>
                        <ErrorMessage name="hoTen"/>
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <Field type="text" className="form-control" name="email" onChange={formikProps.handleChange}/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className="form-group">
                        <label>So dien thoai</label>
                        <Field type="text" className="form-control" name="soDt" onChange={formikProps.handleChange}/>
                        <ErrorMessage name="soDt"/>
                    </div>
                    <div className="form-group">
                        <label>Ma nhom</label>
                        <Field component="select" name="maNhom" className="form-control" onChange={formikProps.handleChange}>
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                            <option>GP10</option>
                            <option>GP11</option>
                            <option>GP12</option>
                            <option>GP13</option>
                            <option>GP14</option>
                            <option>GP15</option>
                        </Field>
                        <ErrorMessage name="maNhom"/>
                    </div>
                    <div className="text-center">
                        <button style={{display:"flex",margin:"auto"}} className="btn btn-success">Dang Ki</button>
                    </div>
                </Form>
                )}/>
               
            </div>
        )
    }
}
export default SignUp
