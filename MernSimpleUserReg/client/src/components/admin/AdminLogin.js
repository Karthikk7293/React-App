import React,{useState,useEffect,Fragment} from 'react'
import axios from "axios"

import { useNavigate } from "react-router-dom";
import ErrorMessage from '../ErrorMessage';





const AdminLogin = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    let navigate = useNavigate();



    useEffect(() => {
        const adminInfo = localStorage.getItem("adminInfo")
 
        
        if(adminInfo){
                    navigate('/admin')
        }else{
            navigate("/Adminlogin")
        }
       
    }, [navigate])



    const adSubmitHandle = async (e) => {
        e.preventDefault()
    
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
    
            const { data } = await axios.post("/api/admin/adminlogin", {
                email,
                password,
            }, config)
            console.log(data);
            localStorage.setItem("adminInfo", JSON.stringify(data))
            if (localStorage.adminInfo) {
                navigate('/admin')
            }
    
    
        } catch (error) {
            setError("Invalid Login")
        }
    }










    return (

        // <div>
        //
        // <form onSubmit={adSubmitHandle}>

        //         <h3>Admin Log in</h3>

        //         <div className="form-group">
        //             <label>Email</label>
        //             <input type="email" className="form-control"  />
        //         </div>

        //         <div className="form-group">
        //             <label>Password</label>
        //             <input type="password" className="form-control" value={password} placeholder="Enter password"   />
        //         </div>

        //        <br/>

        //         <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
              
        //     </form>
        //     </div>

<Fragment>
<div className="container pt-5">
  <div className="row pt-5" >
    <div className="col-lg-8 border shadow py-5 ps-5">
      <div className="form-head">
        <h3>Registered Admin</h3>
      </div>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

      <div className="form-body pt-2">
        <form action="" className='form' onSubmit={adSubmitHandle}>

          

          
          <div className='input-field py-3'>
            <label htmlFor="">Email Address</label>
            <input className='email' type='email' 
              value={email} name='email'  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" required />
          </div>

          <div className='input-field py-3'>
            <label htmlFor="">Password</label>
            <input type="password" 
             value={password} name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required/>
           
          </div>
          <a className='text-primary' href='/#' onClick={()=>{navigate("/adminregister")}} >Are you new here ?</a>
          <div className="submit text-end mx-3 ">
          <button className='submit-button-cancel  px-5 py-2 mx-1' type='cancel'>Cancel</button>
            <button className='submit-button  px-5 py-2' type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</Fragment>
    )
}

export default AdminLogin
