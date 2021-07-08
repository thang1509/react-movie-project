import { Suspense} from 'react'
import './App.css';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import SignUp from './Pages/SignUp';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import Header from './Layouts/Header';
import SignIn from './Pages/SignIn';

import AdminLayout from './Layouts/AdminLayout';
import AppLayout from './Layouts/AppLayout';
import AdminRoute from './auth/AdminRoute';
import Loading from '../src/Pages/Loading'
import AdminUsers from './Pages/AdminUsers';
import AdminMovies from './Pages/AdminMovies';
import Checkout from './Pages/Checkout';


function App() {

 
  //Duy trì đăng nhập khi load lại trang
  // const getCredentialsFromLocal = () =>{
  //   const credentialsStr = localStorage.getItem('credentials');
  //   if(credentialsStr){
  //      dispatch({type:FETCH_CREDENTIALS,payload:JSON.parse(credentialsStr)})
  //   }
  // }
  // useEffect(()=>{
  //  getCredentialsFromLocal()
  // },[])
  return (
    <Suspense fallback={<div ><Loading/></div>}>
   <BrowserRouter>
     <Header/>
    <Switch>
      {/* Route admin */}
      <Route path="/admin">
        <AdminLayout>
          <Switch>
            <Redirect exact from="/admin" to="/admin/movies"/>
            <AdminRoute path="/admin/movies">
                <AdminMovies/>
              </AdminRoute>
              <AdminRoute path="/admin/users">
                <AdminUsers/>
              </AdminRoute>
          </Switch>
        </AdminLayout>
      </Route>
      {/* Route main */}
      <Route path="/">
        <AppLayout >
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/detail/:value">
              <Detail />
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <SignIn/>
            </Route>
            <Route path="/checkout/:check">
              <Checkout/>
            </Route>
            <Route path="*">
              <div>Page not found</div>
            </Route>
          </Switch>
        </AppLayout>
        </Route>
      {/* <Route path="/detail/:value" component={Detail}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/" component={Home}/> */}
      
    </Switch>
   
   
   </BrowserRouter>
   </Suspense>
  );

 
}


export default App;
