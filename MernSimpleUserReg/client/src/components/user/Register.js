import React, { useState, Fragment } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './register.css'

function Register() {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post("/api/users", {
        fname,
        lname,
        phone,
        email,
        password,
      }, config)
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data))
      navigate('/login')
    }
    catch (error) {
      console.log(error.response.data.message);
    }



  }
  const clickHandle = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row  pt-5" >
          <div className="col-lg-10 border shadow py-5 ps-5">
            <div className="form-head">
              <h3>Create An Account</h3>
            </div>
            <div className="form-body pt-2">
              <form action="" className='form' onSubmit={submitHandler} >

                <div className='input-field py-3'>
                  <label htmlFor="">First Name</label>
                  {/* <p>{errors.fname}</p> */}
                  <input className='px-2' type="text"
                    value={fname} onChange={((e) => {
                      setFname(e.target.value)
                    })} required />
                  <label htmlFor="">Last Name</label>
                  <input className='ps-2' type="text" name='last-name'
                    value={lname} onChange={((e) => {
                      setLname(e.target.value)
                    })} required />
                  {/* <p className='text-danger'>{errors.lname} </p> */}
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Mobile Number</label>
                  <input className='number ps-2' name='phone' type='number'
                    value={phone} onChange={((e) => {
                      setPhone(e.target.value)
                    })} required />
                  {/* <p className='text-danger'>{errors.phone} </p> */}
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Email Address</label>
                  <input className='email' type='email' name='email'
                    value={email} onChange={((e) => {
                      setEmail(e.target.value)
                    })} required />
                  {/* <p className='text-danger'>{errors.email} </p> */}
                </div>

                <div className='input-field py-3'>
                  <label htmlFor="">Password</label>
                  <input type="password" name='password'
                    value={password} onChange={((e) => {
                      setPassword(e.target.value)
                    })} required />

                  {/* <p className='text-danger'>{errors.password} </p> */}
                  {/* <label htmlFor="" >Confirm Password</label>
                  <input type="password" name='confirm-password'
                    value={cPassword} onChange={((e) => {
                      setCpassword(e.target.value)
                    })} required/> */}
                </div>
                <a className='text-primary' onClick={clickHandle}>Already you have an Account?</a>

                <div className="submit  mx-3 text-end">
                  <button className='submit-button-cancel  px-5 py-2 mx-1' type='reset'>Cancel</button>
                  <button className='submit-button  px-5 py-2' type='submit' >submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <form onSubmit={submitHandler}>
    //     <h3>Register</h3>

    //     <div className="form-group">
    //         <label>First name</label>
    //         <input type="text" name="name" value={name} className="form-control" placeholder="First name" onChange={(e) => { setName(e.target.value) }} />
    //     </div>



    //     <div className="form-group">
    //         <label>Email</label>
    //         <input type="email" name="email" value={email} className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
    //     </div>

    //     <div className="form-group">
    //         <label>Password</label>
    //         <input type="password" name="password" value={password} className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
    //     </div>
    //     <br />
    //     <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
    //     <p className="forgot-password text-right">
    //         Already registered <a href="" onClick={() => { navigate('/login') }}>log in?</a>
    //     </p>
    // </form>
  )
}
export default Register