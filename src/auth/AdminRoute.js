import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function AdminRoute({children, ...props}) {
    const {credentials} = useSelector((state)=>state.user)
    
    // Chua Dang Nhap
    if(!credentials){
        return <Redirect to={`/login?redirectTo=${props.path}`}/>
    }

    if(credentials.maLoaiNguoiDung !== "QuanTri"){
        return <Redirect to="/"/>
    }

    return <Route {...props}>
        {children}
    </Route>
}