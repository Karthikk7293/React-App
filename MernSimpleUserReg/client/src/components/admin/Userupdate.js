import React ,{useEffect, useState , Fragment} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const Userupdate = () => {
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const navigate=useNavigate()
    const id1 =useParams()




    useEffect(() => {
      const getUser = async () =>{
          const {data} = await axios.get(`/api/admin/edit/${id1.id}`)
          setEmail(data.email)
          setFname(data.fname)
          setLname(data.lname)
          setPhone(data.phone)
      }
     getUser()
    }, [])
    
    const submitHandling =async (e)=>{
        e.preventDefault()
        
        try {
            const config ={
                headers: {
                    "Content-type":"application/json",
                },
            }
          
            await axios.patch(`/api/admin/edit/${id1.id}`,{
           fname,
           lname,
           phone,
           email
               
            },config)
        
          navigate('/admin')
        }

            catch(error){
                console.log(error.response.data.message);
                
            }     
        }

    return (
        <Fragment>
        <div className="container pt-5">
          <div className="row  pt-5" >
            <div className="col-lg-10 border shadow py-5 ps-5">
              <div className="form-head">
                <h3>Edit User Details</h3>
              </div>
              <div className="form-body pt-2">
                <form action="" className='form' onSubmit={submitHandling} >
  
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
  
                  
                  {/* <a className='text-primary' onClick={clickHandle}>Already you have an Account?</a> */}
  
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
    )
}

export default Userupdate
