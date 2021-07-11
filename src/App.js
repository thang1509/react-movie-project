import {lazy, Suspense} from 'react'
import './App.css';

import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import Header from './Layouts/Header';


import AdminLayout from './Layouts/AdminLayout';
import AppLayout from './Layouts/AppLayout';
import AdminRoute from './auth/AdminRoute';
import Loading from '../src/Pages/Loading'


const Home = lazy(()=>import("./Pages/Home"))
const Detail = lazy(()=>import("./Pages/Detail"))
const SignIn = lazy(()=>import("./Pages/SignIn"))
const SignUp = lazy(()=>import("./Pages/SignUp"))
const Checkout = lazy(()=>import("./Pages/Checkout"))
const AdminUsers = lazy(()=>import("./Pages/AdminUsers"))
const AdminMovies = lazy(()=>import("./Pages/AdminMovies"))
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
    <Suspense fallback={<Loading/>}>
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
