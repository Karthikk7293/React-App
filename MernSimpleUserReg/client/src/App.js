import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminHome from './components/admin/AdminHome';
import AdminLogin from './components/admin/AdminLogin';
import AdminRegister from './components/admin/AdminRegister';
import Userupdate from './components/admin/Userupdate';
import Home from './components/user/Home';
import Login from './components/user/Login';
import Register from './components/user/Register';


function App() {

  return (
    <div >
      <Router>
<Routes>
<Route  path='/' element={ <Home/>}></Route>
<Route path='/Register' element={ <Register/>}></Route>
<Route path='/Login' element={ <Login/>}></Route>
<Route path='/Admin' element={ <AdminHome/>}></Route>
<Route path='/edit/:id' element={ <Userupdate/>}></Route>
<Route path='/adminlogin' element={ <AdminLogin/>}></Route>
<Route path='/adminregister' element={ <AdminRegister/>}></Route>

</Routes>
</Router>
    
    </div>
  )
}

export default App;
